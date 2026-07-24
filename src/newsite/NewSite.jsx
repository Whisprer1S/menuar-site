import './tokens.css';

export default function NewSite() {
  return (
    <div>
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--ink)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-on-dark)',
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            margin: 0,
          }}
        >
          Menuar
        </h1>
      </section>

      <section
        style={{
          background: 'var(--stone)',
          padding: '4rem 1.5rem',
        }}
      >
        <p style={{ color: 'var(--text)', maxWidth: '40ch' }}>
          If you can read this in FiraGO on a warm stone background, the tokens
          and fonts are loading correctly.
        </p>
      </section>
    </div>
  );
}
