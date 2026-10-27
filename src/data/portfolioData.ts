import {
  Project,
  Experience,
  SkillCategory,
  CodingProfile,
  Achievement,
  Education,
  NavItem,
  PlatformGrowthData,
} from "./types";

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
  portraitUrl: "/assets/sujal-profile.png",
  passportPhotoUrl: "/assets/sujal-passport.jpg",
  totalProblemsSolved: "1,400+",
  college: "National Institute of Technology Raipur",
  degree: "B.Tech in Information Technology",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Hero", href: "#hero", number: "00" },
  { label: "Projects", href: "#projects", number: "01" },
  { label: "CP Growth", href: "#coding", number: "02" },
  { label: "Experience", href: "#experience", number: "03" },
  { label: "Skills", href: "#skills", number: "04" },
  { label: "Achievements", href: "#achievements", number: "05" },
  { label: "Education", href: "#education", number: "06" },
  { label: "Contact", href: "#contact", number: "07" },
];

export const PROJECTS: Project[] = [
  {
    id: "systemlens",
    title: "SystemLens",
    tagline: "AI Codebase Intelligence & Navigation Engine",
    category: "AI & Systems Tooling",
    featured: true,
    role: "Lead Developer",
    date: "2025–2026",
    description:
      "AI-powered repository intelligence platform for natural-language codebase exploration, execution-path tracking, and commit-level Git history intelligence.",
    technologies: ["Next.js", "FastAPI", "Python", "Qdrant", "FastEmbed", "Groq"],
    image: "/assets/invox-dashboard.png",
    githubUrl: "https://github.com/SuJal-Ahar",
  },
  {
    id: "invox",
    title: "INVOX",
    tagline: "AI Invoice Pipeline & Document Extraction Engine",
    category: "AI Document Intelligence • Team Hackathon",
    featured: true,
    role: "Backend & Extraction Pipeline Engineer (Team Vibe Coders)",
    date: "November 2025",
    achievementBadge: "Overall Runner-Up • CodeUtsava 9.0",
    description:
      "Automated invoice ingestion and OCR/NLP extraction pipeline with confidence scoring and hybrid RAG querying — Overall Runner-Up at CodeUtsava 9.0.",
    technologies: ["Python", "Next.js", "TypeScript", "PostgreSQL", "ChromaDB"],
    image: "/assets/invox-upload.png",
    githubUrl: "https://github.com/SuJal-Ahar/Invox",
  },
  {
    id: "vault-armor",
    title: "VAULT Armor",
    tagline: "Cryptographically Isolated Password Manager",
    category: "Security & Systems Engineering",
    featured: true,
    role: "Sole Creator & Architect",
    date: "March 2026",
    description:
      "Cryptographically isolated multi-vault password manager featuring AES-256-GCM encryption, Argon2id key derivation, and JWT access control.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Argon2id"],
    image: "/assets/vault-architecture.png",
    githubUrl: "https://github.com/SuJal-Ahar/VAULT-Armor",
  },
];

export const CODEFORCES_GROWTH_DATA: PlatformGrowthData = {
  platform: "Codeforces",
  currentRating: 1465,
  maxRating: 1465,
  tier: "Specialist",
  tierColor: "#03A89E",
  contestsCount: 31,
  solvedCount: 463,
  ratingHistory: [
    { contestName: "Codeforces Round 956 (Div. 2)", shortName: "CF 956 (Div. 2)", date: "Jul 2024", rating: 376, rank: 14659, delta: 376 },
    { contestName: "Codeforces Round 957 (Div. 3)", shortName: "CF 957 (Div. 3)", date: "Jul 2024", rating: 620, rank: 19174, delta: 244 },
    { contestName: "Codeforces Round 959 (Div. 1 + Div. 2)", shortName: "CF 959", date: "Jul 2024", rating: 796, rank: 11419, delta: 176 },
    { contestName: "Codeforces Round 961 (Div. 2)", shortName: "CF 961 (Div. 2)", date: "Jul 2024", rating: 856, rank: 13700, delta: 60 },
    { contestName: "Educational Codeforces Round 168 (Div. 2)", shortName: "Edu 168", date: "Jul 2024", rating: 898, rank: 17037, delta: 42 },
    { contestName: "Codeforces Round 964 (Div. 4)", shortName: "CF 964 (Div. 4)", date: "Aug 2024", rating: 881, rank: 23484, delta: -17 },
    { contestName: "Codeforces Round 966 (Div. 3)", shortName: "CF 966 (Div. 3)", date: "Aug 2024", rating: 777, rank: 24884, delta: -104 },
    { contestName: "Codeforces Round 980 (Div. 2)", shortName: "CF 980 (Div. 2)", date: "Oct 2024", rating: 753, rank: 11039, delta: -24 },
    { contestName: "Codeforces Global Round 27", shortName: "CF Global 27", date: "Oct 2024", rating: 854, rank: 7269, delta: 101 },
    { contestName: "Codeforces Round 990 (Div. 2)", shortName: "CF 990 (Div. 2)", date: "Dec 2024", rating: 884, rank: 4675, delta: 30 },
    { contestName: "Codeforces Global Round 28", shortName: "CF Global 28", date: "Dec 2024", rating: 900, rank: 10487, delta: 16 },
    { contestName: "Codeforces Round 994 (Div. 2)", shortName: "CF 994 (Div. 2)", date: "Dec 2024", rating: 936, rank: 9728, delta: 36 },
    { contestName: "Educational Codeforces Round 173 (Div. 2)", shortName: "Edu 173", date: "Dec 2024", rating: 1017, rank: 6817, delta: 81 },
    { contestName: "Codeforces Round 1002 (Div. 2)", shortName: "CF 1002 (Div. 2)", date: "Feb 2025", rating: 1017, rank: 11255, delta: 0 },
    { contestName: "Educational Codeforces Round 175 (Div. 2)", shortName: "Edu 175", date: "Feb 2025", rating: 985, rank: 12142, delta: -32 },
    { contestName: "Codeforces Round 1008 (Div. 2)", shortName: "CF 1008 (Div. 2)", date: "Mar 2025", rating: 1067, rank: 5875, delta: 82 },
    { contestName: "Codeforces Round 1009 (Div. 3)", shortName: "CF 1009 (Div. 3)", date: "Mar 2025", rating: 1123, rank: 6131, delta: 56 },
    { contestName: "Educational Codeforces Round 176 (Div. 2)", shortName: "Edu 176", date: "Mar 2025", rating: 1159, rank: 6758, delta: 36 },
    { contestName: "Codeforces Round 1013 (Div. 3)", shortName: "CF 1013 (Div. 3)", date: "Mar 2025", rating: 1194, rank: 5685, delta: 35 },
    { contestName: "Codeforces Round 1016 (Div. 3)", shortName: "CF 1016 (Div. 3)", date: "Apr 2025", rating: 1231, rank: 4775, delta: 37 },
    { contestName: "Codeforces Round 1078 (Div. 2)", shortName: "CF 1078 (Div. 2)", date: "Feb 2026", rating: 1255, rank: 4838, delta: 24 },
    { contestName: "Codeforces Round 1079 (Div. 2)", shortName: "CF 1079 (Div. 2)", date: "Feb 2026", rating: 1244, rank: 6735, delta: -11 },
    { contestName: "Codeforces Round 1086 (Div. 2)", shortName: "CF 1086 (Div. 2)", date: "Mar 2026", rating: 1267, rank: 4880, delta: 23 },
    { contestName: "Educational Codeforces Round 188 (Div. 2)", shortName: "Edu 188", date: "Mar 2026", rating: 1293, rank: 4191, delta: 26 },
    { contestName: "Codeforces Round 1087 (Div. 2)", shortName: "CF 1087 (Div. 2)", date: "Mar 2026", rating: 1295, rank: 5354, delta: 2 },
    { contestName: "Codeforces Round 1091 (Div. 2)", shortName: "CF 1091 (Div. 2)", date: "Apr 2026", rating: 1298, rank: 5834, delta: 3 },
    { contestName: "Codeforces Round 1093 (Div. 2)", shortName: "CF 1093 (Div. 2)", date: "Apr 2026", rating: 1321, rank: 3563, delta: 23 },
    { contestName: "Codeforces Round 1099 (Div. 2)", shortName: "CF 1099 (Div. 2)", date: "May 2026", rating: 1265, rank: 8841, delta: -56 },
    { contestName: "Codeforces Round 1101 (Div. 2)", shortName: "CF 1101 (Div. 2)", date: "May 2026", rating: 1306, rank: 4180, delta: 41 },
    { contestName: "Codeforces Round 1102 (Div. 2)", shortName: "CF 1102 (Div. 2)", date: "Jun 2026", rating: 1403, rank: 1780, delta: 97 },
    { contestName: "Educational Codeforces Round 191 (Div. 2)", shortName: "Edu 191", date: "Jun 2026", rating: 1465, rank: 1863, delta: 62 },
  ],
};

export const LEETCODE_GROWTH_DATA: PlatformGrowthData = {
  platform: "LeetCode",
  currentRating: 1890,
  maxRating: 1890,
  tier: "Knight",
  tierColor: "#FFA116",
  contestsCount: 17,
  solvedCount: 482,
  ratingHistory: [
    { contestName: "Biweekly Contest 137", shortName: "BW 137", date: "Aug 2024", rating: 1551, rank: 9179 },
    { contestName: "Biweekly Contest 153", shortName: "BW 153", date: "Mar 2025", rating: 1574, rank: 6953 },
    { contestName: "Weekly Contest 443", shortName: "Weekly 443", date: "Mar 2025", rating: 1581, rank: 8365 },
    { contestName: "Weekly Contest 460", shortName: "Weekly 460", date: "Jul 2025", rating: 1612, rank: 5448 },
    { contestName: "Biweekly Contest 164", shortName: "BW 164", date: "Aug 2025", rating: 1610, rank: 10140 },
    { contestName: "Biweekly Contest 167", shortName: "BW 167", date: "Oct 2025", rating: 1712, rank: 532 },
    { contestName: "Biweekly Contest 174", shortName: "BW 174", date: "Jan 2026", rating: 1689, rank: 13031 },
    { contestName: "Biweekly Contest 176", shortName: "BW 176", date: "Feb 2026", rating: 1775, rank: 704 },
    { contestName: "Weekly Contest 489", shortName: "Weekly 489", date: "Feb 2026", rating: 1757, rank: 12745 },
    { contestName: "Weekly Contest 493", shortName: "Weekly 493", date: "Mar 2026", rating: 1721, rank: 22237 },
    { contestName: "Weekly Contest 494", shortName: "Weekly 494", date: "Mar 2026", rating: 1728, rank: 7780 },
    { contestName: "Biweekly Contest 179", shortName: "BW 179", date: "Mar 2026", rating: 1723, rank: 9211 },
    { contestName: "Weekly Contest 495", shortName: "Weekly 495", date: "Mar 2026", rating: 1753, rank: 3889 },
    { contestName: "Biweekly Contest 180", shortName: "BW 180", date: "Apr 2026", rating: 1733, rank: 12899 },
    { contestName: "Weekly Contest 503", shortName: "Weekly 503", date: "May 2026", rating: 1747, rank: 4764 },
    { contestName: "Weekly Contest 504", shortName: "Weekly 504", date: "May 2026", rating: 1833, rank: 432 },
    { contestName: "Weekly Contest 505", shortName: "Weekly 505", date: "Jun 2026", rating: 1890, rank: 858 },
  ],
};

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
    highlightText: "Knight Badge • Top 5.02% Global Percentile • 482 Solved",
    solvedCount: 482,
    contestCount: 17,
  },
  {
    platform: "Codeforces",
    username: "suzziahar",
    profileUrl: "https://codeforces.com/profile/suzziahar",
    rating: "1456",
    maxRating: 1465,
    tier: "Specialist",
    color: "#03A89E",
    accentBg: "rgba(3, 168, 158, 0.12)",
    iconName: "Binary",
    highlightText: "Specialist Rank • 31 Rated Rounds • 463 Solved",
    solvedCount: 463,
    contestCount: 31,
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
    highlightText: "3-Star Coder • Rated Division 2 • 455+ Solved",
    solvedCount: 455,
    contestCount: 14,
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
      "Engineered a responsive investment poll platform using React and modern component design.",
      "Integrated RESTful backend services and endpoints built with Node.js and Express.js for real-time polling data.",
      "Developed intuitive workflows for participating in investment polls, submitting responses securely, and viewing instant aggregated analytics.",
    ],
    current: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C / C++", level: "DSA & CP" },
      { name: "Python", level: "AI & FastEmbed" },
      { name: "SQL", level: "Postgres & SQLite" },
      { name: "JavaScript", level: "ES6+" },
      { name: "TypeScript", level: "Strict Typing" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Components" },
      { name: "Next.js", level: "App Router" },
      { name: "Tailwind CSS", level: "Design Tokens" },
      { name: "HTML5 & CSS3", level: "Responsive" },
      { name: "Motion", level: "Transitions" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "REST APIs" },
      { name: "FastAPI", level: "Async Python" },
      { name: "RESTful APIs", level: "Stateless" },
      { name: "JWT & Argon2id", level: "Security" },
    ],
  },
  {
    title: "Databases & Vector Stores",
    skills: [
      { name: "PostgreSQL", level: "Relational" },
      { name: "MongoDB", level: "Document" },
      { name: "SQLite", level: "WAL Mode" },
      { name: "Qdrant", level: "Dense Vectors" },
      { name: "ChromaDB", level: "Embeddings" },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "CI/CD" },
      { name: "Postman", level: "API Testing" },
      { name: "FastEmbed", level: "Local ONNX" },
      { name: "Zod", level: "Validation" },
    ],
  },
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux / Unix", level: "CLI & Servers" },
      { name: "Windows", level: "Environment" },
    ],
  },
  {
    title: "Core CS Coursework",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "Operating Systems", level: "Concurrency" },
      { name: "Computer Networks", level: "Protocols" },
      { name: "DBMS", level: "ACID & Schema" },
      { name: "OOP", level: "Design Patterns" },
    ],
  },
  {
    title: "Technical Interests",
    skills: [
      { name: "System Design", level: "Architecture" },
      { name: "Competitive Programming", level: "Algorithms" },
      { name: "AI Platforms", level: "RAG & Search" },
      { name: "Cryptography", level: "Zero-Knowledge" },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Overall 1st Runner-Up — CodeUtsava 9.0",
    subtitle: "National-Level Hackathon at NIT Raipur",
    date: "November 6–7, 2025",
    organization: "Turing Club of Programmers, NIT Raipur & Smart India Hackathon",
    description:
      "Secured 1st Runner-Up position nationwide with Team Vibe Coders. Engineered INVOX, an automated AI invoice ingestion and structured parsing pipeline, under intense 24-hour hackathon conditions.",
    badge: "1st Runner-Up (National)",
    image: "/assets/codeutsava-certificate.png",
  },
  {
    title: "1,400+ Algorithmic Problems Solved",
    subtitle: "Codeforces • LeetCode • CodeChef",
    date: "2023–Present",
    organization: "Competitive Programming Platforms",
    description:
      "Consistent algorithmic practice across dynamic programming, graphs, trees, and math, achieving LeetCode Knight (1890) and Codeforces Specialist (1456 / 1465).",
    badge: "1,400+ Solved",
  },
];

export const LEADERSHIP: Achievement[] = [
  {
    title: "Head Coordinator",
    subtitle: "Shaurya Sports Committee, NIT Raipur",
    date: "September 2025 – Present",
    organization: "National Institute of Technology Raipur",
    description:
      "Leading institute-wide sports tournaments, managing registrations, match fixtures, logistics, and inter-college championships.",
    badge: "Head Coordinator",
  },
  {
    title: "Executive Coordinator",
    subtitle: "Shaurya Sports Committee, NIT Raipur",
    date: "February 2025 – September 2025",
    organization: "National Institute of Technology Raipur",
    description:
      "Assisted in the operations and management of Samar Fest, the annual official sports festival of NIT Raipur.",
    badge: "Executive",
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: "National Institute of Technology Raipur",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    period: "2023 – 2027",
    location: "Raipur, Chhattisgarh",
    highlights: [
      "Core coursework in OS, Networks, DBMS, OOP, and Distributed Systems.",
      "Active participant in technical symposiums, hackathons, and CP rounds.",
    ],
  },
];
