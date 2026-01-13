# Supabase Setup Instructions

## Step 1: Add Environment Variables

Create or update `.env.local` file in the root directory with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://iqceigotdrnqpfweuehw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxY2VpZ290ZHJucXBmd2V1ZWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTY1NzcsImV4cCI6MjA3OTYzMjU3N30.5_sd28Gdt592GDErV7oSkcWEmho-NBVpQWAvrf1xsKE
```

## Step 2: Run Database Schema

1. Go to your Supabase project: https://supabase.com/dashboard/project/iqceigotdrnqpfweuehw
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy the entire contents of `supabase/schema.sql`
5. Paste into the SQL editor
6. Click "Run" button

This will create all the necessary tables, indexes, and triggers.

## Step 3: Verify Tables Created

In Supabase Dashboard:
1. Go to "Table Editor"
2. You should see all these tables:
   - users
   - clients
   - leads
   - projects
   - tasks
   - subtasks
   - revisions
   - files
   - payments
   - comments
   - activities
   - blog_posts
   - settings

## Step 4: Restart Dev Server

After adding environment variables:
```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

## Step 5: Run Migration (Optional)

If you want to migrate existing localStorage data to Supabase:

1. Create a temporary migration page at `app/admin/migrate/page.tsx`
2. Add a button to trigger the migration
3. Click the button to migrate data
4. Delete the migration page after successful migration

## Troubleshooting

**If tables don't appear:**
- Check for SQL errors in the Supabase SQL Editor
- Make sure you ran the entire schema.sql file
- Check the "Logs" section in Supabase for errors

**If environment variables don't work:**
- Make sure `.env.local` is in the root directory
- Restart the dev server after adding variables
- Check that variable names match exactly (including NEXT_PUBLIC_ prefix)

## Next Steps

Once setup is complete:
- Update API routes to use Supabase instead of localStorage
- Test CRUD operations
- Implement real-time features
- Add file storage using Supabase Storage
