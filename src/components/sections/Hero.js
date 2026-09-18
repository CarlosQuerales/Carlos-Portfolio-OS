import Image from 'next/image';
import { Button } from '@/components/ui/Button';

/**
 * @param {{ profile: import('@/data/profile').Profile }} props
 */
export function Hero({ profile }) {
  return (
    <div className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden py-10 sm:py-14 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
        <div className="bg-accent/10 absolute top-[8%] right-[8%] h-72 w-72 rounded-full blur-[100px] sm:h-[28rem] sm:w-[28rem]" />
        <div className="bg-secondary/10 absolute bottom-[4%] left-[24%] h-64 w-64 rounded-full blur-[110px]" />
        <div className="border-border/70 absolute top-[12%] right-[7%] h-[34rem] w-[34rem] rounded-full border" />
        <div className="border-border/40 absolute top-[19%] right-[13%] h-[25rem] w-[25rem] rounded-full border" />
      </div>

      <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(21rem,0.72fr)] lg:items-center lg:gap-8 xl:gap-12">
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="bg-accent h-2 w-2 rounded-full shadow-[0_0_18px_var(--accent)]" />
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              {profile.availability}
            </p>
          </div>

          <p className="font-display text-fg-muted text-sm font-semibold tracking-[0.16em] uppercase sm:text-base">
            {profile.name}
          </p>

          <h1 className="font-display text-fg mt-3 max-w-3xl text-5xl leading-[0.94] font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-[4.6rem] xl:text-[5.25rem]">
            Customer Success
            <span className="block bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">
              Engineer
            </span>
          </h1>

          <p className="text-fg mt-5 text-sm font-semibold tracking-[0.1em] uppercase sm:text-base">
            {profile.serviceLine}
          </p>

          <p className="text-fg-muted mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            {profile.positioning}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="#selected-work">Explore my work</Button>
            <Button href="/contact" variant="ghost">
              Contact me
            </Button>
          </div>

          <a
            href={profile.resumePath}
            download
            className="text-fg-muted hover:text-accent decoration-border-strong mt-4 text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Download résumé
          </a>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <span
            aria-hidden="true"
            className="font-display text-accent/8 absolute -top-14 -left-20 -z-10 text-[12rem] leading-none font-semibold tracking-[-0.04em] sm:text-[16rem] lg:-top-24 lg:-left-28 lg:text-[20rem]"
          >
            CQ
          </span>
          <div className="absolute -inset-3 rounded-[2.5rem] bg-[image:var(--gradient-brand)] opacity-30 blur-2xl" />
          <div className="border-border bg-surface relative overflow-hidden rounded-[2.25rem] border p-2 shadow-[var(--shadow-lift)]">
            <Image
              src="/images/carlos-querales-profile.jpg"
              alt="Carlos M. Querales Daza, Customer Success Engineer"
              width={896}
              height={1200}
              sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 36vw, (min-width: 640px) 28rem, 90vw"
              priority
              className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-top"
            />
            <div className="absolute inset-x-2 bottom-2 h-2/5 rounded-b-[1.8rem] bg-gradient-to-t from-[#071318] via-[#071318]/55 to-transparent" />
            <figcaption className="absolute right-7 bottom-7 left-7">
              <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
                Customer ↔ Engineering
              </p>
              <p className="font-display mt-2 text-lg font-semibold text-white">
                Technical depth. Human clarity.
              </p>
            </figcaption>
          </div>
          <div
            aria-hidden="true"
            className="bg-accent absolute top-10 -right-3 h-3 w-3 rounded-full shadow-[0_0_26px_var(--accent)]"
          />
          <div
            aria-hidden="true"
            className="border-accent/50 absolute top-[2.8rem] -right-[0.35rem] h-px w-24 border-t"
          />
        </figure>

        <dl className="border-border bg-surface/45 grid gap-px overflow-hidden rounded-2xl border backdrop-blur-sm sm:grid-cols-3 lg:col-span-2 lg:max-w-3xl">
          {profile.signals.map((signal) => (
            <div key={signal.label} className="bg-bg/55 px-5 py-4">
              <dt className="font-display text-fg text-base font-semibold">
                {signal.value}
              </dt>
              <dd className="text-fg-muted mt-0.5 text-xs">{signal.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#customer-impact"
        className="text-fg-muted hover:text-accent absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-semibold tracking-[0.14em] uppercase transition-colors xl:flex"
      >
        <span className="bg-border-strong h-px w-10" />
        Scroll to impact
        <span className="bg-border-strong h-px w-10" />
      </a>
    </div>
  );
}
