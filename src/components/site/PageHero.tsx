interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-20 text-center">
        <span className="eyebrow justify-center">{eyebrow}</span>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}