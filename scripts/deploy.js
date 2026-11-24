const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let Client;
try {
  Client = require('ssh2').Client;
} catch {
  try {
    Client = require(path.join(__dirname, '../../dnd-gm.com/node_modules/ssh2')).Client;
  } catch (err) {
    console.error('❌ Modul ssh2 tidak ditemukan! Silakan install: npm i -D ssh2');
    process.exit(1);
  }
}

// 1. Baca konfigurasi dari sftp-config.json (aman di .gitignore)
const configPath = path.join(__dirname, '..', 'sftp-config.json');
if (!fs.existsSync(configPath)) {
  console.error('❌ File sftp-config.json tidak ditemukan!');
  process.exit(1);
}

let rawConfig = fs.readFileSync(configPath, 'utf8');

function parseLooseJson(text) {
  try {
    let clean = text.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
    clean = clean.replace(/,(\s*[}\]])/g, '$1');
    return JSON.parse(clean);
  } catch (e) {
    const getVal = (key) => {
      const match = text.match(new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`));
      return match ? match[1] : null;
    };
    return {
      host: getVal('host') || '103.67.78.5',
      user: getVal('user') || 'vzveda',
      password: getVal('password'),
      port: parseInt(getVal('port'), 10) || 22022,
      remote_path: getVal('remote_path') || '/var/www/klinikpipa.com'
    };
  }
}

const config = parseLooseJson(rawConfig);

console.log('🚀 [1/3] Melakukan push commit terbaru ke GitHub...');
try {
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Berhasil push ke GitHub!\n');
} catch (err) {
  console.warn('⚠️ Peringatan saat git push (mungkin sudah up-to-date), melanjutkan deploy...\n');
}

console.log(`🔌 [2/3] Menghubungkan ke VPS (${config.host}:${config.port || 22022})...`);

const conn = new Client();

conn.on('ready', () => {
  console.log('✅ Terhubung ke VPS! Menjalankan proses build & restart PM2...\n');

  const remoteCommands = [
    `cd ${config.remote_path || '/var/www/klinikpipa.com'}`,
    'export NVM_DIR="$HOME/.nvm"',
    '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"',
    'echo "📥 [VPS] Menarik update dari GitHub..."',
    'git fetch origin main',
    'git reset --hard origin/main',
    'echo "📦 [VPS] Menginstall dependencies..."',
    'npm install',
    'echo "⏸️ [VPS] Menghentikan sementara proses PM2 untuk build bersih (hemat RAM)..."',
    'pm2 stop klinikpipa || true',
    'echo "🏗️ [VPS] Membuild aplikasi Next.js..."',
    'export NODE_OPTIONS=--max-old-space-size=1536',
    'npm run build',
    'echo "▶️ [VPS] Menjalankan kembali aplikasi PM2..."',
    'pm2 restart klinikpipa || pm2 start ecosystem.config.js',
    'pm2 save',
    'echo "📊 [VPS] Status Aplikasi:"',
    'pm2 show klinikpipa',
    'echo "🎉 [VPS] Selesai!"'
  ].join(' && ');

  conn.exec(remoteCommands, (err, stream) => {
    if (err) {
      console.error('❌ Gagal menjalankan perintah di VPS:', err);
      conn.end();
      process.exit(1);
    }

    stream.on('close', (code, signal) => {
      conn.end();
      if (code === 0) {
        console.log('\n=============================================');
        console.log('✨ DEPLOY BERHASIL 100%! Website Anda live:');
        console.log('🌐 https://klinikpipa.com');
        console.log('🌐 https://klinikpipa.com/blog/jasa-saluran-mampet-bandung');
        console.log('=============================================\n');
      } else {
        console.error(`\n❌ Deployment gagal dengan exit code: ${code}`);
        process.exit(code);
      }
    });

    stream.on('data', (data) => {
      process.stdout.write(data);
    });

    stream.stderr.on('data', (data) => {
      process.stderr.write(data);
    });
  });
}).on('error', (err) => {
  console.error('❌ Gagal terhubung via SSH:', err.message);
  process.exit(1);
}).connect({
  host: config.host || '103.67.78.5',
  port: parseInt(config.port, 10) || 22022,
  username: config.user || 'vzveda',
  password: config.password,
  readyTimeout: 30000
});
