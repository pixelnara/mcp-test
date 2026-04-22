import Link from 'next/link';
import Button from '@/components/Button';
import Tag from '@/components/Tag';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';

/* ── Token data ─────────────────────────────────────────── */

const colorTokens = [
  { cssVar: '--color-text-primary',    hex: '#2A3038', label: 'text-primary',    usage: '제목, 본문 텍스트' },
  { cssVar: '--color-text-secondary',  hex: '#555D6D', label: 'text-secondary',  usage: '보조 텍스트, 캡션' },
  { cssVar: '--color-bg-secondary',    hex: '#F3F4F5', label: 'bg-secondary',    usage: '카드·태그·섹션 배경' },
  { cssVar: '--color-border-default',  hex: '#DCDEE3', label: 'border-default',  usage: '테두리, 구분선' },
  { cssVar: '--color-brand-primary',   hex: '#FF6F0F', label: 'brand-primary',   usage: 'CTA 버튼, 강조 요소' },
  { cssVar: '--color-brand-secondary', hex: '#E68507', label: 'brand-secondary', usage: '브랜드 보조 (hover)' },
];

const typographyTokens = [
  { label: 'Bold / 38',      weight: 700, size: 'var(--font-size-38)', lh: 'var(--line-height-38)', usage: '페이지 메인 타이틀',     sample: '메인 타이틀입니다' },
  { label: 'SemiBold / 16', weight: 600, size: 'var(--font-size-16)', lh: 'var(--line-height-24)', usage: '버튼 라벨, 카드 제목',   sample: '버튼 라벨 텍스트' },
  { label: 'SemiBold / 14', weight: 600, size: 'var(--font-size-14)', lh: 'var(--line-height-20)', usage: '소형 버튼, 태그 라벨',   sample: '태그 라벨 텍스트' },
  { label: 'Regular / 16',  weight: 400, size: 'var(--font-size-16)', lh: 'var(--line-height-24)', usage: '본문 텍스트',            sample: '본문 텍스트입니다' },
  { label: 'Regular / 14',  weight: 400, size: 'var(--font-size-14)', lh: 'var(--line-height-20)', usage: '보조 텍스트, 캡션',      sample: '보조 텍스트, 인기 검색어' },
];

const spacingTokens = [
  { cssVar: '--spacing-2',   value: '2px'   },
  { cssVar: '--spacing-4',   value: '4px'   },
  { cssVar: '--spacing-6',   value: '6px'   },
  { cssVar: '--spacing-10',  value: '10px'  },
  { cssVar: '--spacing-12',  value: '12px'  },
  { cssVar: '--spacing-14',  value: '14px'  },
  { cssVar: '--spacing-16',  value: '16px'  },
  { cssVar: '--spacing-20',  value: '20px'  },
  { cssVar: '--spacing-32',  value: '32px'  },
  { cssVar: '--spacing-80',  value: '80px'  },
  { cssVar: '--spacing-260', value: '260px' },
];

const radiusTokens = [
  { cssVar: '--radius-4',    value: '4px',    label: 'radius-4',    usage: '버튼 (primary, dialog)' },
  { cssVar: '--radius-12',   value: '12px',   label: 'radius-12',   usage: '카드' },
  { cssVar: '--radius-16',   value: '16px',   label: 'radius-16',   usage: '큰 카드, 모달' },
  { cssVar: '--radius-full', value: '9999px', label: 'radius-full', usage: 'Pill (태그, 검색바)' },
];

/* ── Demo icons (Components section) ───────────────────── */

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const MenuIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/* ── Layout helpers ─────────────────────────────────────── */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 'var(--spacing-80)' }}>
      <h2
        style={{
          margin: '0 0 var(--spacing-32) 0',
          fontSize: 'var(--font-size-38)',
          fontWeight: 700,
          lineHeight: 'var(--line-height-38)',
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 'var(--spacing-32)' }}>
      <h3
        style={{
          margin: '0 0 var(--spacing-16) 0',
          fontSize: 'var(--font-size-16)',
          fontWeight: 600,
          lineHeight: 'var(--line-height-24)',
          color: 'var(--color-text-secondary)',
        }}
      >
        {title}
      </h3>
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 'var(--radius-12)',
          border: '1px solid var(--color-border-default)',
          padding: 'var(--spacing-20)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Token display cells ────────────────────────────────── */

function ColorSwatch({ token }: { token: typeof colorTokens[number] }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 'var(--radius-12)',
        border: '1px solid var(--color-border-default)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: 64,
          backgroundColor: `var(${token.cssVar})`,
          borderBottom: '1px solid var(--color-border-default)',
        }}
      />
      <div style={{ padding: 'var(--spacing-12)' }}>
        <p
          style={{
            margin: '0 0 var(--spacing-4) 0',
            fontSize: 'var(--font-size-14)',
            fontWeight: 600,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-primary)',
          }}
        >
          {token.hex}
        </p>
        <p
          style={{
            margin: '0 0 var(--spacing-4) 0',
            fontSize: 'var(--font-size-14)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'monospace',
          }}
        >
          {token.cssVar}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-14)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {token.usage}
        </p>
      </div>
    </div>
  );
}

function TypographyRow({ token }: { token: typeof typographyTokens[number] }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 'var(--radius-12)',
        border: '1px solid var(--color-border-default)',
        padding: 'var(--spacing-20)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-32)',
      }}
    >
      <span
        style={{
          flex: 1,
          fontFamily: 'var(--font-family-base)',
          fontSize: token.size,
          fontWeight: token.weight,
          lineHeight: token.lh,
          color: 'var(--color-text-primary)',
        }}
      >
        {token.sample}
      </span>
      <div style={{ flexShrink: 0, textAlign: 'right' }}>
        <p
          style={{
            margin: '0 0 var(--spacing-4) 0',
            fontSize: 'var(--font-size-14)',
            fontWeight: 600,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-primary)',
          }}
        >
          {token.label}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-14)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {token.usage}
        </p>
      </div>
    </div>
  );
}

function SpacingRow({ token }: { token: typeof spacingTokens[number] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
      <div
        style={{
          height: 'var(--spacing-10)',
          width: `var(${token.cssVar})`,
          minWidth: 'var(--spacing-2)',
          backgroundColor: 'var(--color-brand-primary)',
          borderRadius: 'var(--radius-4)',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 'var(--font-size-14)',
          fontWeight: 400,
          lineHeight: 'var(--line-height-20)',
          color: 'var(--color-text-secondary)',
          fontFamily: 'monospace',
          whiteSpace: 'nowrap',
        }}
      >
        {token.cssVar}
      </span>
      <span
        style={{
          fontSize: 'var(--font-size-14)',
          fontWeight: 600,
          lineHeight: 'var(--line-height-20)',
          color: 'var(--color-text-primary)',
        }}
      >
        {token.value}
      </span>
    </div>
  );
}

function RadiusItem({ token }: { token: typeof radiusTokens[number] }) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 'var(--radius-12)',
        border: '1px solid var(--color-border-default)',
        padding: 'var(--spacing-20)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-12)',
        minWidth: 140,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          backgroundColor: 'var(--color-bg-secondary)',
          border: '2px solid var(--color-brand-primary)',
          borderRadius: `var(${token.cssVar})`,
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            margin: '0 0 var(--spacing-4) 0',
            fontSize: 'var(--font-size-14)',
            fontWeight: 600,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-primary)',
          }}
        >
          {token.value}
        </p>
        <p
          style={{
            margin: '0 0 var(--spacing-4) 0',
            fontSize: 'var(--font-size-14)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'monospace',
          }}
        >
          {token.cssVar}
        </p>
        <p
          style={{
            margin: 0,
            fontSize: 'var(--font-size-14)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {token.usage}
        </p>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────── */

export default function DesignSystemPage() {
  return (
    <div
      style={{
        fontFamily: 'var(--font-family-base)',
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      {/* Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: 'white',
          borderBottom: '1px solid var(--color-border-default)',
          padding: 'var(--spacing-16) var(--spacing-32)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-16)',
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: 'var(--font-size-14)',
            fontWeight: 400,
            lineHeight: 'var(--line-height-20)',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
          }}
        >
          ← 홈
        </Link>
        <span style={{ color: 'var(--color-border-default)' }}>/</span>
        <h1
          style={{
            margin: 0,
            fontSize: 'var(--font-size-16)',
            fontWeight: 600,
            lineHeight: 'var(--line-height-24)',
            color: 'var(--color-text-primary)',
          }}
        >
          디자인 시스템
        </h1>
      </header>

      <main
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: 'var(--spacing-80) var(--spacing-32)',
        }}
      >

        {/* ── Colors ──────────────────────────────────── */}
        <Section title="Colors">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 'var(--spacing-16)',
            }}
          >
            {colorTokens.map((token) => (
              <ColorSwatch key={token.cssVar} token={token} />
            ))}
          </div>
        </Section>

        {/* ── Typography ──────────────────────────────── */}
        <Section title="Typography">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-10)' }}>
            {typographyTokens.map((token) => (
              <TypographyRow key={token.label} token={token} />
            ))}
          </div>
        </Section>

        {/* ── Spacing ─────────────────────────────────── */}
        <Section title="Spacing">
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-12)',
              border: '1px solid var(--color-border-default)',
              padding: 'var(--spacing-20)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-14)',
              overflow: 'hidden',
            }}
          >
            {spacingTokens.map((token) => (
              <SpacingRow key={token.cssVar} token={token} />
            ))}
          </div>
        </Section>

        {/* ── Border Radius ───────────────────────────── */}
        <Section title="Border Radius">
          <div style={{ display: 'flex', gap: 'var(--spacing-16)', flexWrap: 'wrap' }}>
            {radiusTokens.map((token) => (
              <RadiusItem key={token.cssVar} token={token} />
            ))}
          </div>
        </Section>

        {/* ── Components ──────────────────────────────── */}
        <Section title="Components">

          <SubSection title="Button">
            <div style={{ display: 'flex', gap: 'var(--spacing-12)', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="primary" label="앱 다운로드" />
              <Button variant="primary" label="로그인" icon={<UserIcon />} />
              <Button variant="primary" label="비활성" disabled />
              <Button variant="search" icon={<SearchIcon />} />
              <Button variant="ghost" icon={<MenuIcon />} />
            </div>
          </SubSection>

          <SubSection title="Tag">
            <div style={{ display: 'flex', gap: 'var(--spacing-10)', flexWrap: 'wrap' }}>
              <Tag label="송도동" />
              <Tag label="강남구" />
              <Tag label="거래 가능" />
              <Tag label="비활성" disabled />
            </div>
          </SubSection>

          <SubSection title="Card">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 'var(--spacing-10)',
              }}
            >
              <Card label="중고거래" icon="🛍️" />
              <Card label="중고차"   icon="🚗" />
              <Card label="동네업체" icon="🏪" />
              <Card label="모임"     icon="👥" />
            </div>
          </SubSection>

          <SubSection title="SearchBar">
            <div style={{ maxWidth: 754 }}>
              <SearchBar placeholder="검색어를 입력해주세요" dropdownLabel="중고거래" />
            </div>
          </SubSection>

        </Section>

      </main>
    </div>
  );
}
