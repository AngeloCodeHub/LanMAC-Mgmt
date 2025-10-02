// console.log("Hello via Bun!");

// 在你的應用程式入口檔案 (例如 app.js 或 server.js)
require('dotenv').config(); // 載入 .env 檔案中的環境變數
// require('dotenv').config({ path: './config/.env.development' });

const port = process.env.PORT || 8080; // 從 .env 獲取 PORT，如果沒有則預設為 8080
const dbUri = process.env.DB_URI;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

console.log(`應用程式將在埠號 ${port} 上運行`);
console.log(`資料庫 URI: ${dbUri}`);
console.log(`Stripe 密鑰: ${stripeSecretKey}`);
console.log(`Stripe 密鑰: ${stripeSecretKey ? '已載入' : '未載入'}`);
