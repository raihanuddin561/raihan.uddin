// Example EmailJS Template Configuration
// This is a reference for setting up your EmailJS template

/*
=== EMAIL TEMPLATE SETUP ===

1. Template Name: "Portfolio Contact Form"

2. Subject Line:
   New Contact Form Message from {{from_name}}

3. Email Body (HTML):
   
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
     <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
       <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
         New Contact Form Message
       </h2>
       
       <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0;">
         <p style="margin: 5px 0; color: #555;"><strong>From:</strong> {{from_name}}</p>
         <p style="margin: 5px 0; color: #555;"><strong>Email:</strong> {{from_email}}</p>
         <p style="margin: 5px 0; color: #555;"><strong>Company:</strong> {{company}}</p>
       </div>
       
       <div style="margin: 20px 0;">
         <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
         <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3b82f6; border-radius: 4px;">
           <p style="margin: 0; color: #555; line-height: 1.6;">{{message}}</p>
         </div>
       </div>
       
       <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
         <p style="color: #666; font-size: 14px; margin: 0;">
           This email was sent from your portfolio contact form.<br>
           You can reply directly to this email to respond to {{from_name}}.
         </p>
       </div>
     </div>
   </div>

4. Settings:
   - To Email: raihanuddin561@gmail.com
   - Reply To: {{from_email}}
   - From Name: Portfolio Contact Form
   - From Email: Your connected email service

5. Template Variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email  
   - {{company}} - Company name (optional)
   - {{message}} - Message content
   - {{to_email}} - Your email
   - {{reply_to}} - Sender's email for replies

=== EMAIL SERVICE SETUP ===

1. Service Type: Gmail (recommended)
2. Service Name: "Portfolio Gmail Service"
3. Connect your Gmail account via OAuth
4. Note down the Service ID (e.g., service_abc123)

=== SECURITY SETTINGS ===

1. Enable domain restrictions
2. Add allowed domains:
   - localhost (for development)
   - your-production-domain.com
3. Set up reCAPTCHA (optional but recommended)

=== TESTING ===

1. Use EmailJS dashboard to test your template
2. Send a test email with sample data
3. Verify you receive the email in your inbox
4. Check that reply-to functionality works

*/

// Your actual configuration should be in src/config/email.ts
export const emailConfigExample = {
  serviceID: 'service_abc123',      // Replace with your actual Service ID
  templateID: 'template_xyz789',    // Replace with your actual Template ID  
  publicKey: 'your_public_key',     // Replace with your actual Public Key
};
