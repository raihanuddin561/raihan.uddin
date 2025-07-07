# Portfolio Configuration Guide

## 📝 **Centralized Configuration**

Your portfolio now uses a centralized configuration system! All your personal information, social profiles, experience, and other data is managed from a single file: `src/config/personal.ts`

## 🎯 **Benefits of Centralized Config:**

✅ **Single Source of Truth** - Update everything from one place  
✅ **Easy Maintenance** - No need to edit multiple components  
✅ **Type Safety** - TypeScript ensures data consistency  
✅ **Reusability** - Same data used across multiple components  
✅ **Quick Updates** - Change URLs, information, or add experience instantly  

## 🔧 **How to Update Your Portfolio:**

### **1. Personal Information**
Edit `src/config/personal.ts` and update:
```typescript
// Basic Information
name: "Your Name",
title: "Your Job Title",
subtitle: "Your Specialty",
location: "Your Location",
```

### **2. Contact Information**
```typescript
contact: {
  email: "your.email@gmail.com",
  phone: "+880 1234567890",
  location: "Your City, Country",
},
```

### **3. Social Profiles**
```typescript
social: {
  github: {
    url: "https://github.com/yourusername",
    username: "yourusername"
  },
  linkedin: {
    url: "https://linkedin.com/in/yourusername",
    username: "yourusername"
  },
},
```

### **4. Experience Data**
Add or modify your work experience:
```typescript
experience: [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Start Date – End Date",
    type: "Current Role" | "Previous Role",
    responsibilities: [
      "What you did...",
      "Another responsibility...",
    ],
    technologies: ["Java", "Spring Boot", "etc..."]
  }
],
```

### **5. Skills & Technologies**
```typescript
skills: {
  primary: [
    { name: "Java", level: 95, category: "Programming Languages" },
    { name: "Spring Boot", level: 90, category: "Frameworks" },
  ],
},
```

## 📁 **Files That Use Configuration:**

- **Footer.tsx** - Uses personal info, social links, expertise
- **Experience.tsx** - Uses experience data
- **Contact.tsx** - Uses contact info and social profiles
- **Hero.tsx** - Can use animated roles and tech badges
- **About.tsx** - Can use summary and personal info
- **Skills.tsx** - Can use skills data

## 🚀 **Adding New Information:**

### **Add New Social Profile:**
```typescript
social: {
  // ...existing profiles...
  twitter: {
    url: "https://twitter.com/yourusername",
    username: "yourusername"
  }
}
```

### **Add New Experience:**
Just add a new object to the `experience` array:
```typescript
{
  title: "New Position",
  company: "New Company",
  // ... rest of the data
}
```

### **Add Projects:**
```typescript
projects: [
  {
    title: "Project Name",
    description: "What it does...",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"],
    status: "Completed",
    type: "Personal"
  }
]
```

## 🔄 **Helper Functions:**

Use these functions to get specific data:
```typescript
import { 
  getContactInfo, 
  getSocialProfiles, 
  getExperience,
  getSkills 
} from '@/config/personal';

// In your component:
const contact = getContactInfo();
const social = getSocialProfiles();
```

## 📖 **Example Usage in Components:**

```typescript
import { personalConfig } from '@/config/personal';

export default function MyComponent() {
  return (
    <div>
      <h1>{personalConfig.name}</h1>
      <p>{personalConfig.title}</p>
      <a href={`mailto:${personalConfig.contact.email}`}>
        Email me
      </a>
    </div>
  );
}
```

## 🎨 **Customization Tips:**

1. **Update Social URLs** - Make sure all your social profile URLs are correct
2. **Add Certifications** - Include your professional certifications
3. **Update Skills Levels** - Adjust skill percentages based on your expertise
4. **Add Projects** - Showcase your best work
5. **Update Meta Info** - Important for SEO when you deploy

## 📝 **What You Should Update:**

1. ✅ Replace placeholder social URLs with your actual profiles
2. ✅ Update phone number if you want to include it
3. ✅ Add your education information
4. ✅ Include certifications you have
5. ✅ Update the website URL in meta info
6. ✅ Add or modify experience details
7. ✅ Customize the animated roles and tech badges

## 🌟 **Pro Tips:**

- **Keep it updated** - Regular updates keep your portfolio fresh
- **Use actual data** - Replace all placeholder information
- **Test changes** - Check your portfolio after making updates
- **Version control** - Commit changes to track your portfolio evolution

Now you have a powerful, maintainable portfolio configuration system! 🎉
