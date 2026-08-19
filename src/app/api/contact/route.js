import { NextResponse } from 'next/server';

/**
 * No email provider is wired in yet — this validates the payload and
 * responds successfully, but does not actually send anything anywhere.
 *
 * TODO(carlos): before this ships, wire a real provider. Two reasonable,
 * low-effort options for a static-first Netlify site:
 *   1. Resend (resend.com) — send from here with a server-only API key.
 *   2. Netlify Forms — skip this route entirely, use a native <form
 *      data-netlify="true"> instead (has a Netlify-specific quirk: needs a
 *      static HTML form fragment for Netlify's build-time form detection to
 *      pick it up, which doesn't play naturally with a client-rendered
 *      React form — Resend is the more straightforward path here).
 */
export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  console.log('[contact:noop] received message from', email);

  return NextResponse.json({ ok: true });
}
