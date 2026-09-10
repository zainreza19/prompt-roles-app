"use client";

export default function ScorePips({
  value,
  onChange,
  max = 5,
}: {
  value: number;
  onChange?: (v: number) => void;
  max?: number;
}) {
  const pips = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <span className="inline-flex gap-1">
      {pips.map((p) => {
        const filled = p <= value;
        const base = "nb-border w-5 h-5 inline-block";
        const fill = filled ? "bg-[#111111]" : "bg-white";
        if (!onChange) {
          return <span key={p} className={`${base} ${fill}`} />;
        }
        return (
          <button
            key={p}
            type="button"
            onClick={() => onChange(p)}
            className={`${base} ${fill} nb-press`}
            aria-label={`Set score to ${p}`}
          />
        );
      })}
    </span>
  );
}
