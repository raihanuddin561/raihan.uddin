# EmailJS Setup - Step by Step Guide

## Step 1: Create EmailJS Account

1. Go to **[https://www.emailjs.com/](https://www.emailjs.com/)**
2. Click **"Sign Up"** (top right corner)
3. Create account with your email or use Google/GitHub
4. Verify your email if required

## Step 2: Get Your Service ID

### 2.1 Add Email Service
1. In your EmailJS dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"** button
3. Choose **"Gmail"** (recommended) or your preferred email provider

### 2.2 Connect Gmail
1. Click **"Connect Account"** 
2. Sign in with your Gmail account (raihanuddin561@gmail.com)
3. Allow EmailJS permissions
4. Your service will be created

### 2.3 Get Service ID
1. After connecting, you'll see your service listed
2. **Copy the Service ID** (looks like `service_abc123xyz`)
3. This is your **serviceID** for the config file

## Step 3: Get Your Template ID

### 3.1 Create Email Template
1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. Give it a name: "Portfolio Contact Form"

### 3.2 Configure Template
**Subject Line:**
```
New Contact Form Message from {{from_name}}
```

**Message Body:**
```
Hello Raihan,

You have received a new message from your portfolio contact form.

---
From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.

Best regards,
Portfolio Contact Form
```

### 3.3 Set Template Settings
1. **To Email:** `raihanuddin561@gmail.com`
2. **From Name:** `Portfolio Contact Form`
3. **Reply To:** `{{from_email}}`
4. Click **"Save"**

### 3.4 Get Template ID
1. After saving, you'll see your template listed
2. **Copy the Template ID** (looks like `template_xyz789abc`)
3. This is your **templateID** for the config file

## Step 4: Get Your Public Key

### 4.1 Access Account Settings
1. Click **"Account"** (left sidebar)
2. Look for **"API Keys"** section
3. Find **"Public Key"** (looks like `abc123xyz789`)
4. **Copy the Public Key**
5. This is your **publicKey** for the config file

## Step 5: Update Your Configuration

Open `src/config/email.ts` and replace the placeholder values:

```typescript
export const emailConfig = {
  serviceID: 'service_abc123xyz',     // Your Service ID from Step 2
  templateID: 'template_xyz789abc',   // Your Template ID from Step 3
  publicKey: 'abc123xyz789',          // Your Public Key from Step 4
};
```

## Step 6: Test Your Setup

### 6.1 Test in EmailJS Dashboard
1. Go to your template in EmailJS
2. Click **"Test"** button
3. Fill in sample data:
   - `from_name`: "John Doe"
   - `from_email`: "john@example.com"
   - `company`: "Test Company"
   - `message`: "This is a test message"
4. Click **"Send Test"**
5. Check your Gmail inbox

### 6.2 Test in Your Portfolio
1. Make sure your dev server is running: `npm run dev`
2. Go to your contact form
3. Fill out the form with your details
4. Submit and check your email

## Visual Guide - Where to Find Each Value:

### Service ID Location:
```
Dashboard → Email Services → [Your Service Name] → Service ID
```

### Template ID Location:
```
Dashboard → Email Templates → [Your Template Name] → Template ID
```

### Public Key Location:
```
Dashboard → Account → API Keys → Public Key
```

## Common Issues & Solutions:

### Issue 1: "Service not found" error
- **Solution:** Double-check your Service ID is correct
- **Check:** Dashboard → Email Services → copy exact Service ID

### Issue 2: "Template not found" error
- **Solution:** Verify your Template ID is correct
- **Check:** Dashboard → Email Templates → copy exact Template ID

### Issue 3: "Public key invalid" error
- **Solution:** Make sure you're using the Public Key, not Private Key
- **Check:** Dashboard → Account → API Keys → Public Key (not Private Key)

### Issue 4: Emails not arriving
- **Solution:** Check spam folder and verify template settings
- **Check:** Template settings → To Email should be `raihanuddin561@gmail.com`

## Free Tier Limits:
- **200 emails/month** (free tier)
- **Rate limit:** 1 email per second
- **No credit card required**

## Security Notes:
- Public Key is safe to use in client-side code
- Never share your Private Key
- Consider adding domain restrictions in production

## Need Help?
If you encounter any issues:
1. Check the browser console for error messages
2. Test your template in EmailJS dashboard first
3. Verify all three values are copied correctly
4. Make sure there are no extra spaces in the config file

---

Once you complete these steps, your contact form will be fully functional and ready to send emails to your Gmail account!
