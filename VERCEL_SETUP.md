# Vercel Environment Variables Setup

## 🚀 **Step 1: Go to Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Sign in to your account
3. Find your "digital-wing-website" project

## 🔧 **Step 2: Add Environment Variables**
1. Click on your project
2. Go to **Settings** tab
3. Click **Environment Variables** in the left sidebar
4. Add these variables one by one:

### **Email Configuration:**
```
Name: EMAIL_USER
Value: tonystanks121@gmail.com
Environment: Production, Preview, Development

Name: EMAIL_PASS
Value: [Your Gmail App Password]
Environment: Production, Preview, Development
```

## 📧 **Step 3: Get Gmail App Password**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Scroll down and click **App passwords**
5. Select **Mail** and **Other (Custom name)**
6. Name it "Digital Wing Website"
7. Click **Generate**
8. Copy the 16-character password

## ✅ **Step 4: Test the Setup**
1. After adding environment variables, Vercel will automatically redeploy
2. Go to your live website
3. Test the contact form
4. Check your email (tonystanks121@gmail.com) for the notification

## 🔍 **Step 5: Verify It's Working**
- ✅ Contact form sends email notification
- ✅ Booking form sends email notification
- ✅ Emails contain all form data
- ✅ Professional HTML formatting

## 🎉 **You're Done!**
Your website will now send email notifications for all form submissions! 