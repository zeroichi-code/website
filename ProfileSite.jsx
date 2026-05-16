import React, { useEffect, useState } from "react";
import {
  Smartphone,
  Calculator,
  FileText,
  Github,
  Twitter,
  ExternalLink,
  Cpu,
  Wifi,
  Battery,
  Signal,
  Zap,
  Terminal,
  ChevronRight,
  Activity,
} from "lucide-react";

// ===== 設定（差し替えるだけでOK） =====
const PROFILE = {
  handle: "zeroichi-code",
  tagline: "// building tiny tools, one bit at a time",
  androidApp: {
    name: "Untitled Android App",
    desc: "Google Play で近日リリース予定",
    status: "COMING SOON",
    href: "#",
  },
  tools: [
    {
      name: "楽天利益計算ツール",
      desc: "ROOM運用者向け / 利益を即計算",
      icon: Calculator,
      href: "#",
      tag: "WEB",
    },
    {
      name: "ツール 02",
      desc: "近日公開",
      icon: Cpu,
      href: "#",
      tag: "DEV",
    },
    {
      name: "ツール 03",
      desc: "近日公開",
      icon: Terminal,
      href: "#",
      tag: "CLI",
    },
    {
      name: "ツール 04",
      desc: "近日公開",
      icon: Zap,
      href: "#",
      tag: "EXP",
    },
  ],
  notes: [
    { id: "0x01", title: "noteを始めました", date: "2026.05.01" },
    { id: "0x02", title: "楽天ROOMツールの作り方", date: "2026.05.05" },
    { id: "0x03", title: "個人開発、最初の一歩", date: "2026.05.08" },
  ],
  links: {
    x: "https://x.com/",
    github: "https://github.com/",
    note: "https://note.com/",
  },
};

// ===== 小物コンポーネント =====
const DotMatrix = ({ text }) => (
  <div className="flex items-center gap-[3px] font-mono text-[10px] tracking-widest text-cyan-300/90">
    {text.split("").map((c, i) => (
      <span
        key={i}
        className="px-[2px] py-[1px] rounded-[2px] bg-cyan-400/10 border border-cyan-400/20 shadow-[0_0_6px_rgba(34,211,238,0.4)]"
      >
        {c}
      </span>
    ))}
  </div>
);

const NeonBadge = ({ children, color = "fuchsia" }) => {
  const colorMap = {
    fuchsia:
      "text-fuchsia-300 border-fuchsia-400/60 shadow-[0_0_12px_rgba(232,121,249,0.7)] bg-fuchsia-500/10",
    cyan: "text-cyan-300 border-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.6)] bg-cyan-500/10",
    lime: "text-lime-300 border-lime-400/60 shadow-[0_0_12px_rgba(163,230,53,0.6)] bg-lime-500/10",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-[2px] rounded-full border text-[10px] font-mono tracking-widest animate-pulse ${colorMap[color]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
};

const StatusBar = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm}`);
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center justify-between px-4 py-1.5 text-[11px] font-mono text-cyan-100/80 border-b border-white/5">
      <span>{time}</span>
      <div className="flex items-center gap-2">
        <Signal className="w-3 h-3" />
        <Wifi className="w-3 h-3" />
        <Battery className="w-3.5 h-3.5" />
      </div>
    </div>
  );
};

const GlassCard = ({ children, className = "", glow = "cyan" }) => {
  const glowMap = {
    cyan: "hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:border-cyan-400/40",
    fuchsia:
      "hover:shadow-[0_0_30px_rgba(232,121,249,0.25)] hover:border-fuchsia-400/40",
    lime: "hover:shadow-[0_0_30px_rgba(163,230,53,0.25)] hover:border-lime-400/40",
  };
  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 ${glowMap[glow]} ${className}`}
    >
      {children}
    </div>
  );
};

// ===== メイン =====
export default function ProfileSite() {
  return (
    <div className="min-h-screen w-full bg-[#03050b] text-slate-100 font-sans relative overflow-hidden">
      {/* 背景グリッド */}
      <div
        className="absolute inset-0 opacity-[0.10] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,180,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(120,180,255,0.14) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* グラデーションのグロー（控えめに） */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-fuchsia-600/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[460px] h-[460px] rounded-full bg-cyan-500/[0.06] blur-3xl pointer-events-none" />

      {/* デバイスフレーム */}
      <div className="relative max-w-[420px] mx-auto px-3 py-6 sm:py-10">
        <div className="rounded-[36px] border border-white/10 bg-black/80 backdrop-blur-md shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* ノッチ風 */}
          <div className="flex justify-center pt-2">
            <div className="h-1.5 w-20 rounded-full bg-white/10" />
          </div>

          <StatusBar />

          <div className="p-4 space-y-4">
            {/* ヘッダー */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-300/70 text-[10px] font-mono tracking-widest mb-1">
                  <Activity className="w-3 h-3" />
                  <span>SYS::ONLINE</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight">
                  <span className="text-white">zeroichi</span>
                  <span className="text-cyan-300">-code</span>
                </h1>
                <p className="text-[11px] font-mono text-slate-400 mt-1">
                  {PROFILE.tagline}
                </p>
              </div>
              <DotMatrix text="0101" />
            </div>

            {/* メインディスプレイ: Android App */}
            <GlassCard glow="fuchsia" className="overflow-hidden">
              <a
                href={PROFILE.androidApp.href}
                className="block p-5 group"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-fuchsia-300/80 tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
                    MAIN DISPLAY / ANDROID
                  </div>
                  <NeonBadge color="fuchsia">
                    {PROFILE.androidApp.status}
                  </NeonBadge>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-500/30 border border-white/10 flex items-center justify-center shadow-[0_0_24px_rgba(232,121,249,0.35)] group-hover:shadow-[0_0_40px_rgba(232,121,249,0.55)] transition-shadow">
                      <Smartphone className="w-7 h-7 text-fuchsia-200" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-fuchsia-400 animate-ping" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-semibold truncate">
                      {PROFILE.androidApp.name}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {PROFILE.androidApp.desc}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-fuchsia-300 group-hover:translate-x-0.5 transition-all" />
                </div>

                {/* 走査線 */}
                <div className="mt-4 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-[slide_2.4s_linear_infinite]" />
                </div>
              </a>
            </GlassCard>

            {/* Tool Grid */}
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="text-[10px] font-mono text-cyan-300/70 tracking-widest">
                  TOOLS / SUB-PANEL
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  {PROFILE.tools.length} units
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {PROFILE.tools.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <a
                      key={i}
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group"
                    >
                      <GlassCard glow="cyan" className="p-3 h-full">
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_16px_rgba(34,211,238,0.5)] transition-all">
                            <Icon className="w-4 h-4 text-cyan-200" />
                          </div>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">
                            {t.tag}
                          </span>
                        </div>
                        <div className="text-xs font-semibold leading-tight">
                          {t.name}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-1 leading-snug">
                          {t.desc}
                        </div>
                      </GlassCard>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Note Log */}
            <div>
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="text-[10px] font-mono text-lime-300/80 tracking-widest flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" />
                  NOTE.LOG
                </div>
                <div className="text-[10px] font-mono text-slate-500 animate-pulse">
                  ● live
                </div>
              </div>
              <GlassCard glow="lime" className="p-2 font-mono">
                <div className="divide-y divide-white/5">
                  {PROFILE.notes.map((n) => (
                    <a
                      key={n.id}
                      href="#"
                      className="flex items-center gap-2 px-2 py-2 text-[11px] hover:bg-lime-400/5 rounded transition-colors group"
                    >
                      <span className="text-lime-300/80">›</span>
                      <span className="text-slate-500 shrink-0">{n.id}</span>
                      <span className="text-slate-500 shrink-0">{n.date}</span>
                      <span className="text-slate-200 truncate group-hover:text-lime-200">
                        {n.title}
                      </span>
                      <ExternalLink className="w-3 h-3 text-slate-600 ml-auto group-hover:text-lime-300 shrink-0" />
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* SNS */}
            <div>
              <div className="text-[10px] font-mono text-slate-400 tracking-widest mb-2 px-1">
                LINKS
              </div>
              <div className="grid grid-cols-3 gap-2">
                <SnsButton
                  href={PROFILE.links.x}
                  icon={Twitter}
                  label="X"
                  glow="cyan"
                />
                <SnsButton
                  href={PROFILE.links.github}
                  icon={Github}
                  label="GitHub"
                  glow="fuchsia"
                />
                <SnsButton
                  href={PROFILE.links.note}
                  icon={FileText}
                  label="note"
                  glow="lime"
                />
              </div>
            </div>

            {/* フッター */}
            <div className="pt-2 pb-1 text-center text-[10px] font-mono text-slate-600">
              © {new Date().getFullYear()} zeroichi-code · v0.1.0
            </div>
          </div>
        </div>
      </div>

      {/* キーフレーム */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}

function SnsButton({ href, icon: Icon, label, glow }) {
  const glowMap = {
    cyan: "hover:shadow-[0_0_18px_rgba(34,211,238,0.5)] hover:border-cyan-400/50 hover:text-cyan-200",
    fuchsia:
      "hover:shadow-[0_0_18px_rgba(232,121,249,0.5)] hover:border-fuchsia-400/50 hover:text-fuchsia-200",
    lime: "hover:shadow-[0_0_18px_rgba(163,230,53,0.5)] hover:border-lime-400/50 hover:text-lime-200",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-xl text-slate-300 transition-all duration-300 hover:-translate-y-0.5 ${glowMap[glow]}`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-[10px] font-mono tracking-widest">{label}</span>
    </a>
  );
}
