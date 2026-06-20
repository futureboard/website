import { useState } from 'react';
import './WaitlistForm.css';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const roles = ['Producer', 'Developer', 'Plugin Developer', 'Tester', 'Other'];
const platforms = ['Windows', 'macOS', 'Linux', 'Web'];

export default function WaitlistForm() {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name:      (data.get('name') as string).trim(),
      email:     (data.get('email') as string).trim(),
      role:      data.get('role') as string,
      platforms: platforms.filter((p) => data.get(`platform_${p}`)),
      message:   (data.get('message') as string | null)?.trim() ?? '',
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
      <div className="wl-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="wl-success-icon"
        >
          <path d="M5 12l5 5L20 7" />
        </svg>
        <p className="wl-success-title">You're on the list.</p>
        <p className="wl-success-desc">
          We'll reach out when Futureboard is ready for early access. Watch GitHub for progress updates.
        </p>
        <button
          onClick={() => setState('idle')}
          className="wl-reset-btn"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="wl-form">

      {/* Name */}
      <div className="wl-field">
        <label htmlFor="wl-name" className="form-label">Name</label>
        <input
          id="wl-name"
          name="name"
          type="text"
          placeholder="Your name"
          className="form-input"
        />
      </div>

      {/* Email */}
      <div className="wl-field">
        <label htmlFor="wl-email" className="form-label">
          Email <span className="optional">(required)</span>
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="form-input"
        />
      </div>

      {/* Role */}
      <div className="wl-field">
        <label htmlFor="wl-role" className="form-label">Role / Interest</label>
        <select
          id="wl-role"
          name="role"
          className="form-input form-select"
        >
          <option value="">Select your role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {/* Platform */}
      <fieldset className="wl-fieldset">
        <legend className="form-label">Platform</legend>
        <div className="wl-checkboxes">
          {platforms.map((p) => (
            <label key={p} className="wl-checkbox-label">
              <input
                type="checkbox"
                name={`platform_${p}`}
                value={p}
                className="wl-checkbox"
              />
              <span>{p}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div className="wl-field">
        <label htmlFor="wl-message" className="form-label">
          Message <span className="optional">(optional)</span>
        </label>
        <textarea
          id="wl-message"
          name="message"
          rows={3}
          placeholder="What are you hoping to build with Futureboard?"
          className="form-input wl-textarea"
        />
      </div>

      {/* Error state */}
      {state === 'error' && (
        <p className="wl-error">{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        className="btn btn-primary wl-submit"
      >
        {state === 'loading' ? 'Submitting…' : 'Join the Waitlist'}
      </button>

    </form>
  );
}
