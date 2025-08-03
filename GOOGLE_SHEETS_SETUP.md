# Google Sheets Setup Guide

## 🎯 **What Will Be Created:**

### **Sheet 1: "Contact Submissions"**
```
| Timestamp | Name | Email | Phone | Message | Source |
|-----------|------|-------|-------|---------|--------|
| 2024-08-03T21:30:00Z | John Doe | john@example.com | +91 9876543210 | I need a website | Contact Form |
```

### **Sheet 2: "Appointment Bookings"**
```
| Timestamp | Name | Email | Phone | Date | Time | Source |
|-----------|------|-------|-------|------|------|--------|
| 2024-08-03T21:30:00Z | Jane Smith | jane@example.com | +91 9876543210 | 2024-08-10 | 14:00 | Appointment Booking |
```

## 🚀 **Step 1: Create Google Sheet**

1. **Go to [Google Sheets](https://sheets.google.com)**
2. **Click "Blank"** to create new spreadsheet
3. **Name it**: "Digital Wing - Form Submissions"
4. **Copy the Sheet ID** from URL:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

## 📋 **Step 2: Set Up Sheets**

### **Create "Contact Submissions" Sheet:**
1. **Rename first sheet** to "Contact Submissions"
2. **Add headers in Row 1**:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Message
   F1: Source
   ```

### **Create "Appointment Bookings" Sheet:**
1. **Click +** to add new sheet
2. **Name it**: "Appointment Bookings"
3. **Add headers in Row 1**:
   ```
   A1: Timestamp
   B1: Name
   C1: Email
   D1: Phone
   E1: Date
   F1: Time
   G1: Source
   ```

## 🔧 **Step 3: Google Cloud Setup**

### **Create Google Cloud Project:**
1. **Go to [Google Cloud Console](https://console.cloud.google.com)**
2. **Click "Select a project"** → **"New Project"**
3. **Name it**: "Digital Wing Forms"
4. **Click "Create"**

### **Enable Google Sheets API:**
1. **Go to "APIs & Services"** → **"Library"**
2. **Search for "Google Sheets API"**
3. **Click on it** → **"Enable"**

### **Create Service Account:**
1. **Go to "APIs & Services"** → **"Credentials"**
2. **Click "Create Credentials"** → **"Service Account"**
3. **Name**: "Digital Wing Forms"
4. **Click "Create and Continue"**
5. **Skip role assignment** → **"Done"**

### **Generate Key:**
1. **Click on your service account**
2. **Go to "Keys" tab**
3. **Click "Add Key"** → **"Create new key"**
4. **Choose "JSON"** → **"Create"**
5. **Download the JSON file**

## 🔗 **Step 4: Share Sheet**

1. **Open your Google Sheet**
2. **Click "Share"** button
3. **Add your service account email** (from JSON file)
4. **Give "Editor" permissions**
5. **Click "Send"**

## ⚙️ **Step 5: Add Environment Variables**

### **In Vercel:**
1. **Go to Vercel Dashboard**
2. **Find your project**
3. **Settings** → **Environment Variables**
4. **Add these variables**:

```
Name: GOOGLE_SHEET_ID
Value: [Your Sheet ID from URL]
Environment: Production, Preview, Development

Name: GOOGLE_SERVICE_ACCOUNT_EMAIL
Value: [Service account email from JSON]
Environment: Production, Preview, Development

Name: GOOGLE_PRIVATE_KEY
Value: [Private key from JSON file]
Environment: Production, Preview, Development
```

## ✅ **Step 6: Test**

1. **Fill out contact form** on your website
2. **Check "Contact Submissions" sheet** for new row
3. **Fill out booking form** on your website
4. **Check "Appointment Bookings" sheet** for new row

## 🎉 **You're Done!**

Now all form submissions will automatically be saved to your Google Sheet! 