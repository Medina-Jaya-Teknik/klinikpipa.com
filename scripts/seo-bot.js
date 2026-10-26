/**
 * Klinik Pipa - SEO Master Automated Bot
 * 
 * Fitur:
 * 1. Google Search Console (GSC) Query Mining (Keyword posisi 8-25 & Top Performer)
 * 2. Mobile PageSpeed Insights & Web Vitals Audit
 * 3. Sitemap & HTTP Response Health Checker
 * 4. Notifikasi Otomatis ke Telegram
 * 
 * Penggunaan:
 * node scripts/seo-bot.js --mode=monday     (Laporan keyword mingguan & rekomendasi artikel)
 * node scripts/seo-bot.js --mode=wednesday  (Audit kesehatan website & Core Web Vitals)
 * node scripts/seo-bot.js --test            (Kirim pesan tes ke Telegram)
 */

const https = require("https");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

// Load local env files (.env.local, .env, or fallback)
const envFiles = [".env.local", ".env", ".env.example"];
for (const file of envFiles) {
  try {
    const envPath = path.join(__dirname, "..", file);
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, "utf8");
      envContent.split("\n").forEach((line) => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        const [key, ...rest] = trimmed.split("=");
        if (key && rest.length > 0) {
          const varName = key.trim();
          const varValue = rest.join("=").trim().replace(/^["']|["']$/g, "");
          if (!process.env[varName] && varValue && !varValue.includes("your_")) {
            process.env[varName] = varValue;
          }
        }
      });
    }
  } catch (e) {
    // Ignore env loading error
  }
}

const CONFIG = {
  siteUrl: process.env.SITE_URL || "https://klinikpipa.com",
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
  telegramChatId: process.env.TELEGRAM_CHAT_ID || "",
  gscClientEmail: process.env.GSC_CLIENT_EMAIL || "",
  gscPrivateKey: (process.env.GSC_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  gscSiteUrl: process.env.GSC_SITE_URL || "sc-domain:klinikpipa.com",
  pagespeedApiKey: process.env.PAGESPEED_API_KEY || "",
};

// Helper: HTTP Request
function request(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url);
    const reqOptions = {
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      method: options.method || "GET",
      headers: options.headers || {},
    };

    const req = https.request(reqOptions, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data,
        });
      });
    });

    req.on("error", reject);
    if (options.body) {
      req.write(options.body);
    }
    req.end();
  });
}

// 1. Kirim Pesan ke Telegram
async function sendTelegramMessage(text) {
  if (!CONFIG.telegramBotToken || !CONFIG.telegramChatId) {
    console.log("⚠️ TELEGRAM_BOT_TOKEN atau TELEGRAM_CHAT_ID belum diatur.");
    console.log("Pesan yang akan dikirim:\n-------------------");
    console.log(text);
    console.log("-------------------");
    return false;
  }

  const url = `https://api.telegram.org/bot${CONFIG.telegramBotToken}/sendMessage`;
  const payload = JSON.stringify({
    chat_id: CONFIG.telegramChatId,
    text: text,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
  });

  try {
    const res = await request(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
      body: payload,
    });

    const parsed = JSON.parse(res.body);
    if (parsed.ok) {
      console.log("✅ Pesan berhasil terkirim ke Telegram!");
      return true;
    } else {
      console.error("❌ Gagal kirim Telegram:", parsed.description);
      return false;
    }
  } catch (err) {
    console.error("❌ Error mengirim Telegram:", err.message);
    return false;
  }
}

// 2. Audit Google PageSpeed Insights (Mobile)
async function auditPageSpeed(targetUrl) {
  console.log(`🔍 Mengaudit PageSpeed untuk: ${targetUrl}...`);
  try {
    let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&strategy=mobile&category=performance`;
    if (CONFIG.pagespeedApiKey) {
      apiUrl += `&key=${CONFIG.pagespeedApiKey}`;
    }
    const res = await request(apiUrl);
    
    if (res.statusCode !== 200) {
      const msg = res.statusCode === 429 ? "Rate Limit (Gunakan PAGESPEED_API_KEY gratis dari Google Cloud)" : `HTTP ${res.statusCode}`;
      return { success: false, error: msg };
    }

    const data = JSON.parse(res.body);
    const lighthouse = data.lighthouseResult;
    const score = Math.round(lighthouse.categories.performance.score * 100);
    const audits = lighthouse.audits;

    const fcp = audits["first-contentful-paint"] ? audits["first-contentful-paint"].displayValue : "N/A";
    const lcp = audits["largest-contentful-paint"] ? audits["largest-contentful-paint"].displayValue : "N/A";
    const cls = audits["cumulative-layout-shift"] ? audits["cumulative-layout-shift"].displayValue : "N/A";

    return {
      success: true,
      score,
      fcp,
      lcp,
      cls,
    };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

// 3. Cek Status URL & Sitemap
async function checkSiteHealth() {
  console.log("🏥 Memeriksa status kesehatan website...");
  const urlsToCheck = [
    `${CONFIG.siteUrl}/`,
    `${CONFIG.siteUrl}/layanan`,
    `${CONFIG.siteUrl}/tentang`,
    `${CONFIG.siteUrl}/kontak`,
    `${CONFIG.siteUrl}/blog`,
    `${CONFIG.siteUrl}/sitemap.xml`,
  ];

  const results = [];
  for (const url of urlsToCheck) {
    try {
      const res = await request(url, { method: "HEAD" });
      results.push({ url, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 });
    } catch (e) {
      results.push({ url, status: "ERROR", ok: false });
    }
  }
  return results;
}

// 4. Buat Google OAuth Token (Service Account JWT)
function createGoogleJWT(clientEmail, privateKey, scope) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const claim = {
    iss: clientEmail,
    scope: scope,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString("base64url");
  const base64Claim = Buffer.from(JSON.stringify(claim)).toString("base64url");
  const signatureInput = `${base64Header}.${base64Claim}`;

  const signer = crypto.createSign("RSA-SHA256");
  signer.update(signatureInput);
  const signature = signer.sign(privateKey, "base64url");

  return `${signatureInput}.${signature}`;
}

async function getGoogleAccessToken() {
  if (
    !CONFIG.gscClientEmail ||
    !CONFIG.gscPrivateKey ||
    CONFIG.gscPrivateKey.includes("...") ||
    CONFIG.gscClientEmail.includes("your-service-account")
  ) {
    return null;
  }

  try {
    const jwt = createGoogleJWT(
      CONFIG.gscClientEmail,
      CONFIG.gscPrivateKey,
      "https://www.googleapis.com/auth/webmasters.readonly"
    );

    const body = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;
    const res = await request("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(body),
      },
      body: body,
    });

    if (res.statusCode === 200) {
      const data = JSON.parse(res.body);
      return data.access_token;
    }
    console.warn("⚠️ Gagal generate Google Access Token:", res.body);
    return null;
  } catch (err) {
    console.warn("⚠️ GSC Service Account belum valid (menggunakan fallback keyword):", err.message);
    return null;
  }
}

// 5. Tarik Data Kata Kunci dari GSC
async function fetchGSCKeywords(accessToken) {
  if (!accessToken) {
    return null;
  }

  const today = new Date();
  const endDate = new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]; // GSC delay 3 hari
  const startDate = new Date(today.getTime() - 31 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const payload = JSON.stringify({
    startDate,
    endDate,
    dimensions: ["query"],
    rowLimit: 100,
  });

  const siteId = encodeURIComponent(CONFIG.gscSiteUrl);
  const url = `https://www.googleapis.com/webmasters/v3/sites/${siteId}/searchAnalytics/query`;

  const res = await request(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(payload),
    },
    body: payload,
  });

  if (res.statusCode === 200) {
    const data = JSON.parse(res.body);
    console.log(`✅ Berhasil terhubung ke GSC! Ditemukan ${data.rows ? data.rows.length : 0} data kata kunci.`);
    return data.rows || [];
  } else {
    console.warn(`⚠️ Info GSC API (HTTP ${res.statusCode}):`, res.body);
  }
  return null;
}

// ================= ROUTINES ================= //

// SENIN: Query Mining & Ide Konten
async function runMondayRoutine() {
  console.log("🚀 Menjalankan Rutinitas Senin (GSC Mining)...");

  let message = `📊 *[KLINIK PIPA] LAPORAN SEO SENIN*\n`;
  message += `🗓️ ${new Date().toLocaleDateString("id-ID", { dateStyle: "full" })}\n\n`;

  const accessToken = await getGoogleAccessToken();
  let gscRows = await fetchGSCKeywords(accessToken);

  if (!gscRows || gscRows.length === 0) {
    message += `⚠️ _GSC API belum terhubung atau belum ada data klik bulan ini._\n\n`;
    message += `💡 *Target Rekomendasi Kata Kunci Minggu Ini:*\n`;
    message += `1. \`biaya saluran mampet bandung\` (High commercial intent)\n`;
    message += `2. \`jasa pipa wastafel mampet antapani\` (Local long-tail)\n`;
    message += `3. \`cara mengatasi wc mampet tanpa sedot\` (Topik blog edukasi)\n\n`;
  } else {
    // 1. Low Hanging Fruits (Posisi 8 - 25 dengan impresi tinggi)
    const lowHanging = gscRows
      .filter((r) => r.position >= 8 && r.position <= 25)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 5);

    // 2. Top Performers (Posisi 1 - 5)
    const topPerformers = gscRows
      .filter((r) => r.position <= 5)
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 3);

    if (lowHanging.length > 0) {
      message += `🎯 *5 Keyword Potensial (Posisi 8–25) Siap Digenjot:*\n`;
      lowHanging.forEach((item, idx) => {
        const query = item.keys[0];
        message += `${idx + 1}. \`${query}\`\n   ├ Impresi: *${item.impressions}* | Posisi: *${item.position.toFixed(1)}*\n`;
      });
      message += `\n`;
    }

    if (topPerformers.length > 0) {
      message += `🏆 *Top 3 Keyword Unggulan (Halaman 1):*\n`;
      topPerformers.forEach((item, idx) => {
        const query = item.keys[0];
        message += `${idx + 1}. \`${query}\` (Klik: *${item.clicks}* | Pos: *${item.position.toFixed(1)}*)\n`;
      });
      message += `\n`;
    }
  }

  message += `📝 *Aksi SEO Minggu Ini:*\n`;
  message += `• Sisipkan kata kunci potensial di atas ke sub-heading (H2/H3) halaman layanan.\n`;
  message += `• Jadwalkan 1 artikel blog di hari Kamis.\n`;
  message += `• Upload 1 foto pengerjaan pipa di Google Bisnisku hari Jumat.`;

  await sendTelegramMessage(message);
}

// RABU: Audit Kesehatan & Kecepatan Website
async function runWednesdayRoutine() {
  console.log("🚀 Menjalankan Rutinitas Rabu (Site Health & Speed)...");

  let message = `🏥 *[KLINIK PIPA] AUDIT KESEHATAN RABU*\n`;
  message += `🗓️ ${new Date().toLocaleDateString("id-ID", { dateStyle: "full" })}\n\n`;

  // 1. Health check
  const healthResults = await checkSiteHealth();
  const failed = healthResults.filter((r) => !r.ok);

  message += `🌐 *Status HTTP Rute Kunci:*\n`;
  if (failed.length === 0) {
    message += `✅ Semua rute utama normal (HTTP 200 OK).\n`;
  } else {
    message += `🚨 *Ditemukan Masalah:*\n`;
    failed.forEach((f) => {
      message += `• ${f.url} -> Status: *${f.status}*\n`;
    });
  }
  message += `\n`;

  // 2. PageSpeed Audit
  const speed = await auditPageSpeed(CONFIG.siteUrl);
  if (speed.success) {
    console.log(`✅ PageSpeed Berhasil! Skor Mobile: ${speed.score}/100, LCP: ${speed.lcp}`);
  } else {
    console.warn(`⚠️ PageSpeed Info:`, speed.error);
  }
  message += `⚡ *Google PageSpeed Insights (Mobile):*\n`;
  if (speed.success) {
    const badge = speed.score >= 90 ? "🟢" : speed.score >= 70 ? "🟡" : "🔴";
    message += `${badge} Skor Performa: *${speed.score}/100*\n`;
    message += `• First Contentful Paint: *${speed.fcp}*\n`;
    message += `• Largest Contentful Paint: *${speed.lcp}*\n`;
    message += `• Cumulative Layout Shift: *${speed.cls}*\n`;
  } else {
    message += `⚠️ Gagal membaca PageSpeed: ${speed.error}\n`;
  }

  await sendTelegramMessage(message);
}

// TEST: Kirim pesan tes
async function runTest() {
  console.log("🧪 Mengirim pesan tes ke Telegram...");
  const msg = `🤖 *Klinik Pipa SEO Bot*: Sistem notifikasi berhasil terhubung! Siap menerima laporan otomatis setiap Senin & Rabu.`;
  await sendTelegramMessage(msg);
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  const mode = (args.find((a) => a.startsWith("--mode=")) || "").split("=")[1];

  if (args.includes("--test")) {
    await runTest();
  } else if (mode === "monday") {
    await runMondayRoutine();
  } else if (mode === "wednesday") {
    await runWednesdayRoutine();
  } else {
    console.log("Menjalankan Laporan Lengkap (Default)...");
    await runMondayRoutine();
    await runWednesdayRoutine();
  }
}

main().catch((err) => {
  console.error("Fatal Error:", err);
  process.exit(1);
});
