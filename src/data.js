export const PROFILE = {
  name: '안근수',
  nameEn: 'Ahn Geunsu',
  handle: 'maybeags',
  title: ['Backend Developer', 'KDT Fullstack Instructor'],
  desc: 'Java/Spring Boot 백엔드 개발과 AWS 클라우드 배포를 직접 구현하고, KDT 국비지원 과정 주강사로 2개 기수에 걸쳐 풀스택 커리큘럼을 단독 설계·운영합니다.',
  github: 'https://github.com/maybeags',
  email: 'justinahngs@naver.com',
  githubPages: 'https://maybeags.github.io',
}

export const CERTS = [
  { name: '정보처리기사', date: '2024.06', color: 'green' },
  { name: 'SQL 개발자 (SQLD)', date: '2024.06', color: 'green' },
  { name: 'NCS 정보기술개발 확인강사', date: '2024.10', color: 'purple' },
  { name: '데이터분석 준전문가 (ADsP)', date: '2026.03', color: 'purple' },
]

export const SKILLS = [
  {
    group: 'Backend',
    color: 'accent',
    tags: [
      { label: 'Java 17', hot: true },
      { label: 'Spring Boot 3.x', hot: true },
      { label: 'Spring Security', hot: true },
      { label: 'JWT', hot: true },
      { label: 'JPA / Hibernate', hot: true },
      { label: 'REST API', hot: true },
      { label: 'Swagger / OpenAPI', hot: true },
      { label: 'OAuth2', hot: true },
      { label: 'Python' },
    ],
  },
  {
    group: 'Cloud / DevOps',
    color: 'green',
    tags: [
      { label: 'AWS EC2', hot: true },
      { label: 'AWS RDS', hot: true },
      { label: 'AWS S3', hot: true },
      { label: 'Docker', hot: true },
      { label: 'GitHub Actions', hot: true },
      { label: 'Nginx', hot: true },
      { label: 'Certbot / HTTPS', hot: true },
      { label: 'Git / GitHub' },
    ],
  },
  {
    group: 'Frontend',
    color: 'purple',
    tags: [
      { label: 'React', hot: true },
      { label: 'TypeScript', hot: true },
      { label: 'Vite', hot: true },
      { label: 'react-query', hot: true },
      { label: 'MUI', hot: true },
      { label: 'AG-Grid', hot: true },
      { label: 'JavaScript ES6+' },
      { label: 'HTML5 / CSS3' },
    ],
  },
  {
    group: 'Database',
    color: 'orange',
    tags: [
      { label: 'MariaDB' },
      { label: 'MySQL' },
      { label: 'JPA ORM' },
      { label: 'SQL (SQLD)' },
      { label: 'HeidiSQL' },
      { label: 'DBeaver' },
    ],
  },
]

export const EXPERIENCE = [
  {
    period: '2024.06 – present',
    role: 'KDT 풀스택 주강사',
    org: '코리아아이티아카데미 부산',
    color: 'accent',
    desc: 'Java → HTML/CSS → JavaScript → Python → SQL → Spring Boot → React → OAuth2 → AWS 배포에 이르는 전 과정을 단독 설계·운영. 2개 기수(korit_07, korit_12) 담당. 수강생 전원 개별 코드 피드백 및 GitHub 레포 리뷰 운영.',
    tags: ['Spring Boot', 'JWT', 'AWS', 'React', 'KDT 주강사'],
  },
  {
    period: '2016.03 – 2023.02',
    role: '영어교사',
    org: '중등학교 (약 7년)',
    color: 'green',
    desc: '영어과 정규 교육과정 설계 및 수업 운영. 교무기획부 업무 병행. 수준별 학습자 대상 맞춤형 교수 설계 역량 체득.',
    tags: ['교육과정 설계', '교수 설계', '학습자 분석'],
  },
]

export const TEACHING = [
  {
    icon: 'Java',
    name: 'Java 17',
    color: '#58a6ff',
    items: ['OOP / 상속 / 인터페이스', 'Lambda / Stream API', '예외처리 / 컬렉션'],
  },
  {
    icon: 'Spring',
    name: 'Spring Boot 3.x',
    color: '#58a6ff',
    items: ['DI/IoC / JPA / ORM', 'Spring Security + JWT', 'REST API / Swagger'],
  },
  {
    icon: 'React',
    name: 'React + TypeScript',
    color: '#d2a8ff',
    items: ['Hooks / ContextAPI', 'react-query / MUI', 'CRUD 풀스택 연동'],
  },
  {
    icon: 'AWS',
    name: 'AWS 배포',
    color: '#3fb950',
    items: ['EC2 / Nginx / HTTPS', 'RDS / S3 / IAM', 'Docker / CI/CD'],
  },
  {
    icon: 'SQL',
    name: 'SQL / MariaDB',
    color: '#f78166',
    items: ['JOIN / SUBQUERY', 'DDL / 집계함수', 'JPA 연동 실습'],
  },
  {
    icon: 'Python',
    name: 'Python',
    color: '#f0883e',
    items: ['OOP / 클래스 / 상속', '커피머신 프로젝트', 'Hangman 게임'],
  },
]

export const PROJECTS = [
  {
    name: 'Car Database — 풀스택 프로젝트',
    desc: 'Spring Boot 3.x + React(TypeScript) + MariaDB + AWS 풀스택. Car-Owner 1:N JPA 설계, Spring Security + JWT 인증, CORS, Swagger. React MUI + AG-Grid + react-query CRUD 완전 연동. AWS EC2 + Nginx + Certbot HTTPS + RDS + S3 이미지 업로드 전 과정 구현.',
    links: [
      { label: 'Backend', url: 'https://github.com/maybeags/korit_12_springboot' },
      { label: 'Frontend', url: 'https://github.com/maybeags/korit_12_react' },
    ],
    tags: [
      { label: 'Spring Boot', color: 'accent' },
      { label: 'JPA', color: 'accent' },
      { label: 'JWT', color: 'accent' },
      { label: 'React', color: 'purple' },
      { label: 'TypeScript', color: 'purple' },
      { label: 'MUI', color: 'purple' },
      { label: 'AWS EC2', color: 'green' },
      { label: 'RDS', color: 'green' },
      { label: 'S3', color: 'green' },
    ],
  },
  {
    name: 'Google OAuth2 소셜 로그인 풀스택',
    desc: 'Spring Boot OAuth2 Client + JWT 통합 인증. Google 인증 콜백 처리, 쿼리스트링 토큰 전달. React PrivateRoute / GuestRoute 라우팅 보호. MUI 기반 소셜 로그인 UI 완성.',
    links: [
      { label: 'GitHub', url: 'https://github.com/maybeags/korit_12_springboot' },
    ],
    tags: [
      { label: 'OAuth2', color: 'accent' },
      { label: 'Spring Security', color: 'accent' },
      { label: 'JWT', color: 'accent' },
      { label: 'React', color: 'purple' },
      { label: 'TypeScript', color: 'purple' },
    ],
  },
  {
    name: 'GitHub Pages 포트폴리오 사이트',
    desc: 'Vite + React 기반 정적 포트폴리오 사이트. GitHub Actions CI/CD 자동 배포 적용. main 브랜치 push 시 자동 빌드 및 Pages 배포.',
    links: [
      { label: 'GitHub', url: 'https://github.com/maybeags/maybeags.github.io' },
      { label: 'Live', url: 'https://maybeags.github.io', color: 'green' },
    ],
    tags: [
      { label: 'Vite', color: 'purple' },
      { label: 'React', color: 'purple' },
      { label: 'GitHub Actions', color: 'green' },
      { label: 'GitHub Pages', color: 'green' },
    ],
  },
  {
    name: 'Gemini AI Chatbot',
    desc: '순수 JavaScript + Fetch API 기반 Gemini AI API 연동 챗봇. 프레임워크 없이 비동기 처리와 DOM 조작으로 실시간 대화 UI 구현. JS 강의 교재로 활용.',
    links: [
      { label: 'GitHub', url: 'https://github.com/maybeags/korit_12_javascript' },
    ],
    tags: [
      { label: 'JavaScript ES6+', color: 'default' },
      { label: 'Fetch API', color: 'default' },
      { label: 'Gemini API', color: 'default' },
    ],
  },
]
