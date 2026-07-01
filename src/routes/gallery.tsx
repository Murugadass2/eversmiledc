import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import clinic from "@/assets/clinic-interior.jpg";
import hero from "@/assets/hero-clinic.jpg";
import smile from "@/assets/smile-1.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Dental Treatment Gallery | EverSmile Implant Centre" },
      { name: "description", content: "View our dental treatment gallery featuring smile transformations, dental implants, cosmetic dentistry, braces, and modern dental facilities." },
      { name: "keywords", content: "Dental Gallery, Smile Gallery, Before and After Dental Treatment, Dental Implant Results, Smile Makeover Gallery, Cosmetic Dentistry Photos, Clinic Photos, Dental Clinic Images, Modern Dental Clinic, Patient Smile Transformation" },
      { property: "og:title", content: "Dental Treatment Gallery | EverSmile Implant Centre" },
      { property: "og:description", content: "Smile transformations, dental implants, cosmetic dentistry, braces and modern dental facilities." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const categories = ["Clinic Infrastructure","Treatment Rooms","Dental Equipment","Smile Transformations","Team Activities"];
const items = [
  { src: hero, label: "Treatment Room" },
  { src: clinic, label: "Reception" },
  { src: smile, label: "Smile Transformation" },
  { src: doctor1, label: "Our Team" },
  { src: doctor2, label: "Our Team" },
  { src: clinic, label: "Waiting Lounge" },
  { src: hero, label: "Surgical Suite" },
];

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="A glimpse inside Ever Smile." subtitle="Premium spaces. Cutting-edge technology. Smiles that speak for themselves." />
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c, i) => (
              <button key={c} className={`rounded-full border px-5 py-2 text-sm font-medium transition ${i===0 ? "border-brand bg-brand text-white" : "border-border bg-white text-foreground hover:border-brand hover:text-brand"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="mt-12 grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[280px]">
            {items.map((it, i) => (
              <figure key={i} className={`group relative overflow-hidden rounded-3xl ${i % 5 === 0 ? "lg:row-span-2" : ""}`}>
                <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 text-white">
                  <span className="text-xs uppercase tracking-widest opacity-80">Ever Smile</span>
                  <div className="font-display text-lg">{it.label}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}