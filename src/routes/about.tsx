import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import galleryNew1 from "@/assets/gallery-new-1.jpeg";
import { Target, Eye, HeartHandshake, Microscope, Users, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EverSmile Implant Centre | Experienced Dental Specialists" },
      { name: "description", content: "Learn about EverSmile Implant Centre, our experienced dental specialists, advanced technology, patient-focused care, and commitment to healthy smiles." },
      { name: "keywords", content: "About EverSmile Implant Centre, Experienced Dentists, Dental Specialists, Modern Dental Clinic, Advanced Dental Technology, Patient-Centered Care, Trusted Dental Hospital, Quality Dental Services, Dental Experts, Professional Dental Team, Dental Clinic, Best Dental Clinic, Dentist Near Me, Family Dentist, Dental Care, Oral Health, Dental Treatment, Dental Hospital, Cosmetic Dentistry, General Dentistry, Preventive Dentistry, Restorative Dentistry, Dental Consultation, Dental Checkup, Teeth Cleaning, Professional Teeth Cleaning, Teeth Whitening, Smile Makeover, Dental Filling, Tooth Extraction, Wisdom Tooth Removal, Root Canal Treatment, RCT Specialist, Dental Crown, Dental Bridge, Dental Veneers, Dental Implants, Single Tooth Implant, Full Mouth Implants, Implant Dentist, Implant Center, Dentures, Partial Dentures, Complete Dentures, Invisible Braces, Clear Aligners, Metal Braces, Ceramic Braces, Orthodontic Treatment, Braces Specialist, Pediatric Dentist, Children's Dental Care, Kids Dentist, Gum Disease Treatment, Periodontal Treatment, Gum Care, Oral Surgery, Emergency Dentist, Emergency Dental Care, Tooth Pain Treatment, Sensitive Teeth Treatment, Bad Breath Treatment, Broken Tooth Repair, Chipped Tooth Repair, Missing Teeth Solution, Tooth Replacement, Dental X-Ray, Digital Dental X-Ray, Digital Dentistry, Painless Dental Treatment, Affordable Dental Care, Affordable Dentist, Experienced Dentist, Expert Dental Care, Modern Dental Clinic, Advanced Dental Technology, Quality Dental Care, Gentle Dental Care, Trusted Dentist, Dental Hygiene, Healthy Teeth, Healthy Smile, Smile Design, Smile Correction, Cosmetic Dental Clinic, Dental Specialists, Teeth Straightening, Jaw Pain Treatment, TMJ Treatment, Mouth Ulcer Treatment, Oral Cancer Screening, Preventive Oral Care, Dental Scaling, Deep Cleaning Teeth, Tooth Decay Treatment, Cavity Filling, Fluoride Treatment, Sealants for Teeth, Dental Appointment, Book Dental Appointment, Dental Clinic Near Me, Best Dentist Near Me, Dental Care Services, Dental Health Check, Tooth Care, Complete Dental Solutions, Dental Wellness, Smile Care Clinic, Oral Care Clinic, Dental Implant Clinic chennai, Dentist in Chennai, Best Dentist in Chennai, Dental Clinic in Chennai, Dental Hospital in Chennai, Dental Care in Chennai, Dental Centre in Chennai, Family Dentist Chennai, Dental Specialist Chennai, Dental Treatment Chennai, Affordable Dentist Chennai, Dental Implant Keywords, Dental Implant Chennai, Best Dental Implant Clinic Chennai, Dental Implant Specialist Chennai, Full Mouth Dental Implants Chennai, Single Tooth Implant Chennai, Immediate Dental Implants Chennai, Implant Centre Chennai, Implant Dentist Chennai, Implant Surgery Chennai, Tooth Implant Cost Chennai, Cosmetic Dentistry, Cosmetic Dentist Chennai, Smile Makeover Chennai, Teeth Whitening Chennai, Dental Veneers Chennai, Dental Bonding Chennai, Digital Smile Design Chennai, Hollywood Smile Chennai, Smile Correction Chennai, Aesthetic Dentistry Chennai, Cosmetic Dental Clinic Chennai, Orthodontics, Braces Treatment Chennai, Invisible Braces Chennai, Clear Aligners Chennai, Ceramic Braces Chennai, Metal Braces Chennai, Orthodontist Chennai, Teeth Alignment Chennai, Invisalign Chennai, Adult Braces Chennai, Kids Braces Chennai, Root Canal, Root Canal Treatment Chennai, Painless Root Canal Chennai, Root Canal Specialist Chennai, RCT Clinic Chennai, Best RCT Chennai, Emergency Root Canal Chennai, Single Sitting Root Canal Chennai, Tooth Pain Treatment Chennai, Pediatric Dentistry, Kids Dentist Chennai, Child Dental Clinic Chennai, Pediatric Dentist Chennai, Children's Dental Care Chennai, Baby Teeth Treatment Chennai, Kids Dental Hospital Chennai, Tooth Extraction, Tooth Extraction Chennai, Wisdom Tooth Removal Chennai, Painless Tooth Extraction Chennai, Surgical Tooth Extraction Chennai, Oral Surgery Chennai, Gum Care, Gum Treatment Chennai, Periodontist Chennai, Bleeding Gums Treatment Chennai, Gum Disease Treatment Chennai, Deep Cleaning Teeth Chennai, Prosthodontics, Dentures Chennai, Partial Dentures Chennai, Complete Dentures Chennai, Crown and Bridge Chennai, Dental Crowns Chennai, Zirconia Crown Chennai, Ceramic Crown Chennai, Emergency Dental Care, Emergency Dentist Chennai, 24 Hour Dentist Chennai, Toothache Treatment Chennai, Broken Tooth Repair Chennai, Emergency Dental Clinic Chennai, General Dentistry, Teeth Cleaning Chennai, Dental Filling Chennai, Tooth Filling Chennai, Oral Health Checkup Chennai, Dental X-ray Chennai, Preventive Dentistry Chennai, Dental Consultation Chennai, Oral Examination Chennai, Local SEO Keywords, Dentist Near Me, Dental Clinic Near Me, Best Dental Clinic Near Me, Implant Centre Near Me, Root Canal Near Me, Braces Near Me, Teeth Whitening Near Me, Smile Makeover Near Me, Emergency Dentist Near Me, Family Dental Clinic Near Me, Dentist in Anna Nagar, Dentist in Velachery, Dentist in T Nagar, Dentist in Adyar, Dentist in Tambaram, Dentist in Porur, Dentist in Medavakkam, Dentist in OMR, Dentist in Perungudi, Dentist in Pallikaranai, Dental Clinic Anna Nagar, Dental Clinic Velachery, Dental Clinic Tambaram, Dental Clinic Adyar, Dental Clinic Porur, Dental Clinic OMR, Dental Clinic Medavakkam, Dental Clinic Pallikaranai, Dental Clinic Perungudi, Dental Clinic T Nagar, Eversmile Implant Centre Chennai, Eversmile Dental Clinic Chennai, Eversmile Dentist Chennai, Eversmile Dental Hospital Chennai, Eversmile Implant Specialist Chennai, Eversmile, Ever Smile, Best Implant Centre Chennai, Best Dental Care Chennai, Trusted Dentist Chennai, Modern Dental Clinic Chennai, Advanced Dental Care Chennai" },
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
  { icon: Microscope, title: "Modern Infrastructure", desc: "Two operatories, dedicated surgical suite and in-house lab." },
  { icon: Sparkles, title: "Advanced Technology", desc: "Digital scanners." },
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
          <Reveal direction="left">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img src={galleryNew1} alt="Clinic interior" loading="lazy" width={1400} height={900} className="h-[500px] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
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
          </Reveal>
        </div>
      </section>

      <section className="section bg-brand-soft/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand text-white"><p.icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border p-6 transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand"><h.icon className="h-5 w-5" /></div>
                  <h3 className="mt-4 font-display text-lg">{h.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-14 text-center">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Schedule a visit <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
