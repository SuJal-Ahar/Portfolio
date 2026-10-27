"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CODEFORCES_GROWTH_DATA,
  LEETCODE_GROWTH_DATA,
  CODING_PROFILES,
  PERSONAL_INFO,
} from "@/data/portfolioData";
import { ContestRatingPoint } from "@/data/types";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Flame,
  TrendingUp,
  ExternalLink,
  Target,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const CompetitiveGrowthSection: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<"codeforces" | "leetcode">(
    "codeforces"
  );
  const [hoveredPoint, setHoveredPoint] = useState<ContestRatingPoint | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const data =
    activePlatform === "codeforces"
      ? CODEFORCES_GROWTH_DATA
      : LEETCODE_GROWTH_DATA;

  const history = data.ratingHistory;

  // Chart dimensions
  const width = 1000;
  const height = 340;
  const paddingX = 60;
  const paddingY = 40;

  const minRating =
    activePlatform === "codeforces"
      ? 300
      : 1500;
  const maxRating =
    activePlatform === "codeforces"
      ? 1600
      : 2000;

  const getX = (index: number) =>
    paddingX + (index / (history.length - 1)) * (width - 2 * paddingX);

  const getY = (rating: number) =>
    height -
    paddingY -
    ((rating - minRating) / (maxRating - minRating)) * (height - 2 * paddingY);

  // Build SVG path
  const points = history.map((pt, i) => `${getX(i)},${getY(pt.rating)}`);
  const pathD = `M ${points.join(" L ")}`;
  const areaD = `${pathD} L ${getX(history.length - 1)},${height - paddingY} L ${getX(
    0
  )},${height - paddingY} Z`;

  // Threshold lines
  const cfSpecialistY = activePlatform === "codeforces" ? getY(1400) : null;
  const cfPupilY = activePlatform === "codeforces" ? getY(1200) : null;
  const lcKnightY = activePlatform === "leetcode" ? getY(1850) : null;

  return (
    <section id="coding" aria-label="Competitive Programming Journey" className="scroll-mt-28 w-full">
      <SectionHeader
        number="02"
        tagline="Algorithmic Growth & Mastery"
        title="Competitive Programming"
        subtitle="A verified journey of continuous problem-solving across 1,400+ algorithmic challenges, achieving LeetCode Knight and Codeforces Specialist."
      />

      {/* Prominent High-Impact Metrics Ribbon (Full Width) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 w-full">
        {/* Total Problems */}
        <div className="p-6 rounded-3xl bg-[#1A1918] border border-[#2A2826] hover:border-[#FF713B]/50 transition-all shadow-xl group">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E9A95]">
              Aggregate Solved
            </span>
            <div className="p-2 rounded-xl bg-[#FF713B]/10 text-[#FF713B]">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-white group-hover:text-[#FF713B] transition-colors">
            {PERSONAL_INFO.totalProblemsSolved}
          </div>
          <div className="text-xs font-mono text-[#9E9A95] mt-1">
            Across LeetCode, CF &amp; CodeChef
          </div>
        </div>

        {/* LeetCode Knight */}
        <div className="p-6 rounded-3xl bg-[#1A1918] border border-[#2A2826] hover:border-[#FFA116]/50 transition-all shadow-xl group">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E9A95]">
              LeetCode
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-[#FFA116]/10 text-[#FFA116] border border-[#FFA116]/30">
              Knight
            </span>
          </div>
          <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-white">
            1890
          </div>
          <div className="text-xs font-mono text-[#9E9A95] mt-1">
            Top 5.02% Global • 482 Solved
          </div>
        </div>

        {/* Codeforces Specialist */}
        <div className="p-6 rounded-3xl bg-[#1A1918] border border-[#2A2826] hover:border-[#03A89E]/50 transition-all shadow-xl group">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E9A95]">
              Codeforces
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-[#03A89E]/10 text-[#03A89E] border border-[#03A89E]/30">
              Specialist
            </span>
          </div>
          <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-white">
            1456 / 1465
          </div>
          <div className="text-xs font-mono text-[#9E9A95] mt-1">
            31 Rated Rounds • 463 Solved
          </div>
        </div>

        {/* CodeChef 3-Star */}
        <div className="p-6 rounded-3xl bg-[#1A1918] border border-[#2A2826] hover:border-[#FF713B]/50 transition-all shadow-xl group">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#9E9A95]">
              CodeChef
            </span>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-full bg-amber-900/30 text-amber-400 border border-amber-800/40">
              3-Star
            </span>
          </div>
          <div className="font-editorial text-3xl sm:text-4xl font-extrabold text-white">
            1680
          </div>
          <div className="text-xs font-mono text-[#9E9A95] mt-1">
            Rated Div 2 • 455+ Solved
          </div>
        </div>
      </div>

      {/* Large Rating Progression Visualization Card (Focal Point) */}
      <div className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden mb-10 w-full">
        {/* Top Controls: Platform Switcher & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#2A2826]">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#262422] text-[#FF713B]">
                <TrendingUp className="w-5 h-5" />
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
                Historical Rating Progression
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9E9A95] font-mono mt-1">
              Official contest ratings over time • Hover any point to inspect performance
            </p>
          </div>

          {/* Platform Tab Buttons */}
          <div className="flex items-center gap-2 bg-[#121110] p-1.5 rounded-full border border-[#2A2826]">
            <button
              type="button"
              onClick={() => {
                setActivePlatform("codeforces");
                setHoveredPoint(null);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer",
                activePlatform === "codeforces"
                  ? "bg-[#03A89E] text-white font-bold shadow-md"
                  : "text-[#9E9A95] hover:text-white"
              )}
            >
              Codeforces ({CODEFORCES_GROWTH_DATA.ratingHistory.length} Rounds)
            </button>
            <button
              type="button"
              onClick={() => {
                setActivePlatform("leetcode");
                setHoveredPoint(null);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer",
                activePlatform === "leetcode"
                  ? "bg-[#FFA116] text-zinc-950 font-bold shadow-md"
                  : "text-[#9E9A95] hover:text-white"
              )}
            >
              LeetCode ({LEETCODE_GROWTH_DATA.ratingHistory.length} Contests)
            </button>
          </div>
        </div>

        {/* Hovered Point Info Callout Bar */}
        <div className="min-h-[50px] mb-4 flex items-center justify-between p-3.5 rounded-2xl bg-[#141312] border border-[#262422]">
          {hoveredPoint ? (
            <div className="flex flex-wrap items-center justify-between w-full gap-2 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF713B] animate-ping" />
                <span className="font-bold text-white">{hoveredPoint.contestName}</span>
                <span className="text-[#9E9A95]">({hoveredPoint.date})</span>
              </div>
              <div className="flex items-center gap-4">
                {hoveredPoint.rank && (
                  <span className="text-[#9E9A95]">
                    Rank: <strong className="text-white">#{hoveredPoint.rank}</strong>
                  </span>
                )}
                <span className="text-[#9E9A95]">
                  Rating: <strong className="text-[#FF713B] text-sm">{hoveredPoint.rating}</strong>
                </span>
              </div>
            </div>
          ) : (
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#FF713B]" />
              <span>
                Showing {history.length} verified contests from {history[0].date} to{" "}
                {history[history.length - 1].date} • Hover any marker for round details
              </span>
            </div>
          )}
        </div>

        {/* Custom Responsive SVG Chart */}
        <div className="relative w-full overflow-x-auto">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto min-w-[700px] select-none"
            aria-label={`${data.platform} rating progress chart`}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF713B" stopOpacity="0.35" />
                <stop offset="85%" stopColor="#FF713B" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Subtle Grid Lines */}
            <line
              x1={paddingX}
              y1={height - paddingY}
              x2={width - paddingX}
              y2={height - paddingY}
              stroke="#2A2826"
              strokeWidth="1.5"
            />
            <line
              x1={paddingX}
              y1={paddingY}
              x2={width - paddingX}
              y2={paddingY}
              stroke="#2A2826"
              strokeWidth="1"
              strokeDasharray="4 4"
            />

            {/* Threshold line: Codeforces Specialist (1400) */}
            {cfSpecialistY && (
              <g>
                <line
                  x1={paddingX}
                  y1={cfSpecialistY}
                  x2={width - paddingX}
                  y2={cfSpecialistY}
                  stroke="#03A89E"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  opacity="0.6"
                />
                <text
                  x={width - paddingX + 8}
                  y={cfSpecialistY + 4}
                  fill="#03A89E"
                  fontSize="11"
                  fontFamily="monospace"
                  textAnchor="start"
                >
                  Specialist (1400)
                </text>
              </g>
            )}

            {/* Threshold line: Codeforces Pupil (1200) */}
            {cfPupilY && (
              <g>
                <line
                  x1={paddingX}
                  y1={cfPupilY}
                  x2={width - paddingX}
                  y2={cfPupilY}
                  stroke="#78AB46"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.4"
                />
                <text
                  x={width - paddingX + 8}
                  y={cfPupilY + 4}
                  fill="#78AB46"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="start"
                >
                  Pupil (1200)
                </text>
              </g>
            )}

            {/* Threshold line: LeetCode Knight (1850) */}
            {lcKnightY && (
              <g>
                <line
                  x1={paddingX}
                  y1={lcKnightY}
                  x2={width - paddingX}
                  y2={lcKnightY}
                  stroke="#FFA116"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  opacity="0.7"
                />
                <text
                  x={width - paddingX + 8}
                  y={lcKnightY + 4}
                  fill="#FFA116"
                  fontSize="11"
                  fontFamily="monospace"
                  textAnchor="start"
                >
                  Knight (1850+)
                </text>
              </g>
            )}

            {/* Area Fill */}
            <polygon points={areaD.replace(/[MLZ]/g, "")} fill="url(#chartGradient)" />

            {/* Main Animated Trend Line */}
            <motion.path
              d={pathD}
              fill="none"
              stroke="#FF713B"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />

            {/* Data Points */}
            {history.map((pt, i) => {
              const cx = getX(i);
              const cy = getY(pt.rating);
              const isHovered = hoveredPoint?.contestName === pt.contestName;
              const isPeak = pt.rating === data.maxRating;

              return (
                <g key={i} className="cursor-pointer">
                  {/* Invisible hit area for easier hover */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="14"
                    fill="transparent"
                    onMouseEnter={() => setHoveredPoint(pt)}
                  />

                  {/* Outer glow ring for peak */}
                  {isPeak && (
                    <circle
                      cx={cx}
                      cy={cy}
                      r="9"
                      fill="none"
                      stroke="#FF713B"
                      strokeWidth="2"
                      opacity="0.6"
                      className="animate-ping"
                    />
                  )}

                  {/* Visible point */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isHovered ? 7 : isPeak ? 6 : 4}
                    fill={isHovered ? "#FFFFFF" : isPeak ? "#FF713B" : "#1A1918"}
                    stroke={isHovered ? "#FF713B" : isPeak ? "#FFFFFF" : "#FF713B"}
                    strokeWidth={isHovered ? 3 : 2}
                    className="transition-all duration-150"
                  />
                </g>
              );
            })}

            {/* X-Axis Month Markers */}
            {history.map((pt, i) => {
              // Show label on first, middle, last
              if (
                i === 0 ||
                i === history.length - 1 ||
                i === Math.floor(history.length / 2)
              ) {
                return (
                  <text
                    key={i}
                    x={getX(i)}
                    y={height - 12}
                    fill="#9E9A95"
                    fontSize="11"
                    fontFamily="monospace"
                    textAnchor={i === 0 ? "start" : i === history.length - 1 ? "end" : "middle"}
                  >
                    {pt.date}
                  </text>
                );
              }
              return null;
            })}
          </svg>
        </div>

        {/* Milestone Footnote */}
        <div className="mt-6 pt-4 border-t border-[#2A2826] flex flex-wrap items-center justify-between text-xs font-mono text-[#9E9A95] gap-2">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              Peak Achieved: <strong className="text-white">{data.maxRating} ({data.tier})</strong>
            </span>
          </div>
          <span>Continuous algorithmic advancement from NIT Raipur</span>
        </div>
      </div>

      {/* Clickable Profile Cards Grid (Full Width) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {CODING_PROFILES.map((profile) => (
          <a
            key={profile.platform}
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-[#1A1918] border border-[#2A2826] p-6 sm:p-7 hover:border-[#FF713B]/60 hover:bg-[#1E1D1B] transition-all duration-300 shadow-xl group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: profile.color }}
                  >
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-lg font-bold uppercase text-white">
                      {profile.platform}
                    </h4>
                    <span className="text-[11px] font-mono text-[#9E9A95]">
                      @{profile.username}
                    </span>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-[#9E9A95] group-hover:text-[#FF713B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Rating Showcase */}
              <div className="my-4 p-4 rounded-2xl bg-[#141312] border border-[#242220]">
                <div className="text-[11px] font-mono text-[#9E9A95] mb-1">
                  Peak Rating / Designation
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-editorial text-3xl font-extrabold text-white">
                    {profile.rating}
                  </span>
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    style={{
                      color: profile.color,
                      backgroundColor: profile.accentBg,
                    }}
                  >
                    {profile.tier}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#9E9A95] leading-relaxed mb-4">
                {profile.highlightText}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2A2826] flex items-center justify-between text-xs font-mono text-[#9E9A95] group-hover:text-white transition-colors">
              <span>Verified Account</span>
              <span className="text-[#FF713B] group-hover:underline flex items-center gap-1">
                <span>View Profile</span>
                <span>&rarr;</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
