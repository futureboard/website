import type { APIRoute } from 'astro';

interface WaitlistEntry {
  name: string;
  email: string;
  role: string;
  platforms: string[];
  message: string;
  submittedAt: string;
}

export const POST: APIRoute = async ({ request }) => {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, email, role, platforms, message } = body as Partial<WaitlistEntry>;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return new Response(JSON.stringify({ ok: false, error: 'A valid email is required.' }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const entry: WaitlistEntry = {
    name: typeof name === 'string' ? name.trim() : '',
    email: email.trim().toLowerCase(),
    role: typeof role === 'string' ? role : '',
    platforms: Array.isArray(platforms) ? platforms.filter((p) => typeof p === 'string') : [],
    message: typeof message === 'string' ? message.trim() : '',
    submittedAt: new Date().toISOString(),
  };

  // TODO: Replace with database/email integration (e.g. Resend, Supabase, PlanetScale)
  console.log('[waitlist]', JSON.stringify(entry));

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
