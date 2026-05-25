import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const roles = ['Producer', 'Developer', 'Plugin Developer', 'Tester', 'Other'];
const platforms = ['Windows', 'macOS', 'Linux', 'Web'];

const inputClass =
  'w-full bg-canvas-mid border border-hairline rounded-sm px-3 py-2 text-ink text-sm placeholder:text-mute focus:outline-none focus:border-accent/60 transition-colors';

export default function WaitlistForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: (data.get('name') as string).trim(),
      email: (data.get('email') as string).trim(),
      role: data.get('role') as string,
      platforms: platforms.filter((p) => data.get(`platform_${p}`)),
      message: (data.get('message') as string | null)?.trim() ?? '',
    };

    if (!payload.email) return;

    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setState('success');
        form.reset();
      } else {
        setErrorMsg(json.error ?? 'Something went wrong.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#58CBCB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          style={{ filter: 'drop-shadow(0 0 6px #58CBCB)' }}
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
        <p className="text-ink text-base font-medium">You're on the list.</p>
        <p className="text-body text-sm leading-5 max-w-xs">
          We'll reach out when Futureboard is ready for early access. Watch GitHub for progress updates.
        </p>
        <button
          onClick={() => setState('idle')}
          className="text-mute text-xs font-mono hover:text-body transition-colors mt-2"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-name" className="text-ink text-sm font-medium">
          Name
        </label>
        <input
          id="wl-name"
          name="name"
          type="text"
          placeholder="Your name"
          className={inputClass}
          style={{ backgroundColor: '#202633' }}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-email" className="text-ink text-sm font-medium">
          Email <span className="text-mute font-normal">(required)</span>
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
          style={{ backgroundColor: '#202633' }}
        />
      </div>

      {/* Role */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-role" className="text-ink text-sm font-medium">
          Role / Interest
        </label>
        <select
          id="wl-role"
          name="role"
          className={inputClass + ' appearance-none'}
          style={{ backgroundColor: '#202633' }}
        >
          <option value="">Select your role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Platform */}
      <fieldset>
        <legend className="text-ink text-sm font-medium mb-2">Platform</legend>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {platforms.map((p) => (
            <label key={p} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name={`platform_${p}`}
                value={p}
                className="w-3.5 h-3.5 rounded-xs"
                style={{ accentColor: '#58CBCB' }}
              />
              <span className="text-body text-sm">{p}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="wl-message" className="text-ink text-sm font-medium">
          Message <span className="text-mute font-normal">(optional)</span>
        </label>
        <textarea
          id="wl-message"
          name="message"
          rows={3}
          placeholder="What are you hoping to build with Futureboard?"
          className={inputClass + ' resize-none'}
          style={{ backgroundColor: '#202633' }}
        />
      </div>

      {/* Error state */}
      {state === 'error' && (
        <p
          className="text-sm px-3 py-2 rounded-sm"
          style={{ color: '#F19275', background: 'rgba(241,146,117,0.08)', border: '1px solid rgba(241,146,117,0.2)' }}
        >
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="inline-flex items-center justify-center text-sm font-medium px-4 py-2.5 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: '#58CBCB',
          color: '#191A1C',
          boxShadow: '0 0 16px rgba(88,203,203,0.2)',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#73C7C7'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#58CBCB'; }}
      >
        {state === 'loading' ? 'Submitting…' : 'Join the Waitlist'}
      </button>

    </form>
  );
}
