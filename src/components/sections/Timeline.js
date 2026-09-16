/**
 * A real, typed timeline of roles in chronological order — numbering here
 * is justified (unlike decorative 01/02/03 markers) because order carries
 * real information: this is a career history.
 * @param {{ entries: import('@/data/experience').ExperienceEntry[] }} props
 */
export function Timeline({ entries }) {
  return (
    <ol className="before:bg-border relative flex flex-col gap-6 before:absolute before:top-4 before:bottom-4 before:left-[0.45rem] before:w-px">
      {entries.map((entry) => (
        <li key={entry.id} className="relative pl-9">
          <span className="bg-accent ring-bg absolute top-7 left-0 h-4 w-4 rounded-full ring-4" />
          <article className="border-border bg-surface rounded-2xl border p-6 shadow-[0_18px_60px_-42px_rgba(5,26,32,0.5)] sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-display text-fg text-xl font-semibold">
                  {entry.role}
                </h3>
                <p className="text-fg-muted mt-1 text-sm">{entry.organization}</p>
              </div>
              <p className="bg-accent-soft text-accent rounded-full px-3 py-1.5 text-xs font-semibold whitespace-nowrap">
                {entry.period}
              </p>
            </div>
            <p className="text-fg-muted mt-5 leading-relaxed">{entry.summary}</p>
            <ul className="border-border mt-5 flex flex-col gap-3 border-t pt-5">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-fg flex gap-3 text-sm leading-relaxed"
                >
                  <span
                    className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    aria-hidden="true"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  );
}
