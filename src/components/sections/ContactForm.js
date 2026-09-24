'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

const FIELD_CLASSES =
  'w-full rounded-[var(--radius-control)] border border-border bg-surface px-3.5 py-3 text-base text-fg shadow-[var(--shadow-card)] transition-[background-color,border-color,box-shadow] duration-[var(--duration-fast)] placeholder:text-fg-muted hover:border-border-strong focus-visible:border-accent focus-visible:bg-surface-raised';

export function ContactForm() {
  const [status, setStatus] = useState(
    /** @type {'idle'|'submitting'|'success'|'error'} */ ('idle')
  );

  /** @param {React.FormEvent<HTMLFormElement>} event */
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="border-accent/30 bg-accent/10 text-fg rounded-md border px-4 py-3 text-sm">
        Thanks — your message was received. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-fg text-sm font-medium">
          Name
        </label>
        <input id="name" name="name" type="text" required className={FIELD_CLASSES} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-fg text-sm font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" required className={FIELD_CLASSES} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-fg text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={FIELD_CLASSES}
        />
      </div>

      <Button type="submit" className="self-start" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>

      {status === 'error' && (
        <p className="text-sm text-red-400">
          Something went wrong — please try again, or email me directly.
        </p>
      )}
    </form>
  );
}
