/**
 * Lightweight, code-native covers for work that does not yet have approved
 * project photography. They communicate the type of work without pretending
 * to be literal product screenshots.
 * @param {{ variant: 'portfolio' | 'diagnostics', className?: string }} props
 */
export function WorkVisual({ variant, className = '' }) {
  if (variant === 'diagnostics') {
    return (
      <div
        aria-hidden="true"
        className={`border-border relative min-h-72 overflow-hidden rounded-[var(--radius-card)] border bg-[#071318] p-5 shadow-[var(--shadow-lift)] sm:min-h-96 sm:p-7 ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(145,163,255,0.22),transparent_34%),radial-gradient(circle_at_12%_86%,rgba(88,223,207,0.16),transparent_38%)]" />
        <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#58dfcf]" />
          </div>
          <span className="font-mono text-[0.65rem] tracking-[0.18em] text-white/45 uppercase">
            Diagnostic workspace
          </span>
        </div>

        <div className="relative mt-6 grid gap-4 sm:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
            <div className="flex aspect-square items-center justify-center rounded-full border-[10px] border-[#58dfcf]/20 border-t-[#58dfcf]">
              <div className="text-center">
                <p className="font-mono text-xs tracking-[0.15em] text-[#58dfcf] uppercase">
                  Baseline
                </p>
                <p className="mt-1 text-xs text-white/45">Observe first</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-white/45 uppercase">
              Evidence map
            </p>
            <div className="mt-6 space-y-5">
              {[
                ['Requests', '82%'],
                ['Assets', '64%'],
                ['Caching', '44%'],
                ['Third-party', '71%'],
              ].map(([label, width]) => (
                <div key={label}>
                  <p className="mb-2 text-xs text-white/60">{label}</p>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[image:var(--gradient-brand)]"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`border-border relative min-h-72 overflow-hidden rounded-[var(--radius-card)] border bg-[#071318] p-5 shadow-[var(--shadow-lift)] sm:min-h-96 sm:p-7 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(88,223,207,0.22),transparent_34%),radial-gradient(circle_at_12%_90%,rgba(145,163,255,0.18),transparent_38%)]" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1d23] shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#58dfcf]" />
          </div>
          <div className="h-2 w-24 rounded-full bg-white/10" />
          <span className="font-mono text-[0.6rem] text-white/35">CQ</span>
        </div>
        <div className="grid min-h-64 grid-cols-[3.5rem_1fr] sm:min-h-80 sm:grid-cols-[4.5rem_1fr]">
          <div className="border-r border-white/10 p-3 sm:p-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[image:var(--gradient-brand)] font-mono text-xs font-bold text-[#041513]">
              CQ
            </div>
            <div className="mt-7 space-y-3">
              <div className="h-1.5 rounded-full bg-[#58dfcf]/50" />
              <div className="h-1.5 rounded-full bg-white/10" />
              <div className="h-1.5 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="p-5 sm:p-8">
            <p className="font-mono text-[0.65rem] tracking-[0.16em] text-[#58dfcf] uppercase">
              Customer ↔ Engineering
            </p>
            <div className="mt-4 h-5 w-4/5 rounded-full bg-white/85 sm:h-7" />
            <div className="mt-2 h-5 w-3/5 rounded-full bg-white/85 sm:h-7" />
            <div className="mt-5 h-2 w-11/12 rounded-full bg-white/15" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-white/10" />
            <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
              <div className="h-16 rounded-xl border border-[#58dfcf]/20 bg-[#58dfcf]/10 sm:h-24" />
              <div className="h-16 rounded-xl border border-white/10 bg-white/[0.045] sm:h-24" />
              <div className="h-16 rounded-xl border border-[#91a3ff]/20 bg-[#91a3ff]/10 sm:h-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
