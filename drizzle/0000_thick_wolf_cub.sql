CREATE TABLE `guild_settings` (
	`guild_id` text PRIMARY KEY NOT NULL,
	`welcome_channel_id` text,
	`welcome_message` text DEFAULT 'ยินดีต้อนรับ {user} เข้าสู่ {server} 🎉' NOT NULL,
	`welcome_enabled` integer DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE `role_buttons` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`guild_id` text NOT NULL,
	`role_id` text NOT NULL,
	`label` text NOT NULL,
	`emoji` text
);
