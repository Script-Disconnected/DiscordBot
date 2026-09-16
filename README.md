# Discord Meeting Bot V2

ระบบนัดประชุมสำหรับ Discord โดยเน้นใช้งานจริง

## Features
- สร้าง Meeting พร้อมวันที่/เวลาไทย
- Mention Role ได้สูงสุด 5 Role ต่อ Meeting
- RSVP: ✅ เข้าร่วม / ❌ ไม่ว่าง / ❓ อาจเข้าร่วม
- ดูรายชื่อผู้ตอบรับ
- `/meeting list`
- `/meeting view`
- `/meeting my`
- `/meeting cancel`
- `/meeting remind` ส่ง Reminder ทันที
- Auto Reminder ก่อนประชุมตาม REMINDER_MINUTES
- กัน Reminder ซ้ำด้วย `reminder_sent`
- Discord Timestamp ให้ผู้ใช้เห็นเวลาตาม timezone ของตัวเอง
- SQLite
- ตรวจสิทธิ์ผู้สร้าง/Admin ตอนยกเลิก
- ปุ่ม RSVP อัปเดตจำนวนแบบ real-time

## Setup
```powershell
npm install
```

ถ้า `better-sqlite3` ถูก npm block:
```powershell
npm install-scripts approve better-sqlite3
npm rebuild better-sqlite3
```

Copy `.env.example` -> `.env`

```env
DISCORD_TOKEN=
DISCORD_CLIENT_ID=
DISCORD_GUILD_ID=
DATABASE_URL=./data/bot.db
TIMEZONE=Asia/Bangkok
REMINDER_MINUTES=10
```

รัน:
```powershell
npm run dev
```

## Example
```text
/meeting create
title: Weekly Meeting
date: 2026-09-20
time: 10:00
description: ประชุมทีม
role1: @Developer
role2: @Manager
role3: @Admin
```

Bot จะ Mention ทุก Role ที่เลือก และสร้างปุ่ม RSVP

## Bot permissions
- View Channels
- Send Messages
- Embed Links
- Read Message History
- Mention Everyone/Here/All Roles (ต้องเปิดใน Server ถ้าจะ Mention Role)
- ไม่จำเป็นต้อง Manage Roles สำหรับ Meeting
