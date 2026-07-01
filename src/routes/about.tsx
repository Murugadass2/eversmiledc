import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import clinic from "@/assets/clinic-interior.jpg";
import { Target, Eye, HeartHandshake, Microscope, Users, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EverSmile Implant Centre | Experienced Dental Specialists" },
      { name: "description", content: "Learn about EverSmile Implant Centre, our experienced dental specialists, advanced technology, patient-focused care, and commitment to healthy smiles." },
      { name: "keywords", content: "About EverSmile Implant Centre, Experienced Dentists, Dental Specialists, Modern Dental Clinic, Advanced Dental Technology, Patient-Centered Care, Trusted Dental Hospital, Quality Dental Services, Dental Experts, Professional Dental Team" },
      { property: "og:title", content: "About EverSmile Implant Centre | Experienced Dental Specialists" },
      { property: "og:description", content: "Experienced dental specialists, advanced technology and patient-focused care at EverSmile Implant Centre." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Our Mission", desc: "To deliver world-class, evidence-based dental care that's accessible, comfortable and life-changing." },
  { icon: Eye, title: "Our Vision", desc: "To be South Asia's most trusted destination for advanced implantology and cosmetic dentistry." },
  { icon: HeartHandshake, title: "Our Values", desc: "Empathy, precision, integrity and lifelong relationships with every patient." },
];

const highlights = [
  { icon: Users, title: "Expert Team", desc: "Board-certified specialists across every dental discipline." },
  { icon: Microscope, title: "Modern Infrastructure", desc: "Six operatories, dedicated surgical suite and in-house lab." },
  { icon: Sparkles, title: "Advanced Technology", desc: "Digital scanners, CBCT, microscope-assisted endodontics." },
  { icon: HeartHandshake, title: "Patient-Centered", desc: "Sedation options, transparent pricing, lifetime aftercare." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Crafting confident smiles since day one."
        subtitle="Ever Smile Implant Centre is committed to providing world-class dental care using advanced technology and a patient-focused approach."
      />
      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img src={clinic} alt="Clinic interior" loading="lazy" width={1400} height={900} className="h-[500px] w-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A clinic designed around you.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              From the moment you enter, every detail — the calming interiors, the technology, the warmth of our team — is engineered to make your experience effortless and your outcome exceptional.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our specialists combine decades of clinical excellence with the latest in digital dentistry, ensuring every smile we create is as durable as it is beautiful.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white p-8 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white"><p.icon className="h-6 w-6" /></div>
                <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand"><h.icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
              Schedule a visit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}