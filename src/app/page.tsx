import Button from '@/components/Button';
import SearchBar from '@/components/SearchBar';
import Card from '@/components/Card';
import Tag from '@/components/Tag';

/* ── SVG Icons ───────────────────────────────────────── */
const HeaderSearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path
      d="M16 3C11.582 3 8 6.582 8 11C8 17.5 16 29 16 29C16 29 24 17.5 24 11C24 6.582 20.418 3 16 3Z"
      fill="var(--color-brand-primary)"
    />
    <circle cx="16" cy="11" r="3" fill="var(--color-bg-primary)" />
  </svg>
);

/* ── Data ─────────────────────────────────────────────── */
const categories = [
  { label: '중고거래', icon: '🛍️' },
  { label: '중고차',   icon: '🚗' },
  { label: '동네업체', icon: '🏪' },
  { label: '모임',     icon: '👥' },
  { label: '비즈프로필', icon: '💼' },
  { label: '알바',     icon: '📍' },
  { label: '전문가',   icon: '⭐' },
  { label: '부동산',   icon: '🏠' },
];

const popularKeywords = [
  '에어컨', '에어컨청소', '노트북', '원룸', '현대 중고차',
  '이사짐 알바', '근처 맛집', '투표', '동네친구', '배드민턴 모임',
  '자전거', '플스', '투룸 빌라', '닌텐도', '서빙 알바', '기아 중고차', '전세 매물',
];

const locationTags = [
  '역삼동', '한남동', '성수동', '망원동', '판교동',
  '잠실동', '신사동', '정자동', '서현동', '방배동',
  '합정동', '연남동', '이태원동', '압구정동', '청담동',
  '목동', '중계동', '불광동', '신림동', '노원동',
];

/* ── Page ─────────────────────────────────────────────── */
export default function Page() {
  return (
    <div style={{
      fontFamily: 'var(--font-family-base)',
      backgroundColor: 'var(--color-bg-secondary)',
      minHeight: '100vh',
    }}>

      {/* ── Header ─────────────────────────────────── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: '1px solid var(--color-border-default)',
      }}>
        <div style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: 'var(--spacing-16) var(--spacing-80)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{
            fontSize: 24,
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            letterSpacing: 'var(--letter-spacing-0)',
          }}>
            Logo
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-16)' }}>
            <Button variant="ghost" icon={<HeaderSearchIcon />} />
            <Button variant="primary" label="앱 다운로드" />
          </div>
        </div>
      </header>

      <main>

        {/* ── Hero ───────────────────────────────────── */}
        <section style={{
          backgroundColor: 'var(--color-bg-primary)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 'calc(var(--spacing-80) + var(--spacing-32))',
          paddingBottom: 'calc(var(--spacing-80) + var(--spacing-32))',
          paddingLeft: 'var(--spacing-20)',
          paddingRight: 'var(--spacing-20)',
        }}>

          {/* 타이틀 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-6)',
            marginBottom: 'var(--spacing-20)',
          }}>
            <LocationPinIcon />
            <h1 style={{
              margin: 0,
              fontSize: 'var(--font-size-38)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: 'var(--line-height-38)',
              color: 'var(--color-text-primary)',
              letterSpacing: 'var(--letter-spacing-0)',
            }}>
              아이폰 찾고 계신가요?
            </h1>
          </div>

          {/* SearchBar + 인기검색어 */}
          <div style={{ width: '100%', maxWidth: 754 }}>
            <SearchBar />

            {/* 인기 검색어 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 'var(--spacing-6)',
              paddingLeft: 'var(--spacing-6)',
              overflow: 'hidden',
            }}>
              <span style={{
                flexShrink: 0,
                fontSize: 'var(--font-size-14)',
                fontWeight: 'var(--font-weight-regular)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-24)',
                paddingRight: 'var(--spacing-16)',
                letterSpacing: 'var(--letter-spacing-0)',
              }}>
                인기 검색어
              </span>
              <div style={{ position: 'relative', overflow: 'hidden', flex: 1 }}>
                <div style={{
                  display: 'flex',
                  gap: 'var(--spacing-12)',
                  overflow: 'hidden',
                }}>
                  {popularKeywords.map((kw) => (
                    <span
                      key={kw}
                      style={{
                        fontSize: 'var(--font-size-14)',
                        fontWeight: 'var(--font-weight-regular)',
                        color: 'var(--color-text-secondary)',
                        lineHeight: 'var(--line-height-24)',
                        letterSpacing: 'var(--letter-spacing-0)',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                {/* 우측 페이드 오버레이 */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: 'var(--spacing-16)',
                  background: 'linear-gradient(to right, rgba(255,255,255,0), var(--color-bg-primary))',
                  pointerEvents: 'none',
                }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 카테고리 카드 ────────────────────────────── */}
        <section style={{
          maxWidth: 916,
          margin: '0 auto',
          padding: 'var(--spacing-32) var(--spacing-16)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--spacing-10)',
          }}>
            {categories.map((cat) => (
              <Card key={cat.label} label={cat.label} icon={cat.icon} />
            ))}
          </div>
        </section>

        {/* ── 동네 태그 ─────────────────────────────────── */}
        <section style={{
          maxWidth: 916,
          margin: '0 auto',
          padding: '0 var(--spacing-16) var(--spacing-80)',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            rowGap: 'var(--spacing-10)',
            columnGap: 'var(--spacing-10)',
            justifyContent: 'center',
          }}>
            {locationTags.map((loc) => (
              <Tag key={loc} label={loc} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
