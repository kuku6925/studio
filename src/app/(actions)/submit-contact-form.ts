'use server';

import { contactFormSchema } from '@/lib/form-schemas';

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your entries.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just simulate success.
  console.log('Contact form submitted:', validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you soon.',
    success: true,
  };
}
