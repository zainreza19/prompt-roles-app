import type { Platform } from "@/data/creators";

const PLATFORM_META: Record<Platform, { label: string; glyph: string }> = {
  youtube: { label: "YouTube", glyph: "▶" },
  twitter: { label: "X / Twitter", glyph: "𝕏" },
  instagram: { label: "Instagram", glyph: "📷" },
  tiktok: { label: "TikTok", glyph: "♪" },
  linkedin: { label: "LinkedIn", glyph: "in" },
  newsletter: { label: "Newsletter", glyph: "✉" },
  podcast: { label: "Podcast", glyph: "🎙" },
};

export default function PlatformBadge({ platform }: { platform: Platform }) {
  const meta = PLATFORM_META[platform];
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase nb-border bg-white px-1.5 py-0.5">
      <span aria-hidden="true">{meta.glyph}</span>
      {meta.label}
    </span>
  );
}
