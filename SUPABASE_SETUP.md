# 🚀 Quick Setup Guide

## What I've Done:

✅ Installed Supabase dependencies
✅ Created Supabase client utilities
✅ Created complete database schema (15+ tables)
✅ Created migration script for existing data

## What You Need to Do:

### 1. Add Environment Variables (2 minutes)

Create a file called `.env.local` in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://iqceigotdrnqpfweuehw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxY2VpZ290ZHJucXBmd2V1ZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTY1NzcsImV4cCI6MjA3OTYzMjU3N30.5_sd28Gdt592GDErV7oSkcWEmho-NBVpQWAvrf1xsKE
```

### 2. Run Database Schema (3 minutes)

1. Go to: https://supabase.com/dashboard/project/iqceigotdrnqpfweuehw/sql/new
2. Open the file `supabase/schema.sql` in your project
3. Copy ALL the SQL code
4. Paste it into the Supabase SQL Editor
5. Click the green "Run" button

You should see: "Success. No rows returned"

### 3. Verify Tables (1 minute)

Go to: https://supabase.com/dashboard/project/iqceigotdrnqpfweuehw/editor

You should see these tables:
- clients
- projects  
- tasks
- payments
- leads
- files
- revisions
- comments
- activities
- blog_posts
- settings
- users
- subtasks

### 4. Restart Dev Server

Stop your current server (Ctrl+C) and run:
```bash
npm run dev
```

## That's It!

Once you complete these 4 steps, reply with **"Database ready"** and I'll:
1. Update all API routes to use Supabase
2. Migrate your existing data
3. Start building the enhanced features!

---

**Need help?** Check `supabase/SETUP.md` for detailed troubleshooting.
