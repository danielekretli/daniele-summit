// Daniele Summit — UI Kit · Componentes base
// Recriação fiel dos componentes da landing. Exporta para window.
const { useState } = React;

const T = {
  bg: '#050818', bg2: '#080c1f', card: 'rgba(10,14,40,0.7)',
  blue: 'oklch(0.72 0.22 220)', purple: 'oklch(0.72 0.22 290)',
  grad: 'linear-gradient(135deg, oklch(0.72 0.22 220), oklch(0.72 0.22 290))',
  gradText: 'linear-gradient(90deg, oklch(0.72 0.22 220), oklch(0.72 0.22 290) 70%, #ff6af0)',
  fg: '#f0f4ff', muted: '#7a85a8',
  border: 'rgba(120,140,255,0.15)', borderHover: 'rgba(100,140,255,0.4)',
  display: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif",
};

function Eyebrow({ children }) {
  return <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em',
    textTransform: 'uppercase', color: T.blue }}>{children}</div>;
}

function GradientText({ children }) {
  return <span style={{ background: T.gradText, WebkitBackgroundClip: 'text',
    backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{children}</span>;
}

function NeonDivider() {
  return <div style={{ height: 1, opacity: 0.4,
    background: 'linear-gradient(90deg,transparent,oklch(0.72 0.22 220),oklch(0.72 0.22 290),transparent)' }} />;
}

function Button({ children, variant = 'primary', onClick }) {
  const [h, setH] = useState(false);
  const base = { borderRadius: 50, fontFamily: T.body, fontSize: '1rem', cursor: 'pointer',
    fontWeight: 600, transition: 'all .2s', border: 'none' };
  const styles = variant === 'primary'
    ? { ...base, background: T.grad, color: '#fff', padding: '16px 40px',
        boxShadow: h ? '0 0 60px rgba(100,100,255,.5)' : '0 0 40px rgba(100,100,255,.3)',
        transform: h ? 'translateY(-2px)' : 'none' }
    : { ...base, background: 'transparent', border: `1px solid ${h ? T.blue : T.border}`,
        color: h ? T.fg : T.muted, padding: '16px 36px', fontWeight: 400 };
  return <button style={styles} onMouseEnter={() => setH(true)}
    onMouseLeave={() => setH(false)} onClick={onClick}>{children}</button>;
}

function Card({ icon, title, children }) {
  const [h, setH] = useState(false);
  return <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ background: T.card, border: `1px solid ${h ? T.borderHover : T.border}`,
      borderRadius: 16, padding: '2rem', backdropFilter: 'blur(12px)',
      transform: h ? 'translateY(-4px)' : 'none', transition: 'all .3s' }}>
    {icon && <div style={{ width: 48, height: 48, borderRadius: 12,
      background: 'linear-gradient(135deg,rgba(0,180,255,.15),rgba(120,80,255,.15))',
      border: '1px solid rgba(100,140,255,.2)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1.2rem' }}>{icon}</div>}
    <h3 style={{ fontFamily: T.display, fontSize: '1.05rem', fontWeight: 600,
      marginBottom: '0.6rem' }}>{title}</h3>
    <p style={{ color: T.muted, fontSize: '0.9rem', lineHeight: 1.6 }}>{children}</p>
  </div>;
}

function Badge({ children, tone = 'blue' }) {
  const c = tone === 'purple' ? T.purple : T.blue;
  const bg = tone === 'purple' ? 'rgba(180,80,255,.12)' : 'rgba(100,140,255,.12)';
  const bd = tone === 'purple' ? 'rgba(180,80,255,.2)' : 'rgba(100,140,255,.2)';
  return <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
    textTransform: 'uppercase', padding: '3px 10px', borderRadius: 50,
    background: bg, border: `1px solid ${bd}`, color: c }}>{children}</span>;
}

function Chip({ children }) {
  return <span style={{ fontSize: '0.78rem', fontWeight: 500, padding: '6px 14px',
    borderRadius: 50, background: 'rgba(0,180,255,.08)', border: '1px solid rgba(0,180,255,.18)',
    color: T.blue }}>{children}</span>;
}

function SpeakerCard({ initials, name, role, company }) {
  const [h, setH] = useState(false);
  return <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ background: T.card, border: `1px solid ${h ? T.borderHover : T.border}`,
      borderRadius: 20, padding: '2rem 1.5rem', textAlign: 'center',
      transform: h ? 'translateY(-5px)' : 'none', transition: 'all .3s' }}>
    <div style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 1.2rem',
      background: 'linear-gradient(135deg,rgba(0,180,255,.2),rgba(120,80,255,.2))',
      border: `2px solid ${T.border}`, display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontFamily: T.display, fontSize: '1.5rem',
      fontWeight: 700, color: T.blue }}>{initials}</div>
    <div style={{ fontFamily: T.display, fontWeight: 600, marginBottom: '0.3rem' }}>{name}</div>
    <div style={{ color: T.muted, fontSize: '0.82rem' }}>{role}</div>
    <span style={{ display: 'inline-block', marginTop: '0.8rem', fontSize: '0.75rem',
      fontWeight: 600, color: T.blue, background: 'rgba(0,180,255,.08)',
      border: '1px solid rgba(0,180,255,.15)', borderRadius: 50, padding: '4px 12px' }}>{company}</span>
  </div>;
}

function ScheduleItem({ time, tag, tone, title, desc }) {
  const [h, setH] = useState(false);
  return <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '2rem',
      padding: '1.8rem 2.5rem', borderBottom: `1px solid ${T.border}`,
      background: tone === 'purple' ? 'rgba(120,80,255,.05)' : (h ? 'rgba(100,140,255,.04)' : 'transparent'),
      transition: 'background .2s' }}>
    <div style={{ fontFamily: T.display, fontWeight: 600, color: T.blue, paddingTop: 3 }}>{time}</div>
    <div>
      <div style={{ marginBottom: '0.5rem' }}><Badge tone={tone}>{tag}</Badge></div>
      <div style={{ fontFamily: T.display, fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>{title}</div>
      <div style={{ color: T.muted, fontSize: '0.88rem' }}>{desc}</div>
    </div>
  </div>;
}

function Field({ label, type = 'text', placeholder, value, onChange, required }) {
  const [f, setF] = useState(false);
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label style={{ fontSize: '0.82rem', fontWeight: 500, color: T.muted }}>{label}{required && ' *'}</label>
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}
      onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ background: 'rgba(255,255,255,.04)',
        border: `1px solid ${f ? 'rgba(100,140,255,.5)' : T.border}`,
        boxShadow: f ? '0 0 0 3px rgba(100,140,255,.1)' : 'none',
        borderRadius: 10, padding: '12px 16px', color: T.fg, fontFamily: T.body,
        fontSize: '0.92rem', outline: 'none', transition: 'all .2s' }} />
  </div>;
}

Object.assign(window, { T, Eyebrow, GradientText, NeonDivider, Button, Card,
  Badge, Chip, SpeakerCard, ScheduleItem, Field });
