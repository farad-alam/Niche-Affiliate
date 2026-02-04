'use server';

import { Resend } from 'resend';
import { serverEnv } from '@/env/serverEnv';
import { clientEnv } from '@/env/clientEnv';

const resend = new Resend(serverEnv.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message || !subject) {
    return { success: false, message: 'Please fill in all fields.' };
  }

  try {
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this if you have a custom domain
      to: serverEnv.CONTACT_EMAIL, 
      subject: `Email from ${clientEnv.NEXT_PUBLIC_SITE_NAME} - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      replyTo: email,
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return { success: false, message: 'Failed to send email. Please try again.' };
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Server Error:', error);
    return { success: false, message: 'Something went wrong.' };
  }
}
