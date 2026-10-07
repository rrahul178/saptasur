// গান/লেখার কভার: slug থেকে তৈরি সাত সুরের দণ্ড। ছবি যোগ না করা পর্যন্ত এটিই কভার।
export default function Cover({ seed }: { seed: string }) {
  let h = 7;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const accentIdx = h % 7;
  const bars = Array.from({ length: 7 }, () => {
    h = (h * 1103515245 + 12345) >>> 0;
    return 22 + ((h >>> 8) % 68);
  });
  return (
    <svg viewBox="0 0 140 100" preserveAspectRatio="none" aria-hidden="true" className="h-full w-full">
      <rect width="140" height="100" fill="var(--cover)" />
      {bars.map((b, i) => (
        <rect key={i} x={12 + i * 17.5} y={100 - b} width="8" height={b} fill={i === accentIdx ? "var(--accent)" : "var(--cover-ink)"} />
      ))}
    </svg>
  );
}
