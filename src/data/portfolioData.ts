import { Project, Experience, SkillCategory, CodingProfile, Achievement, Education, NavItem } from "./types";

export const PERSONAL_INFO = {
  name: "Sujal Ahar",
  role: "Full-Stack Software Developer & AI Systems Engineer",
  tagline: "BUILDING SOFTWARE THAT SOLVES REAL PROBLEMS.",
  shortBio:
    "Information Technology undergraduate at NIT Raipur with deep engineering focus in full-stack architecture, high-performance backend pipelines, AI-driven applications, and competitive programming.",
  statusText: "NIT Raipur '27 • Open to Tech Discussions",
  location: "Raipur, Chhattisgarh, India",
  email: "sujalahar@gmail.com",
  phone: "+91-7000307760",
  github: "https://github.com/SuJal-Ahar",
  linkedin: "https://www.linkedin.com/in/sujal-ahar-0418bb2a8/",
  portraitUrl: "/assets/sujal-portrait.png",
  passportPhotoUrl: "/assets/sujal-passport.jpg",
  totalProblemsSolved: "1,400+",
  college: "National Institute of Technology Raipur",
  degree: "B.Tech in Information Technology (2023–2027)",
  cgpa: "7.66 / 10",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Hero", href: "#hero", number: "00" },
  { label: "Projects", href: "#projects", number: "01" },
  { label: "Experience", href: "#experience", number: "02" },
  { label: "Skills", href: "#skills", number: "03" },
  { label: "Coding Profiles", href: "#coding", number: "04" },
  { label: "Achievements", href: "#achievements", number: "05" },
  { label: "Education", href: "#education", number: "06" },
  { label: "Contact", href: "#contact", number: "07" },
];

export const PROJECTS: Project[] = [
  {
    id: "systemlens",
    title: "SystemLens",
    tagline: "AI Codebase Intelligence & Navigation Engine",
    category: "AI & Developer Tooling",
    featured: true,
    role: "Lead Full-Stack & Systems Developer",
    date: "2025–2026",
    description:
      "A developer-oriented repository intelligence platform that transforms raw source archives into interactive, cited, and searchable architectural intelligence with deep Git history tracking and context-enriched RAG retrieval.",
    keyContributions: [
      "Architected natural-language codebase exploration and repository architecture analysis using FastAPI, Next.js, and hybrid vector search.",
      "Engineered execution-path tracking that extracts entry points, symbol declarations, and call trees rather than returning raw code dumps.",
      "Built Git history intelligence parsing CLI logs into structured commit timelines, author metrics, and commit-level semantic search.",
      "Engineered context-enriched chunking with multi-threaded FastEmbed (ONNX) indexing 100 files in 4.91s (40x faster than initial 196s baseline).",
    ],
    metrics: [
      { label: "Hit@1 Retrieval", value: "70% → 75%" },
      { label: "Recall@1", value: "62.5% → 67.5%" },
      { label: "MRR@1 Score", value: "0.70 → 0.75" },
      { label: "Indexing Speedup", value: "40x Faster (4.91s)" },
    ],
    architectureHighlights: [
      "Hybrid Ranking: Blends dense vector similarity (55%) with lexical symbol/path relevance (45%).",
      "Resilient Vector Probing: Zero-timeout fallback for local and hosted Qdrant instances.",
      "SQLite WAL Concurrency: Zero database locking errors under multi-worker queries.",
    ],
    technologies: [
      "Next.js",
      "FastAPI",
      "Python",
      "Qdrant",
      "SQLite",
      "FastEmbed",
      "Groq",
      "TypeScript",
    ],
    image: "/assets/invox-upload.png", // Visual fallback / custom SVG card
    githubUrl: "https://github.com/SuJal-Ahar",
  },
  {
    id: "invox",
    title: "INVOX",
    tagline: "AI Invoice Pipeline & Document Extraction Engine",
    category: "AI Document Intelligence • Team Hackathon Project",
    featured: true,
    role: "Backend & Extraction Pipeline Engineer (Team Vibe Coders)",
    date: "November 2025",
    achievementBadge: "Overall Runner-Up • CodeUtsava 9.0",
    description:
      "An end-to-end AI document processing pipeline built during CodeUtsava 9.0 national hackathon, automatically ingesting invoices from PDFs, scans, and email attachments into structured, accounting-ready data.",
    keyContributions: [
      "Collaborated in a 4-person hackathon team to engineer OCR and NLP extraction workflows that transform messy invoices into structured JSON/CSV data.",
      "Implemented confidence scoring mechanisms (>98% on standard tax formats) with human-in-the-loop review thresholds.",
      "Developed a RAG-based query system using ChromaDB and PostgreSQL, intelligently routing user questions between SQL aggregation and semantic search.",
      "Dramatically reduced manual invoice processing time from minutes of manual data entry down to seconds per document.",
    ],
    metrics: [
      { label: "Hackathon Result", value: "National Runner-Up" },
      { label: "Accuracy Confidence", value: "Up to 98%+" },
      { label: "Processing Time", value: "Seconds / Document" },
      { label: "Query Routing", value: "Hybrid SQL + Vector" },
    ],
    technologies: [
      "Python",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "ChromaDB",
      "Tailwind CSS",
    ],
    image: "/assets/invox-upload.png",
    githubUrl: "https://github.com/SuJal-Ahar/Invox",
  },
  {
    id: "vault-armor",
    title: "VAULT Armor",
    tagline: "Cryptographically Isolated Multi-Vault Password Manager",
    category: "Security & Systems Engineering • Personal Project",
    featured: true,
    role: "Sole Creator & Security Architect",
    date: "March 2026",
    description:
      "A production-grade, zero-knowledge password management platform featuring client-side cryptographic isolation, per-vault passkeys, memory-hard key derivation, and authenticated encryption.",
    keyContributions: [
      "Built a full-stack multi-vault architecture in React, TypeScript, Express, and MongoDB where credentials are never stored in plaintext.",
      "Engineered cryptographic pipeline using AES-256-GCM with Argon2id memory-hard key derivation, unique per-vault salts, and per-entry 12-byte IVs.",
      "Secured 8 REST endpoints with JWT authentication middleware, per-user query scoping, and IDOR prevention tenant guards.",
      "Enforced strict input validation and schema consistency using shared Zod validation schemas across client and API boundaries.",
    ],
    metrics: [
      { label: "Encryption Cipher", value: "AES-256-GCM" },
      { label: "KDF Function", value: "Argon2id (Memory-Hard)" },
      { label: "Plaintext in DB", value: "0 (Zero Knowledge)" },
      { label: "Protected Endpoints", value: "8 REST Endpoints" },
    ],
    architectureHighlights: [
      "Per-Vault Passkey Isolation: Even with master account compromised, individual vault decrypts require separate passkeys.",
      "Integrity Verification: 16-byte authentication tags prevent ciphertext tampering.",
      "Tenant Ownership Guard: Atomic database queries eliminate cross-tenant unauthorized access.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Argon2id",
      "AES-256-GCM",
      "JWT",
      "Zod",
    ],
    image: "/assets/vault-architecture.png",
    githubUrl: "https://github.com/SuJal-Ahar/VAULT-Armor",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Grow Even",
    role: "Software Developer Intern",
    period: "May 2026 – July 2026",
    type: "Internship",
    location: "Remote / Hybrid",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
    contributions: [
      "Engineered a responsive, high-engagement investment poll platform using React and modern component design.",
      "Integrated RESTful backend services and endpoints built with Node.js and Express.js for real-time polling data.",
      "Architected intuitive user workflows for participating in financial and investment polls, submitting responses securely, and viewing instant aggregated analytics.",
      "Optimized clientside rendering performance and ensured seamless cross-browser responsiveness on mobile and desktop viewports.",
    ],
    current: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C / C++", level: "Advanced (DSA & CP)" },
      { name: "Python", level: "Advanced (AI & FastEmbed)" },
      { name: "SQL", level: "Advanced (PostgreSQL & SQLite)" },
      { name: "JavaScript (ES6+)", level: "Proficient" },
      { name: "TypeScript", level: "Proficient" },
    ],
  },
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React", level: "Component Architecture" },
      { name: "Next.js (App Router)", level: "SSR & Server Actions" },
      { name: "Tailwind CSS", level: "Design Systems" },
      { name: "HTML5 & CSS3", level: "Semantic & Responsive" },
      { name: "Framer Motion", level: "Editorial Animation" },
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", level: "Event-driven runtime" },
      { name: "Express.js", level: "REST API Services" },
      { name: "FastAPI", level: "High-performance Python" },
      { name: "RESTful Architecture", level: "Stateless APIs" },
      { name: "JWT & Security", level: "Argon2id & AES-256" },
    ],
  },
  {
    title: "Databases & Vector Stores",
    skills: [
      { name: "PostgreSQL", level: "Relational & Indexing" },
      { name: "MongoDB", level: "Document Storage" },
      { name: "SQLite", level: "WAL Mode Concurrency" },
      { name: "Qdrant", level: "Vector Search" },
      { name: "ChromaDB", level: "Document Embeddings" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", level: "Version Control & History" },
      { name: "GitHub", level: "CI/CD & Collaboration" },
      { name: "Postman", level: "API Testing & Mocking" },
      { name: "FastEmbed", level: "Local ONNX Embeddings" },
      { name: "Zod", level: "Runtime Validation" },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux / Unix", level: "CLI & Server Environments" },
      { name: "Windows", level: "Development Environment" },
    ],
  },
  {
    title: "Core CS Coursework",
    skills: [
      { name: "Data Structures & Algorithms", level: "Mastered" },
      { name: "Operating Systems", level: "Process & Concurrency" },
      { name: "Computer Networks", level: "TCP/IP & HTTP/S" },
      { name: "Database Management (DBMS)", level: "ACID & Transactions" },
      { name: "Object-Oriented Programming (OOP)", level: "Design Patterns" },
    ],
  },
  {
    title: "Technical Interests",
    skills: [
      { name: "High-Level System Design", level: "Distributed & Scalable" },
      { name: "Competitive Programming", level: "Algorithmic Problem Solving" },
      { name: "AI-Powered Applications", level: "RAG & LLM Agents" },
      { name: "Cryptographic Protocols", level: "Zero-Knowledge & Isolation" },
    ],
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    platform: "LeetCode",
    username: "SUJALAHAR",
    profileUrl: "https://leetcode.com/u/SUJALAHAR/",
    rating: "1890",
    maxRating: 1890,
    tier: "Knight",
    color: "#FFA116",
    accentBg: "rgba(255, 161, 22, 0.12)",
    iconName: "Code2",
    highlightText: "Knight Badge • Top Percentile Global Rating",
  },
  {
    platform: "Codeforces",
    username: "suzziahar",
    profileUrl: "https://codeforces.com/profile/suzziahar",
    rating: "1456",
    maxRating: 1456,
    tier: "Specialist",
    color: "#03A89E",
    accentBg: "rgba(3, 168, 158, 0.12)",
    iconName: "Binary",
    highlightText: "Specialist Rank • Algorithmic Rounds",
  },
  {
    platform: "CodeChef",
    username: "sujalahar",
    profileUrl: "https://www.codechef.com/users/sujalahar",
    rating: "1680",
    maxRating: 1680,
    tier: "3-Star",
    color: "#8B572A",
    accentBg: "rgba(139, 87, 42, 0.14)",
    iconName: "Terminal",
    highlightText: "3-Star Coder • Rated Div 2 Challenges",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Overall 1st Runner-Up — CodeUtsava 9.0",
    subtitle: "National-Level Hackathon at NIT Raipur",
    date: "November 6–7, 2025",
    organization: "Turing Club of Programmers, NIT Raipur & Smart India Hackathon",
    description:
      "Secured 1st Runner-Up position competing against teams nationwide with Team Vibe Coders. Engineered INVOX, an automated AI invoice ingestion and structured parsing pipeline, under rigorous 24-hour hackathon conditions.",
    badge: "1st Runner-Up (National)",
    image: "/assets/codeutsava-certificate.png",
  },
  {
    title: "1,400+ Algorithmic Problems Solved",
    subtitle: "Codeforces • LeetCode • CodeChef",
    date: "2023–Present",
    organization: "Global Competitive Programming Platforms",
    description:
      "Demonstrated persistent mathematical problem-solving and algorithmic fluency across dynamic programming, graph algorithms, segment trees, and system design, achieving LeetCode Knight (1890) and Codeforces Specialist (1456).",
    badge: "1,400+ Solved",
  },
];

export const LEADERSHIP: Achievement[] = [
  {
    title: "Head / Core Coordinator",
    subtitle: "Shaurya Sports Committee, NIT Raipur",
    date: "September 2025 – Present",
    organization: "National Institute of Technology Raipur",
    description:
      "Spearheading institute-wide sports tournaments, managing end-to-end logistics, tournament fixture algorithms, team registrations, budget allocations, and inter-college football championships.",
    badge: "Head Coordinator",
  },
  {
    title: "Executive Coordinator",
    subtitle: "Shaurya Sports Committee, NIT Raipur",
    date: "February 2025 – September 2025",
    organization: "National Institute of Technology Raipur",
    description:
      "Coordinated operations for Samar Fest, the annual official sports festival of NIT Raipur, managing team itineraries, campus grounds logistics, and ceremony fixtures.",
    badge: "Executive",
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "National Institute of Technology Raipur",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    period: "2023 – 2027",
    score: "7.66 / 10",
    scoreLabel: "Current CGPA",
    location: "Raipur, Chhattisgarh",
    highlights: [
      "Core IT Curriculum: Operating Systems, Computer Networks, DBMS, OOP, System Architecture",
      "Active participant in technical symposiums, hackathons, and algorithmic contests",
      "Core Coordinator in institute sports administration",
    ],
  },
  {
    institution: "The Radiant Way School, Raipur",
    degree: "Senior Secondary School (ISC - 12th)",
    period: "2020 – 2022",
    score: "89.4%",
    scoreLabel: "Class XII Board Aggregate",
    location: "Raipur, Chhattisgarh",
    highlights: ["Mathematics, Physics, Chemistry, Computer Science stream with distinction."],
  },
  {
    institution: "The Radiant Way School, Raipur",
    degree: "Higher Secondary School (ICSE - 10th)",
    period: "2018 – 2020",
    score: "86.2%",
    scoreLabel: "Class X Board Aggregate",
    location: "Raipur, Chhattisgarh",
    highlights: ["Excellence in Science and Mathematics foundations."],
  },
];
