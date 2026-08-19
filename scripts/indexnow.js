const https = require("https");
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const HOST = "klinikpipa.com";
const KEY = "a0bf1e37ff7349b99df98736ab383c0f";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, "../out/sitemap.xml");

async function pushToIndexNow() {
  console.log("🚀 Starting IndexNow Automated Submission...");

  let urls = [
    `https://${HOST}/`,
    `https://${HOST}/layanan`,
    `https://${HOST}/tentang`,
    `https://${HOST}/kontak`,
    `https://${HOST}/blog`,
  ];

  if (fs.existsSync(SITEMAP_PATH)) {
    try {
      const xmlContent = fs.readFileSync(SITEMAP_PATH, "utf8");
      const result = await xml2js.parseStringPromise(xmlContent);
      if (result.urlset && result.urlset.url) {
        urls = result.urlset.url.map((u) => u.loc[0]);
      }
    } catch (err) {
      console.warn("⚠️ Could not parse sitemap.xml, fallback to default URLs:", err.message);
    }
  }

  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  const options = {
    hostname: "api.indexnow.org",
    port: 443,
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  };

  const req = https.request(options, (res) => {
    console.log(`📡 IndexNow API Response Code: ${res.statusCode}`);
    res.on("data", (d) => process.stdout.write(d));
  });

  req.on("error", (e) => {
    console.error("❌ IndexNow Request Error:", e);
  });

  req.write(payload);
  req.end();
}

pushToIndexNow();
