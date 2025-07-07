// EmailJS Configuration
// You'll need to sign up at https://www.emailjs.com/ and get these values

export const emailConfig = {
  serviceID: 'service_2a86x2n', // Replace with your EmailJS service ID (e.g., 'service_abc123xyz')
  templateID: 'template_ap4qjlg', // Replace with your EmailJS template ID (e.g., 'template_xyz789abc')
  publicKey: '0dKWAk3n9803pc1kS', // Replace with your EmailJS public key (e.g., 'abc123xyz789')
};

// 📋 How to get these values:
// 1. ServiceID:  Dashboard → Email Services → [Your Service] → Service ID
// 2. TemplateID: Dashboard → Email Templates → [Your Template] → Template ID  
// 3. PublicKey:  Dashboard → Account → API Keys → Public Key

// Example template variables that will be sent:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{company}} - sender's company
// {{message}} - the message content
// {{to_email}} - your email (raihanuddin561@gmail.com)

// 📚 Detailed setup guide: See EMAILJS_STEP_BY_STEP.md
// 🔍 Quick reference: See EMAILJS_QUICK_REFERENCE.txt
