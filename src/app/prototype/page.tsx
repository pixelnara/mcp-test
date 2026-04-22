import Link from 'next/link';

export default function PrototypePage() {
  const screens = [
    { href: '/prototype/main', emoji: '🏠', label: '메인', desc: '홈 화면 프로토타입' },
    { href: '/prototype/search', emoji: '🔍', label: '검색 결과', desc: '중고차 검색 결과' },
  ];

  return (
    <div
      style={{
        fontFamily: 'var(--font-family-base)',
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-32)',
        position: 'relative',
      }}
    >
      <Link
        href="/"
        style={{
          position: 'absolute',
          top: 'var(--spacing-20)',
          left: 'var(--spacing-20)',
          fontSize: 'var(--font-size-14)',
          fontWeight: 400,
          lineHeight: 'var(--line-height-20)',
          color: 'var(--color-text-secondary)',
          textDecoration: 'none',
        }}
      >
        ← 홈으로
      </Link>

      <div style={{ marginBottom: 'var(--spacing-32)', textAlign: 'center' }}>
        <h1
          style={{
            margin: 0,
            fontSize: 'var(--font-size-38)',
            fontWeight: 700,
            lineHeight: 'var(--line-height-38)',
            color: 'var(--color-text-primary)',
          }}
        >
          프로토타입
        </h1>
        <p
          style={{
            margin: 'var(--spacing-12) 0 0',
            fontSize: 'var(--font-size-16)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-24)',
            color: 'var(--color-text-secondary)',
          }}
        >
          화면을 선택하세요
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'var(--spacing-16)',
          width: '100%',
          maxWidth: 440,
        }}
      >
        {screens.map(({ href, emoji, label, desc }) => (
          <Link key={href} href={href} style={{ textDecoration: 'none' }}>
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-16)',
                border: '1px solid var(--color-border-default)',
                padding: 'var(--spacing-32)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-12)',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: 'var(--font-size-38)' }}>{emoji}</span>
              <span
                style={{
                  fontSize: 'var(--font-size-16)',
                  fontWeight: 600,
                  lineHeight: 'var(--line-height-24)',
                  color: 'var(--color-text-primary)',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontSize: 'var(--font-size-14)',
                  fontWeight: 400,
                  lineHeight: 'var(--line-height-20)',
                  color: 'var(--color-text-secondary)',
                  textAlign: 'center',
                }}
              >
                {desc}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
