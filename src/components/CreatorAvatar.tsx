"use client";

import { useState } from "react";
import type { Creator } from "@/data/creators";
import { colorFor, getAvatarUrl, initialsFor } from "@/lib/avatar";

export default function CreatorAvatar({
  creator,
  size = 44,
}: {
  creator: Creator;
  size?: number;
}) {
  const src = getAvatarUrl(creator.platform, creator.handle);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <span
        className="nb-border shrink-0 flex items-center justify-center font-bold"
        style={{
          width: size,
          height: size,
          background: colorFor(creator.id),
          fontSize: size * 0.36,
        }}
        aria-hidden="true"
      >
        {initialsFor(creator.name)}
      </span>
    );
  }

  return (
    // Decorative — the creator's name is always rendered as text right next
    // to this, so an empty alt avoids redundant screen-reader announcement.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className="nb-border shrink-0 object-cover"
      style={{ width: size, height: size }}
    />
  );
}
