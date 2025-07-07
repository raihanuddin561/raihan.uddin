# Fix "Recipient Address is Empty" Error

## 🔧 **The Problem:**
EmailJS template is not configured with the correct recipient (To) email address.

## ✅ **Solution - Update Your EmailJS Template:**

### **Step 1: Go to EmailJS Dashboard**
1. Login to [EmailJS.com](https://www.emailjs.com/)
2. Click **"Email Templates"** (left sidebar)
3. Find your template: `template_ap4qjlg`
4. Click **"Edit"** or the template name

### **Step 2: Configure Template Settings**
In the template editor, make sure these settings are correct:

**Template Settings (Important!):**
- **To Email:** `raihanuddin561@gmail.com` (your email - this is crucial!)
- **From Name:** `{{from_name}}` or `Portfolio Contact Form`
- **Reply To:** `{{reply_to}}` or `{{from_email}}`

### **Step 3: Update Template Content**

**Subject:**
```
{{subject}}
```

**Message Body:**
```
Hello Raihan,

You have received a new contact form message from your portfolio website.

---
Contact Details:
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}

---
Message:
{{message}}

---
You can reply directly to this email to respond to {{from_name}}.

Best regards,
Portfolio Contact Form System
```

### **Step 4: Save and Test**
1. Click **"Save"** in the template editor
2. Click **"Test"** button to send a test email
3. Check if you receive the test email

## 🔍 **Template Variables Being Sent:**
Your form now sends these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Company name
- `{{message}}` - The message content
- `{{to_name}}` - Your name (Raihan Uddin)
- `{{to_email}}` - Your email (raihanuddin561@gmail.com)
- `{{reply_to}}` - Sender's email for replies
- `{{subject}}` - Dynamic subject line

## 🚨 **Most Important Fix:**
Make sure in your EmailJS template settings:
- **To Email field** is set to: `raihanuddin561@gmail.com`
- **NOT** `{{to_email}}` - use the actual email address!

## 📧 **Alternative Simple Template:**
If you want to keep it simple, use this basic template:

**To Email:** `raihanuddin561@gmail.com`
**Subject:** `New Contact Form Message`
**Body:**
```
Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message: {{message}}
```

## 🧪 **Test After Changes:**
1. Save your template changes
2. Test the form on your website
3. Check your email inbox
4. Check spam folder if needed

The key fix is making sure your EmailJS template has the correct "To Email" configuration!
