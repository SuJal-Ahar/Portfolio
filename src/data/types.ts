export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  featured: boolean;
  role: string;
  date: string;
  description: string;
  keyContributions?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  architectureHighlights?: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  achievementBadge?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  technologies: string[];
  contributions: string[];
  current?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface CodingProfile {
  platform: string;
  username: string;
  profileUrl: string;
  rating: string;
  maxRating: number;
  tier: string;
  color: string;
  accentBg: string;
  iconName: string;
  highlightText: string;
  solvedCount?: number;
  contestCount?: number;
}

export interface ContestRatingPoint {
  contestName: string;
  shortName: string;
  date: string;
  rating: number;
  rank?: number;
  delta?: number;
}

export interface PlatformGrowthData {
  platform: string;
  currentRating: number;
  maxRating: number;
  tier: string;
  tierColor: string;
  contestsCount: number;
  solvedCount: number;
  ratingHistory: ContestRatingPoint[];
}

export interface Achievement {
  title: string;
  subtitle: string;
  date: string;
  organization: string;
  description: string;
  badge?: string;
  image?: string;
  url?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  highlights?: string[];
}

export interface NavItem {
  label: string;
  href: string;
  number: string;
}
