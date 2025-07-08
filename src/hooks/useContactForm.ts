'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/email';
import { personalConfig } from '@/config/personal';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetForm: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear previous error/success when user starts typing
    if (error) setError(null);
    if (isSuccess) setIsSuccess(false);
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Log configuration for debugging
      console.log('EmailJS Configuration:', {
        serviceID: emailConfig.serviceID,
        templateID: emailConfig.templateID,
        publicKey: emailConfig.publicKey?.substring(0, 5) + '...' // Only show first 5 chars for security
      });

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        message: formData.message,
        to_name: personalConfig.name,
        to_email: personalConfig.contact.email,
        reply_to: formData.email,
        subject: `New Contact Form Message from ${formData.name}`,
      };

      console.log('Template parameters:', templateParams);

      // Send email using EmailJS
      console.log('Sending email...');
      const response = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        console.log('Email sent successfully!');
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }
    } catch (err: unknown) {
      console.error('Email sending error:', err);
      
      // More detailed error handling
      let errorMessage = 'Failed to send message. Please try again or contact me directly via email.';
      
      if (err && typeof err === 'object') {
        if ('text' in err && typeof err.text === 'string') {
          console.error('EmailJS Error Details:', err.text);
          errorMessage = `Error: ${err.text}`;
        } else if ('message' in err && typeof err.message === 'string') {
          console.error('Error Message:', err.message);
          errorMessage = `Error: ${err.message}`;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
    setIsSuccess(false);
    setError(null);
    setIsLoading(false);
  };

  return {
    formData,
    isLoading,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
