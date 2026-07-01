import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Search, ArrowRight } from "lucide-react";
import smile from "@/assets/smile-1.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import hero from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dental Health Blog | EverSmile Implant Centre" },
      { name: "description", content: "Read expert dental health tips, smile makeover guides, and the latest updates from EverSmile Implant Centre on implants, orthodontics, cosmetic dentistry and oral care." },
      { name: "keywords", content: "Dental Blog, Dental Health Tips, Smile Makeover, Dental Implants, Orthodontics, Cosmetic Dentistry, Oral Care, Teeth Whitening, Root Canal, Pediatric Dentistry, Gum Health, Best Dental Clinic, Dental Hospital, Dental Implant Centre, Dental Consultation" },
      { property: "og:title", content: "Dental Health Blog | EverSmile Implant Centre" },
      { property: "og:description", content: "Expert dental health tips and smile makeover guides from EverSmile Implant Centre." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const categories = ["All","Dental Implants","Oral Hygiene","Smile Makeovers","Orthodontics","Children's Dental Care","Dental Technology","Oral Health Tips"];
const posts = [
  { img: hero, cat: "Dental Implants", title: "Same-day implants: are they right for you?", date: "Jun 12, 2026" },
  { img: smile, cat: "Smile Makeovers", title: "5 things to know before your smile makeover", date: "Jun 04, 2026" },
  { img: clinic, cat: "Dental Technology", title: "How CBCT imaging is changing dentistry", date: "May 28, 2026" },
  { img: smile, cat: "Oral Hygiene", title: "The science behind professional whitening", date: "May 19, 2026" },
  { img: hero, cat: "Orthodontics", title: "Clear aligners vs traditional braces", date: "May 02, 2026" },
  { img: clinic, cat: "Children's Dental Care", title: "A parent's guide to first dental visits", date: "Apr 22, 2026" },
];

function Blog() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Stories, science & smiles." subtitle="Curated articles from our specialists on modern dentistry and oral wellbeing." />
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((c, i) => (
                <button key={c} className={`rounded-full border px-4 py-2 text-xs font-medium transition ${i===0 ? "border-brand bg-brand text-white" : "border-border bg-white hover:border-brand hover:text-brand"}`}>{c}</button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Search articles…" className="w-full rounded-full border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand" />
            </div>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => {
              const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
              <Link to="/article/$slug" params={{ slug }} key={p.title} className="group cursor-pointer">
                <article>
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                      <span className="text-brand">{p.cat}</span> <span>·</span> <span>{p.date}</span>
                    </div>
                    <h3 className="mt-2 font-display text-2xl leading-tight group-hover:text-brand">{p.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
                  </div>
                </article>
              </Link>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}