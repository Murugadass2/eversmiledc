import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Search, ArrowRight } from "lucide-react";
import smile from "@/assets/smile-1.jpg";
import clinic from "@/assets/clinic-interior.jpg";
import hero from "@/assets/hero-clinic.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Dental Health Blog | EverSmile Implant Centre" },
      { name: "description", content: "Read expert dental health tips, smile makeover guides, and the latest updates from EverSmile Implant Centre on implants, orthodontics, cosmetic dentistry and oral care." },
      { name: "keywords", content: "Dental Blog, Dental Health Tips, Smile Makeover, Dental Implants, Orthodontics, Cosmetic Dentistry, Oral Care, Teeth Whitening, Root Canal, Pediatric Dentistry, Gum Health, Best Dental Clinic, Dental Hospital, Dental Implant Centre, Dental Consultation, Dental Clinic, Best Dental Clinic, Dentist Near Me, Family Dentist, Dental Care, Oral Health, Dental Treatment, Dental Hospital, Cosmetic Dentistry, General Dentistry, Preventive Dentistry, Restorative Dentistry, Dental Consultation, Dental Checkup, Teeth Cleaning, Professional Teeth Cleaning, Teeth Whitening, Smile Makeover, Dental Filling, Tooth Extraction, Wisdom Tooth Removal, Root Canal Treatment, RCT Specialist, Dental Crown, Dental Bridge, Dental Veneers, Dental Implants, Single Tooth Implant, Full Mouth Implants, Implant Dentist, Implant Center, Dentures, Partial Dentures, Complete Dentures, Invisible Braces, Clear Aligners, Metal Braces, Ceramic Braces, Orthodontic Treatment, Braces Specialist, Pediatric Dentist, Children's Dental Care, Kids Dentist, Gum Disease Treatment, Periodontal Treatment, Gum Care, Oral Surgery, Emergency Dentist, Emergency Dental Care, Tooth Pain Treatment, Sensitive Teeth Treatment, Bad Breath Treatment, Broken Tooth Repair, Chipped Tooth Repair, Missing Teeth Solution, Tooth Replacement, Dental X-Ray, Digital Dental X-Ray, Digital Dentistry, Painless Dental Treatment, Affordable Dental Care, Affordable Dentist, Experienced Dentist, Expert Dental Care, Modern Dental Clinic, Advanced Dental Technology, Quality Dental Care, Gentle Dental Care, Trusted Dentist, Dental Hygiene, Healthy Teeth, Healthy Smile, Smile Design, Smile Correction, Cosmetic Dental Clinic, Dental Specialists, Teeth Straightening, Jaw Pain Treatment, TMJ Treatment, Mouth Ulcer Treatment, Oral Cancer Screening, Preventive Oral Care, Dental Scaling, Deep Cleaning Teeth, Tooth Decay Treatment, Cavity Filling, Fluoride Treatment, Sealants for Teeth, Dental Appointment, Book Dental Appointment, Dental Clinic Near Me, Best Dentist Near Me, Dental Care Services, Dental Health Check, Tooth Care, Complete Dental Solutions, Dental Wellness, Smile Care Clinic, Oral Care Clinic, Dental Implant Clinic chennai, Dentist in Chennai, Best Dentist in Chennai, Dental Clinic in Chennai, Dental Hospital in Chennai, Dental Care in Chennai, Dental Centre in Chennai, Family Dentist Chennai, Dental Specialist Chennai, Dental Treatment Chennai, Affordable Dentist Chennai, Dental Implant Keywords, Dental Implant Chennai, Best Dental Implant Clinic Chennai, Dental Implant Specialist Chennai, Full Mouth Dental Implants Chennai, Single Tooth Implant Chennai, Immediate Dental Implants Chennai, Implant Centre Chennai, Implant Dentist Chennai, Implant Surgery Chennai, Tooth Implant Cost Chennai, Cosmetic Dentistry, Cosmetic Dentist Chennai, Smile Makeover Chennai, Teeth Whitening Chennai, Dental Veneers Chennai, Dental Bonding Chennai, Digital Smile Design Chennai, Hollywood Smile Chennai, Smile Correction Chennai, Aesthetic Dentistry Chennai, Cosmetic Dental Clinic Chennai, Orthodontics, Braces Treatment Chennai, Invisible Braces Chennai, Clear Aligners Chennai, Ceramic Braces Chennai, Metal Braces Chennai, Orthodontist Chennai, Teeth Alignment Chennai, Invisalign Chennai, Adult Braces Chennai, Kids Braces Chennai, Root Canal, Root Canal Treatment Chennai, Painless Root Canal Chennai, Root Canal Specialist Chennai, RCT Clinic Chennai, Best RCT Chennai, Emergency Root Canal Chennai, Single Sitting Root Canal Chennai, Tooth Pain Treatment Chennai, Pediatric Dentistry, Kids Dentist Chennai, Child Dental Clinic Chennai, Pediatric Dentist Chennai, Children's Dental Care Chennai, Baby Teeth Treatment Chennai, Kids Dental Hospital Chennai, Tooth Extraction, Tooth Extraction Chennai, Wisdom Tooth Removal Chennai, Painless Tooth Extraction Chennai, Surgical Tooth Extraction Chennai, Oral Surgery Chennai, Gum Care, Gum Treatment Chennai, Periodontist Chennai, Bleeding Gums Treatment Chennai, Gum Disease Treatment Chennai, Deep Cleaning Teeth Chennai, Prosthodontics, Dentures Chennai, Partial Dentures Chennai, Complete Dentures Chennai, Crown and Bridge Chennai, Dental Crowns Chennai, Zirconia Crown Chennai, Ceramic Crown Chennai, Emergency Dental Care, Emergency Dentist Chennai, 24 Hour Dentist Chennai, Toothache Treatment Chennai, Broken Tooth Repair Chennai, Emergency Dental Clinic Chennai, General Dentistry, Teeth Cleaning Chennai, Dental Filling Chennai, Tooth Filling Chennai, Oral Health Checkup Chennai, Dental X-ray Chennai, Preventive Dentistry Chennai, Dental Consultation Chennai, Oral Examination Chennai, Local SEO Keywords, Dentist Near Me, Dental Clinic Near Me, Best Dental Clinic Near Me, Implant Centre Near Me, Root Canal Near Me, Braces Near Me, Teeth Whitening Near Me, Smile Makeover Near Me, Emergency Dentist Near Me, Family Dental Clinic Near Me, Dentist in Anna Nagar, Dentist in Velachery, Dentist in T Nagar, Dentist in Adyar, Dentist in Tambaram, Dentist in Porur, Dentist in Medavakkam, Dentist in OMR, Dentist in Perungudi, Dentist in Pallikaranai, Dental Clinic Anna Nagar, Dental Clinic Velachery, Dental Clinic Tambaram, Dental Clinic Adyar, Dental Clinic Porur, Dental Clinic OMR, Dental Clinic Medavakkam, Dental Clinic Pallikaranai, Dental Clinic Perungudi, Dental Clinic T Nagar, Eversmile Implant Centre Chennai, Eversmile Dental Clinic Chennai, Eversmile Dentist Chennai, Eversmile Dental Hospital Chennai, Eversmile Implant Specialist Chennai, Eversmile, Ever Smile, Best Implant Centre Chennai, Best Dental Care Chennai, Trusted Dentist Chennai, Modern Dental Clinic Chennai, Advanced Dental Care Chennai" },
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
            {posts.map((p, idx) => {
              const slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
              <Reveal key={p.title} delay={idx * 80}>
                <Link to="/article/$slug" params={{ slug }} className="group block cursor-pointer">
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
              </Reveal>
            )})}
          </div>
        </div>
      </section>
    </>
  );
}