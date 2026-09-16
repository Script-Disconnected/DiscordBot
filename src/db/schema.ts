import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const guildSettings = sqliteTable("guild_settings", {
  guildId: text("guild_id").primaryKey(),
  welcomeChannelId: text("welcome_channel_id"),
  welcomeMessage: text("welcome_message").notNull().default("ยินดีต้อนรับ {user} เข้าสู่ {server} 🎉"),
  welcomeEnabled: integer("welcome_enabled", { mode: "boolean" }).notNull().default(true)
});

export const roleButtons = sqliteTable("role_buttons", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  guildId: text("guild_id").notNull(),
  roleId: text("role_id").notNull(),
  label: text("label").notNull(),
  emoji: text("emoji")
});
