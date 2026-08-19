/**
 * A real, typed timeline of roles in chronological order — numbering here
 * is justified (unlike decorative 01/02/03 markers) because order carries
 * real information: this is a career history.
 * @param {{ entries: import('@/data/experience').ExperienceEntry[] }} props
 */
export function Timeline({ entries }) {
  return (
    <ol className="border-border flex flex-col gap-10 border-l pl-8">
      {entries.map((entry) => (
        <li key={entry.id} className="relative">
          <span className="bg-accent absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full" />
          <p className="text-fg-muted text-sm">{entry.period}</p>
          <h3 className="font-display text-fg mt-1 text-xl font-semibold">
            {entry.role}
          </h3>
          <p className="text-fg-muted text-sm">{entry.organization}</p>
          <p className="text-fg-muted mt-3 leading-relaxed">{entry.summary}</p>
          <ul className="mt-3 flex flex-col gap-1.5">
            {entry.highlights.map((highlight) => (
              <li key={highlight} className="text-fg flex gap-2 text-sm leading-relaxed">
                <span
                  className="bg-fg-muted mt-2 h-1 w-1 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
