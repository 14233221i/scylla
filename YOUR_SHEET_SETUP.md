# Your Google Sheet Setup - Quick Guide

## 🎯 **Your Sheet Details:**
- **Sheet ID**: `1IVYHj-iX59kqopcvWHq-nafcPNttazKndIP7JRF5tOk`
- **URL**: https://docs.google.com/spreadsheets/d/1IVYHj-iX59kqopcvWHq-nafcPNttazKndIP7JRF5tOk/edit?usp=sharing

## 📋 **Step 1: Set Up Your Sheet**

### **Rename First Sheet to "Contact Submissions"**
1. Click on "Sheet1" at the bottom
2. Right-click → "Rename"
3. Name it: **"Contact Submissions"**

### **Add Headers in Row 1:**
```
A1: Timestamp
B1: Name
C1: Email
D1: Phone
E1: Message
F1: Source
```

### **Create Second Sheet for Bookings**
1. Click the "+" button at the bottom
2. Name it: **"Appointment Bookings"**

### **Add Headers in Row 1:**
```
A1: Timestamp
B1: Name
C1: Email
D1: Phone
E1: Date
F1: Time
G1: Source
```

## 🔧 **Step 2: Google Cloud Setup**

### **Create Service Account:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: "Digital Wing Forms"
3. Enable Google Sheets API
4. Create Service Account
5. Download JSON key file

### **Share Your Sheet:**
1. Open your sheet: https://docs.google.com/spreadsheets/d/1IVYHj-iX59kqopcvWHq-nafcPNttazKndIP7JRF5tOk/edit?usp=sharing
2. Click "Share" button
3. Add your service account email (from JSON file)
4. Give "Editor" permissions

## ⚙️ **Step 3: Add to Vercel**

Add these environment variables in Vercel:

```
GOOGLE_SHEET_ID=1IVYHj-iX59kqopcvWHq-nafcPNttazKndIP7JRF5tOk
GOOGLE_SERVICE_ACCOUNT_EMAIL=[from JSON file]
GOOGLE_PRIVATE_KEY=[from JSON file]
```

## ✅ **Step 4: Test**

After setup, when someone fills your forms:
- **Contact Form** → Data goes to "Contact Submissions" sheet
- **Booking Form** → Data goes to "Appointment Bookings" sheet

## 🎉 **Result:**
All form submissions will automatically appear in your Google Sheet! 