# EmailJS Setup Guide

Your contact form is now ready to send emails! Follow these steps to configure EmailJS:

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (100 emails per month limit)
3. Verify your email address

## 2. Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose **Gmail** (recommended) or another email provider
4. Follow the OAuth setup to connect your Gmail account
5. Note down your **Service ID** (e.g., `service_abc123`)

## 3. Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Body:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
You can reply directly to this email to respond to {{from_name}}.
```

4. Set the **To Email** field to: `raihanuddin561@gmail.com`
5. Set the **Reply To** field to: `{{from_email}}`
6. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## 4. Get Public Key

1. Go to **Account** in your EmailJS dashboard
2. Find your **Public Key** (e.g., `abc123xyz789`)

## 5. Update Configuration

Update the file `src/config/email.ts` with your actual values:

```typescript
export const emailConfig = {
  serviceID: 'service_abc123',     // Your Service ID
  templateID: 'template_xyz789',   // Your Template ID
  publicKey: 'abc123xyz789',       // Your Public Key
};
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email inbox for the message

## 7. Optional: Domain Restrictions

For security, you can restrict your EmailJS service to specific domains:

1. Go to **Email Services** → Select your service
2. Under **Settings**, add your domain(s):
   - For development: `localhost`
   - For production: `your-domain.com`

## Template Variables Used

Your form sends these variables to the email template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{company}}` - Sender's company (optional)
- `{{message}}` - The message content
- `{{to_email}}` - Your email (raihanuddin561@gmail.com)
- `{{reply_to}}` - Sender's email (for replies)

## Troubleshooting

If the form doesn't work:

1. **Check Console:** Open browser dev tools and check for errors
2. **Verify IDs:** Make sure Service ID, Template ID, and Public Key are correct
3. **Test Template:** Use EmailJS dashboard to test your template
4. **Check Quota:** Ensure you haven't exceeded your monthly email limit
5. **Domain Issues:** If deployed, make sure your domain is allowed in EmailJS settings

## Form Features

Your contact form includes:
- ✅ Form validation (required fields)
- ✅ Loading state during submission
- ✅ Success message after sending
- ✅ Error handling with user-friendly messages
- ✅ Form reset after successful submission
- ✅ Disabled state during submission

## Free Tier Limits

EmailJS free tier includes:
- 100 emails per month
- Basic email templates
- Standard support

For higher volume, consider upgrading to a paid plan.
