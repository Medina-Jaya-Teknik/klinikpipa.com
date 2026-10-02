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

  // Dynamically load areas and blog posts from source files as fallback
  try {
    const siteConfigContent = fs.readFileSync(path.join(__dirname, "../config/site.ts"), "utf8");
    const areaMatches = [...siteConfigContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    areaMatches.forEach((m) => {
      const slug = m[1];
      const areaUrl = `https://${HOST}/kota/${slug}`;
      if (!urls.includes(areaUrl)) urls.push(areaUrl);
    });

    const blogDataContent = fs.readFileSync(path.join(__dirname, "../lib/blog-data.ts"), "utf8");
    const blogMatches = [...blogDataContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
    blogMatches.forEach((m) => {
      const slug = m[1];
      const blogUrl = `https://${HOST}/blog/${slug}`;
      if (!urls.includes(blogUrl)) urls.push(blogUrl);
    });
  } catch (e) {
    console.warn("⚠️ Could not read source config for URLs:", e.message);
  }

  if (fs.existsSync(SITEMAP_PATH)) {
    try {
      const xmlContent = fs.readFileSync(SITEMAP_PATH, "utf8");
      const result = await xml2js.parseStringPromise(xmlContent);
      if (result.urlset && result.urlset.url) {
        urls = result.urlset.url.map((u) => u.loc[0]);
      }
    } catch (err) {
      console.warn("⚠️ Could not parse sitemap.xml, using extracted source URLs:", err.message);
    }
  }

  console.log(`📋 Total URLs queued for IndexNow submission: ${urls.length}`);

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
