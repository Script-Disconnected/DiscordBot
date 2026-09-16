import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const dbPath = process.env.DATABASE_URL || "./data/bot.db";
fs.mkdirSync(path.dirname(path.resolve(dbPath)), { recursive: true });
const sqlite = new Database(dbPath);
sqlite.exec(`
CREATE TABLE IF NOT EXISTS guild_settings (
  guild_id TEXT PRIMARY KEY,
  welcome_channel_id TEXT,
  welcome_message TEXT NOT NULL DEFAULT 'ยินดีต้อนรับ {user} เข้าสู่ {server} 🎉',
  welcome_enabled INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE IF NOT EXISTS role_buttons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guild_id TEXT NOT NULL,
  role_id TEXT NOT NULL,
  label TEXT NOT NULL,
  emoji TEXT
);
`);
export const db = drizzle(sqlite);
export { guildSettings, roleButtons } from "./schema.js";
