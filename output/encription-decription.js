const crypto = require("crypto");

// Secret key (32 bytes for AES-256)
const key = crypto.randomBytes(32);

// Initialization vector (16 bytes)
const iv = crypto.randomBytes(16);

// Encrypt function
function encrypt(text) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

// Decrypt function
function decrypt(encryptedData) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// Try it out
const data = "Hello, this is secret!";
const encrypted = encrypt(data);
const decrypted = decrypt(encrypted);

console.log("Encrypted:", encrypted);
console.log("Decrypted:", decrypted);
