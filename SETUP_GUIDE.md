# Digital Wing - Form Integration Setup Guide

## 🎯 **What This Does:**
- **Contact Form**: Sends data to Google Sheets + Email notification
- **Booking Form**: Sends data to Google Sheets + Email notification
- **Both forms work independently** - if one fails, the other still works

## 📧 **Email Setup (Gmail)**

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Enable 2-Factor Authentication

### Step 2: Generate App Password
1. Go to Google Account → Security → App passwords
2. Generate a new app password for "Mail"
3. Copy the 16-character password

### Step 3: Add to Environment Variables
Create a `.env.local` file in your project root:
```env
EMAIL_USER=tonystanks121@gmail.com
EMAIL_PASS=your-16-character-app-password
```

## 📊 **Google Sheets Setup**

### Step 1: Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Digital Wing - Form Submissions"
4. Copy the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`

### Step 2: Set Up Sheets
Create two sheets in your spreadsheet:

#### Sheet 1: "Contact Submissions"
Headers in row 1:
```
Timestamp | Name | Email | Phone | Message | Source
```

#### Sheet 2: "Appointment Bookings"
Headers in row 1:
```
Timestamp | Name | Email | Phone | Date | Time | Source
```

### Step 3: Google Cloud Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Google Sheets API
4. Create a Service Account:
   - Go to "IAM & Admin" → "Service Accounts"
   - Click "Create Service Account"
   - Name it "Digital Wing Forms"
   - Download the JSON key file

### Step 4: Share Sheet
1. Open your Google Sheet
2. Click "Share" button
3. Add your service account email (from JSON file)
4. Give "Editor" permissions

### Step 5: Add to Environment Variables
Add to your `.env.local` file:
```env
GOOGLE_SHEET_ID=your-sheet-id-from-url
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key From JSON\n-----END PRIVATE KEY-----\n"
```

## 🚀 **Deploy to Vercel**

### Step 1: Add Environment Variables to Vercel
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add all the variables from `.env.local`

### Step 2: Deploy
```bash
git add .
git commit -m "Add Google Sheets and email integration"
git push
```

## ✅ **Testing**

### Test Contact Form:
1. Fill out contact form on your website
2. Check your email for notification
3. Check Google Sheet for new row

### Test Booking Form:
1. Fill out booking form on your website
2. Check your email for notification
3. Check Google Sheet for new row

## 🔧 **Troubleshooting**

### Email Not Working:
- Check if 2FA is enabled
- Verify app password is correct
- Check Gmail settings for "Less secure app access"

### Google Sheets Not Working:
- Verify service account has editor access
- Check if Google Sheets API is enabled
- Verify sheet ID is correct
- Check if sheet names match exactly

### Both Not Working:
- Check environment variables in Vercel
- Verify all dependencies are installed
- Check server logs for errors

## 📱 **Mobile Responsive**
All forms are now mobile-responsive and will work perfectly on phones and tablets!

## 🎉 **You're All Set!**
Your forms will now:
- ✅ Send email notifications to tonystanks121@gmail.com
- ✅ Store all data in Google Sheets
- ✅ Work on mobile devices
- ✅ Show success/error messages
- ✅ Handle network errors gracefully 