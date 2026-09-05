import type { Platform } from "@/data/creators";

// Platforms unavatar.io (a public, no-auth avatar-proxy service) can
// resolve a photo for by handle. LinkedIn, newsletters, and podcasts have
// no reliable handle-based avatar route, so we skip the network attempt
// for those entirely and go straight to the initials fallback.
const AVATAR_PROVIDER: Partial<Record<Platform, string>> = {
  youtube: "youtube",
  twitter: "twitter",
  instagram: "instagram",
  tiktok: "tiktok",
};

/**
 * Best-effort avatar URL for a creator. This is a third-party proxy, not a
 * verified/hosted asset — it can fail to resolve even for a supported
 * platform. Callers must pair this with a graceful fallback rather than
 * assume it always loads (see <CreatorAvatar>).
 */
export function getAvatarUrl(platform: Platform, handle: string): string | null {
  const provider = AVATAR_PROVIDER[platform];
  if (!provider) return null;
  const clean = handle.replace(/^@/, "").trim();
  if (!clean) return null;
  return `https://unavatar.io/${provider}/${encodeURIComponent(clean)}?fallback=false`;
}

const INITIALS_PALETTE = [
  "#FF6B6B",
  "#FF9F40",
  "#4ECDC4",
  "#C9BBFF",
  "#4D96FF",
  "#9BE38C",
];

export function initialsFor(name: string): string {
  const parts = name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "?";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function colorFor(id: string): string {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return INITIALS_PALETTE[hash % INITIALS_PALETTE.length];
}
