import { useState } from 'react';
import './WaitlistForm.css';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type Locale = 'en' | 'th' | 'ja' | 'zh';

const platforms = ['Windows', 'macOS', 'Linux', 'Web'];

const formTranslations = {
  en: {
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    required: '(required)',
    emailPlaceholder: 'you@example.com',
    role: 'Role / Interest',
    roleSelect: 'Select your role',
    roles: ['Producer', 'Developer', 'Plugin Developer', 'Tester', 'Other'],
    platform: 'Platform',
    message: 'Message',
    optional: '(optional)',
    messagePlaceholder: 'What are you hoping to build with Futureboard?',
    submit: 'Join the Waitlist',
    submitting: 'Submitting…',
    successTitle: "You're on the list.",
    successDesc: "We'll reach out when Futureboard is ready for early access. Watch GitHub for progress updates.",
    successReset: 'Submit another response',
  },
  th: {
    name: 'ชื่อของคุณ',
    namePlaceholder: 'ระบุชื่อของคุณ',
    email: 'อีเมล',
    required: '(จำเป็น)',
    emailPlaceholder: 'you@example.com',
    role: 'บทบาท / ความสนใจ',
    roleSelect: 'เลือกบทบาทของคุณ',
    roles: ['โปรดิวเซอร์ / นักทำเพลง', 'นักพัฒนาซอฟต์แวร์', 'นักพัฒนาปลั๊กอิน', 'ผู้ทดสอบแอป', 'อื่น ๆ'],
    platform: 'ระบบปฏิบัติการที่สนใจ',
    message: 'ข้อความเพิ่มเติม',
    optional: '(ไม่จำเป็น)',
    messagePlaceholder: 'คุณหวังว่าจะนำ Futureboard ไปใช้ทำอะไรบ้าง?',
    submit: 'เข้าร่วม Waitlist',
    submitting: 'กำลังส่งข้อมูล…',
    successTitle: 'คุณได้เข้าร่วมรายการแล้ว',
    successDesc: 'เราจะส่งข้อความแจ้งเตือนทันทีเมื่อ Futureboard พร้อมสำหรับการทดสอบช่วงแรก สามารถติดตามความคืบหน้าบน GitHub ได้',
    successReset: 'ส่งคำตอบเพิ่มเติม',
  },
  ja: {
    name: 'お名前',
    namePlaceholder: 'お名前を入力してください',
    email: 'メールアドレス',
    required: '（必須）',
    emailPlaceholder: 'you@example.com',
    role: '職種 / 興味対象',
    roleSelect: '役割を選択してください',
    roles: ['プロデューサー / 作曲家', '開発者', 'プラグイン開発者', 'テスター', 'その他'],
    platform: '対象プラットフォーム',
    message: 'メッセージ',
    optional: '（任意）',
    messagePlaceholder: 'Futureboardでどのような音楽を制作したいですか？',
    submit: 'ウェイトリストに登録',
    submitting: '送信中…',
    successTitle: 'ウェイトリストへ登録完了しました。',
    successDesc: 'Futureboardの早期利用が可能になり次第ご連絡いたします。GitHubで開発状況を追跡することもできます。',
    successReset: '別の回答を送信する',
  },
  zh: {
    name: '姓名',
    namePlaceholder: '您的姓名',
    email: '电子邮箱',
    required: '（必填）',
    emailPlaceholder: 'you@example.com',
    role: '角色 / 兴趣',
    roleSelect: '选择您的角色',
    roles: ['音乐制作人', '开发者', '插件开发者', '测试员', '其他'],
    platform: '支持的平台',
    message: '留言',
    optional: '（选填）',
    messagePlaceholder: '您希望使用 Futureboard 创造什么？',
    submit: '加入候补名单',
    submitting: '提交中…',
    successTitle: '您已成功加入名单。',
    successDesc: '我们将在 Futureboard 准备好进行早期测试时联系您。您也可以在 GitHub 上关注开发进程。',
    successReset: '提交另一条响应',
  }
};

export default function WaitlistForm({ lang = 'en' }: { lang?: Locale }) {
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const t = formTranslations[lang] || formTranslations.en;

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
        <p className="wl-success-title">{t.successTitle}</p>
        <p className="wl-success-desc">{t.successDesc}</p>
        <button
          onClick={() => setState('idle')}
          className="wl-reset-btn"
        >
          {t.successReset}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="wl-form">

      {/* Name */}
      <div className="wl-field">
        <label htmlFor="wl-name" className="form-label">{t.name}</label>
        <input
          id="wl-name"
          name="name"
          type="text"
          placeholder={t.namePlaceholder}
          className="form-input"
        />
      </div>

      {/* Email */}
      <div className="wl-field">
        <label htmlFor="wl-email" className="form-label">
          {t.email} <span className="optional">{t.required}</span>
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          required
          placeholder={t.emailPlaceholder}
          className="form-input"
        />
      </div>

      {/* Role */}
      <div className="wl-field">
        <label htmlFor="wl-role" className="form-label">{t.role}</label>
        <select
          id="wl-role"
          name="role"
          className="form-input form-select"
        >
          <option value="">{t.roleSelect}</option>
          {t.roles.map((r, idx) => (
            <option key={r} value={formTranslations.en.roles[idx]}>{r}</option>
          ))}
        </select>
      </div>

      {/* Platform */}
      <fieldset className="wl-fieldset">
        <legend className="form-label">{t.platform}</legend>
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
          {t.message} <span className="optional">{t.optional}</span>
        </label>
        <textarea
          id="wl-message"
          name="message"
          rows={3}
          placeholder={t.messagePlaceholder}
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
        {state === 'loading' ? t.submitting : t.submit}
      </button>

    </form>
  );
}
