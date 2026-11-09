import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Send, Mail, MapPin, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CONTACT_EMAIL = 'andrejgruevski1@gmail.com';
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

type FieldName = 'name' | 'email' | 'subject' | 'message';
type FormErrors = Partial<Record<FieldName, string>>;
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error' | 'mailto';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: Record<FieldName, string>): FormErrors => {
  const errors: FormErrors = {};

  if (values.name.length < 2) {
    errors.name = 'Please enter your name.';
  }
  if (!emailPattern.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.subject.length < 3) {
    errors.subject = 'Please add a subject.';
  }
  if (values.message.length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }

  return errors;
};

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl bg-secondary border text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus:border-primary transition-all ${
    hasError ? 'border-destructive' : 'border-border'
  }`;

export const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const isSubmitting = status === 'submitting';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real visitors never see or fill this field.
    if (String(formData.get('company') ?? '').trim() !== '') {
      return;
    }

    const values: Record<FieldName, string> = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      subject: String(formData.get('subject') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    setStatus('idle');

    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalidField = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstInvalidField) {
      document.getElementById(firstInvalidField)?.focus();
      return;
    }

    // Without a configured endpoint, prepare the message in the visitor's email app.
    // The form must never claim the message was sent in this mode.
    if (!FORMSPREE_ENDPOINT) {
      const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
      setStatus('mailto');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          _subject: values.subject,
          _replyto: values.email,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      setStatus('success');
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatus('error');
      toast({
        title: 'Message could not be sent',
        description: `Please try again, or email me directly at ${CONTACT_EMAIL}.`,
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to connect? 
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">North Macedonia</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="text-primary" size={22} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                  <p className="font-medium">Within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-busy={isSubmitting}
              className="glass rounded-2xl p-8 space-y-6 relative"
            >
              {/* Honeypot field for spam protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass(Boolean(errors.name))}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-destructive">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={inputClass(Boolean(errors.email))}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={inputClass(Boolean(errors.subject))}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-2 text-sm text-destructive">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${inputClass(Boolean(errors.message))} resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-destructive">
                    {errors.message}
                  </p>
                )}
              </div>

              <div aria-live="polite">
                {status === 'success' && (
                  <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm">
                    <CheckCircle2 className="mt-0.5 flex-shrink-0 text-primary" size={18} aria-hidden="true" />
                    <p>Your message was sent successfully. I'll get back to you soon.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div role="alert" className="flex items-start gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm">
                    <AlertCircle className="mt-0.5 flex-shrink-0 text-destructive" size={18} aria-hidden="true" />
                    <p>
                      Your message could not be sent. Please try again or email me directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
                        {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                )}
                {status === 'mailto' && (
                  <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm">
                    <Mail className="mt-0.5 flex-shrink-0 text-primary" size={18} aria-hidden="true" />
                    <p>
                      Your email app should open with the message prepared. The message is not sent until you send it
                      from your email app.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed glow-primary"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} aria-hidden="true" />
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                {FORMSPREE_ENDPOINT
                  ? 'Submitting sends your message through Formspree.'
                  : 'Submitting opens your email app with the message prepared. It is not sent until you send it there.'}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
