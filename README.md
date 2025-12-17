📌 프로젝트 개요

Java(Spring MVC) 기반 사내 관리 시스템의 프론트엔드를
React → Next.js(App Router) + TypeScript로 리팩토링한 프로젝트입니다.

기존 JSP 화면을 컴포넌트 단위로 재구성하고,
Next.js의 파일 기반 라우팅, 레이아웃 구조, 서버 미들웨어를 적용하여
구조 안정성과 유지보수성을 개선했습니다.

🛠 기술 스택 (Frontend)

Next.js 16 

TypeScript

Redux / Redux-Persist

Axios

CSS Modules

ESLint

🔗 Backend (연동 API)

Java 11

Spring MVC (REST API)

PostgreSQL

⚙️ Infra / DevOps

GitHub Actions (CI/CD)

Render 배포 환경

PostgreSQL Cloud DB

✨ 주요 기능

📅 월간 일정 관리 (FullCalendar 기반)

📝 업무보고 / 회의록 / 게시판 관리

👤 사용자 및 시스템 코드 관리

🏖 연차 관리

🔐 로그인 기반 접근 제어 (Middleware 처리)

👨‍💻 담당 역할

기존 JSP 화면 → React → Next.js(App Router) 단계적 전환

페이지·레이아웃 구조 재설계 (page.tsx, layout.tsx)

Redux 기반 전역 상태 관리 설계

백엔드 REST API 연동

PostgreSQL 연동

🧱 아키텍처 요약
AS-IS

Java Spring MVC + JSP

jQuery + Ajax

PostgreSQL (Local DB)

TO-BE

Next.js(App Router) + TypeScript

React Component 기반 UI

Spring REST API 연동

PostgreSQL Cloud DB

🔄 리팩토링 포인트

React Router → Next.js 파일 기반 라우팅

조건부 렌더링 → Server/Middleware 인증 분기

JS 코드 → TypeScript 타입 안정성 강화

📂 프로젝트 목적

React 프로젝트를 Next.js 구조로 전환하며
라우팅·레이아웃·인증 구조에 대한 이해 강화

실무에서 사용 가능한 Next.js App Router 패턴 학습

포트폴리오용 구조 정리 및 기술 스택 확장
