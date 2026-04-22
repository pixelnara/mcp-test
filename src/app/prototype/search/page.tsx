"use client"; //0422수정

import styles from "./SearchPage.module.css"; //0422수정

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import Tag from "@/components/Tag";

// 아이콘 컴포넌트
const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M9 9.5C10.3807 9.5 11.5 8.38071 11.5 7C11.5 5.61929 10.3807 4.5 9 4.5C7.61929 4.5 6.5 5.61929 6.5 7C6.5 8.38071 7.61929 9.5 9 9.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 15.5C9 15.5 14.5 11 14.5 7C14.5 3.5 11.5 1.5 9 1.5C6.5 1.5 3.5 3.5 3.5 7C3.5 11 9 15.5 9 15.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3.5 5L7 8.5L10.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HomeIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M6 1L1 5.5V10.5H4V7.5H8V10.5H11V5.5L6 1Z"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 브랜드 로고 플레이스홀더
const BrandLogo = ({ name }: { name: string }) => (
  <div
    style={{
      width: 32,
      height: 32,
      backgroundColor: "var(--color-bg-secondary)",
      borderRadius: "var(--radius-4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 10,
      color: "var(--color-text-secondary)",
    }}
  >
    {name.charAt(0)}
  </div>
);

// 필터 체크박스
function FilterCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-12)",
        padding: "var(--spacing-10) 0",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "var(--radius-4)",
          border: checked ? "none" : "1px solid var(--color-border-default)",
          backgroundColor: checked ? "var(--color-brand-primary)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checked && <CheckIcon />}
      </div>
      <span
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-14)",
          fontWeight: 400,
          lineHeight: "var(--line-height-24)",
          color: "var(--color-text-primary)",
        }}
      >
        {label}
      </span>
    </label>
  );
}

// 브랜드 필터 아이템
function BrandItem({ name, logo }: { name: string; logo?: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-12)",
        padding: "var(--spacing-10) 0",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: "var(--radius-4)",
          border: "1px solid var(--color-border-default)",
        }}
      />
      {logo && <div style={{ marginRight: 4 }}>{logo}</div>}
      <span
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-14)",
          fontWeight: 400,
          lineHeight: "var(--line-height-24)",
          color: "var(--color-text-primary)",
        }}
      >
        {name}
      </span>
    </div>
  );
}

// 필터 섹션
function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "var(--spacing-20)" }}>
      <h3
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-14)",
          fontWeight: 600,
          lineHeight: "var(--line-height-22)",
          color: "var(--color-text-primary)",
          margin: "0 0 var(--spacing-12) 0",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

// 필터 패널
function FilterPanel() {
  const [tradeOnly, setTradeOnly] = useState(false);

  const brands = [
    { name: "전체" },
    { name: "쉐보레(대우)" },
    { name: "기아" },
    { name: "르노(삼성)" },
    { name: "KG모빌리티(쌍용)" },
    { name: "현대" },
    { name: "BMW" },
    { name: "벤츠" },
    { name: "아우디" },
  ];

  return (
    <aside className={styles.filterPanel}>
      {" "}
      {/* //0422수정 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--spacing-16)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-family-base)",
            fontSize: "var(--font-size-16)",
            fontWeight: 600,
            lineHeight: "var(--line-height-28)",
            color: "var(--color-text-primary)",
            margin: 0,
          }}
        >
          필터
        </h2>
        <button
          style={{
            background: "none",
            border: "none",
            fontFamily: "var(--font-family-base)",
            fontSize: "var(--font-size-14)",
            fontWeight: 400,
            lineHeight: "var(--line-height-20)",
            color: "var(--color-brand-primary)",
            cursor: "pointer",
            padding: 0,
          }}
        >
          초기화
        </button>
      </div>
      <FilterSection title="브랜드">
        <FilterCheckbox label="거래 가능만 보기" checked={tradeOnly} onChange={setTradeOnly} />
        <div style={{ height: 1, backgroundColor: "var(--color-border-default)", margin: "var(--spacing-12) 0" }} />
        {brands.map((brand, index) => (
          <BrandItem key={index} name={brand.name} />
        ))}
      </FilterSection>
    </aside>
  );
}

// 메인 콘텐츠
function CarList() {
  const cars = [
    {
      id: 1,
      title: "현대 아이오닉 5 2022년식",
      location: "서울특별시 중구",
      km: "32,000km",
      price: "4,500만원",
      available: true,
      image: "/images/01.png",
    },
    {
      id: 2,
      title: "기아EV6 GT-Line 2023년식",
      location: "서울특별시 중구",
      km: "15,000km",
      price: "5,800만원",
      available: true,
      image: "/images/02.png",
    },
    {
      id: 3,
      title: "쉐보레 볼트 EV 2021년식",
      location: "서울특별시 중구",
      km: "45,000km",
      price: "2,800만원",
      available: false,
      image: "/images/03.png",
    },
    {
      id: 4,
      title: "BMW i3 2020년식",
      location: "서울특별시 중구",
      km: "28,000km",
      price: "3,200만원",
      available: true,
      image: "/images/04.png",
    },
    {
      id: 5,
      title: "테슬라 모델 3 Long Range",
      location: "서울특별시 영등포구",
      km: "20,000km",
      price: "6,500만원",
      available: true,
      image: "/images/05.png",
    },
    {
      id: 6,
      title: "현대 코나 EV 2021년식",
      location: "서울특별시 강남구",
      km: "38,000km",
      price: "3,800만원",
      available: true,
      image: "/images/06.png",
    },
    {
      id: 7,
      title: "기아 니로 EV 2022년식",
      location: "서울특별시 마포구",
      km: "25,000km",
      price: "4,200만원",
      available: false,
      image: "/images/07.png",
    },
    {
      id: 8,
      title: "르노 Zoe EV 2020년식",
      location: "서울특별시 용산구",
      km: "50,000km",
      price: "2,500만원",
      available: true,
      image: "/images/08.png",
    },
    {
      id: 9,
      title: "벤츠 EQC 400 2021년식",
      location: "서울특별시 서초구",
      km: "22,000km",
      price: "7,800만원",
      available: true,
      image: "/images/09.png",
    },
    {
      id: 10,
      title: "아우디 e-tron 2022년식",
      location: "서울특별시 송파구",
      km: "18,000km",
      price: "8,200만원",
      available: true,
      image: "/images/10.png",
    },
    {
      id: 11,
      title: "BMW i4 eDrive40 2023년식",
      location: "서울특별시 강동구",
      km: "12,000km",
      price: "9,500만원",
      available: true,
      image: "/images/11.png",
    },
    {
      id: 12,
      title: "현대 아이오닉 6 2023년식",
      location: "서울특별시 성동구",
      km: "10,000km",
      price: "5,200만원",
      available: true,
      image: "/images/12.png",
    },
  ];

  return (
    <main className={styles.mainContent}>
      {" "}
      {/* //0422수정 */}
      <div style={{ marginBottom: "var(--spacing-20)" }}>
        <h1
          style={{
            fontFamily: "var(--font-family-base)",
            fontSize: "var(--font-size-38)",
            fontWeight: 700,
            lineHeight: "var(--line-height-38)",
            color: "var(--color-text-primary)",
            margin: 0,
          }}
        >
          서울특별시 중구 신당동 중고차
        </h1>
      </div>
      <div className={styles.cardGrid}>
        {" "}
        {/* //0422수정 */}
        {cars.map((car) => (
          <div
            key={car.id}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "var(--spacing-12)",
              backgroundColor: "white",
              borderRadius: "var(--radius-12)",
              border: "1px solid var(--color-border-default)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                borderRadius: "var(--radius-8)",
                marginBottom: "var(--spacing-12)",
                overflow: "hidden",
              }}
            >
              <img
                src={car.image}
                alt={car.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-4)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-family-base)",
                  fontSize: "var(--font-size-14)",
                  fontWeight: 600,
                  lineHeight: "var(--line-height-20)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {car.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-family-base)",
                  fontSize: "var(--font-size-12)",
                  fontWeight: 400,
                  lineHeight: "var(--line-height-18)",
                  color: "var(--color-text-secondary)",
                  margin: 0,
                }}
              >
                {car.location} · {car.km}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "var(--spacing-4)" }}>
                <span
                  style={{
                    fontFamily: "var(--font-family-base)",
                    fontSize: "var(--font-size-16)",
                    fontWeight: 700,
                    lineHeight: "var(--line-height-24)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {car.price}
                </span>
                {car.available && <Tag label="거래 가능" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

// 헤더
function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--spacing-16) var(--spacing-80)",
        borderBottom: "1px solid var(--color-border-default)",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-20)",
          fontWeight: 700,
          lineHeight: "var(--line-height-28)",
          color: "var(--color-brand-primary)",
        }}
      >
        당근마켓
      </div>
      <Button variant="primary" label="앱 다운로드" />
    </header>
  );
}

// 인기 검색어
function PopularSearches() {
  const keywords = ["아이오닉 5", "EV6", "테슬라 모델 3", "BMW i3", "벤츠 EQ"];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-12)",
        padding: "var(--spacing-16) var(--spacing-80)",
        backgroundColor: "var(--color-bg-secondary)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-14)",
          fontWeight: 600,
          lineHeight: "var(--line-height-20)",
          color: "var(--color-text-secondary)",
          whiteSpace: "nowrap",
        }}
      >
        인기 검색어
      </span>
      <div
        style={{
          display: "flex",
          gap: "var(--spacing-8)",
          flexWrap: "wrap",
        }}
      >
        {keywords.map((keyword, index) => (
          <Tag key={index} label={keyword} />
        ))}
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--spacing-4)",
        marginBottom: "var(--spacing-12)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-14)",
          fontWeight: 400,
          lineHeight: "var(--line-height-20)",
          color: "var(--color-text-primary)",
          cursor: "pointer",
        }}
      >
        홈
      </span>
      <ChevronIcon />
      <span
        style={{
          fontFamily: "var(--font-family-base)",
          fontSize: "var(--font-size-14)",
          fontWeight: 400,
          lineHeight: "var(--line-height-20)",
          color: "var(--color-text-primary)",
        }}
      >
        중고차
      </span>
    </nav>
  );
}

export default function SearchPage() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={styles.page}>
      {" "}
      {/* //0422수정 */}
      <Header />
      {/* 상단 검색 영역 */}
      <div className={styles.topSearchSection}>
        {" "}
        {/* //0422수정 */}
        <div className={styles.topSearchInner}>
          {" "}
          {/* //0422수정 */}
          <Button variant="primary" label="신당동" icon={<LocationIcon />} />
          <div className={styles.searchBarWrap}>
            {" "}
            {/* //0422수정 */}
            <SearchBar placeholder="검색어를 입력해주세요" dropdownLabel="중고거래" onSearch={(value) => setSearchValue(value)} />
          </div>
        </div>
      </div>
      <PopularSearches />
      {/* 네비게이션 + 제목 */}
      <div className={styles.breadcrumbSection}>
        {" "}
        {/* //0422수정 */}
        <Breadcrumb />
      </div>
      {/* 본문 */}
      <div className={styles.container}>
        {" "}
        {/* //0422수정 */}
        <FilterPanel />
        <CarList />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
          background: "blue",
          color: "white",
          padding: 8,
        }}
      >
        PROTOTYPE SEARCH TEST //0422수정
      </div>
    </div>
  );
}
