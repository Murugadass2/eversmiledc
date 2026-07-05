import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import {
  Sparkles, Activity, Microscope, Smile, Crown, Leaf, Baby, UserRound,
  Accessibility, Scissors, ShieldAlert, ArrowRight, ShieldCheck,
} from "lucide-react";
import imgImplants from "@/assets/spec-implants.jpg";
import imgOrtho from "@/assets/spec-ortho.jpg";
import imgEndo from "@/assets/spec-endo.jpg";
import imgCosmetic from "@/assets/spec-cosmetic.jpg";
import imgProstho from "@/assets/spec-prostho.jpg";
import imgBiomim from "@/assets/spec-biomim.jpg";
import imgPedo from "@/assets/spec-pedo.jpg";
import imgGeriatric from "@/assets/spec-geriatric.jpg";
import imgInclusive from "@/assets/spec-inclusive.jpg";
import imgMaxfac from "@/assets/spec-maxfac.jpg";
import imgTrauma from "@/assets/spec-trauma.jpg";
import imgPreve from "@/assets/spec-Preventive-Dentistry.jpg";

export const Route = createFileRoute("/specialities")({
  head: () => ({
    meta: [
      { title: "Dental Services | EverSmile Implant Centre" },
      { name: "description", content: "Explore our dental treatments including implants, braces, root canals, cosmetic dentistry, children's dentistry, gum treatment, crowns, bridges, and more." },
      { name: "keywords", content: "Dental Implant, Single Tooth Implant, Full Mouth Dental Implant, Implant Dentist, Implant Specialist, Root Canal Treatment, RCT Specialist, Tooth Pain Treatment, Endodontist, Braces, Invisible Aligners, Teeth Alignment, Orthodontist, Smile Makeover, Teeth Whitening, Dental Veneers, Smile Design, Cosmetic Dentist, Children's Dentist, Kids Dental Care, Pediatric Dental Clinic, Wisdom Tooth Removal, Tooth Extraction, Oral Surgery, Dental Crown, Dental Bridge, Dentures, Gum Treatment, Bleeding Gums Treatment, Gum Disease Treatment, Dental Cleaning, Dental Checkup, Oral Hygiene, Dental Clinic, Best Dental Clinic, Dentist Near Me, Family Dentist, Dental Care, Oral Health, Dental Treatment, Dental Hospital, Cosmetic Dentistry, General Dentistry, Preventive Dentistry, Restorative Dentistry, Dental Consultation, Dental Checkup, Teeth Cleaning, Professional Teeth Cleaning, Teeth Whitening, Smile Makeover, Dental Filling, Tooth Extraction, Wisdom Tooth Removal, Root Canal Treatment, RCT Specialist, Dental Crown, Dental Bridge, Dental Veneers, Dental Implants, Single Tooth Implant, Full Mouth Implants, Implant Dentist, Implant Center, Dentures, Partial Dentures, Complete Dentures, Invisible Braces, Clear Aligners, Metal Braces, Ceramic Braces, Orthodontic Treatment, Braces Specialist, Pediatric Dentist, Children's Dental Care, Kids Dentist, Gum Disease Treatment, Periodontal Treatment, Gum Care, Oral Surgery, Emergency Dentist, Emergency Dental Care, Tooth Pain Treatment, Sensitive Teeth Treatment, Bad Breath Treatment, Broken Tooth Repair, Chipped Tooth Repair, Missing Teeth Solution, Tooth Replacement, Dental X-Ray, Digital Dental X-Ray, Digital Dentistry, Painless Dental Treatment, Affordable Dental Care, Affordable Dentist, Experienced Dentist, Expert Dental Care, Modern Dental Clinic, Advanced Dental Technology, Quality Dental Care, Gentle Dental Care, Trusted Dentist, Dental Hygiene, Healthy Teeth, Healthy Smile, Smile Design, Smile Correction, Cosmetic Dental Clinic, Dental Specialists, Teeth Straightening, Jaw Pain Treatment, TMJ Treatment, Mouth Ulcer Treatment, Oral Cancer Screening, Preventive Oral Care, Dental Scaling, Deep Cleaning Teeth, Tooth Decay Treatment, Cavity Filling, Fluoride Treatment, Sealants for Teeth, Dental Appointment, Book Dental Appointment, Dental Clinic Near Me, Best Dentist Near Me, Dental Care Services, Dental Health Check, Tooth Care, Complete Dental Solutions, Dental Wellness, Smile Care Clinic, Oral Care Clinic, Dental Implant Clinic chennai" },
      { property: "og:title", content: "Dental Services | EverSmile Implant Centre" },
      { property: "og:description", content: "Implants, braces, root canals, cosmetic dentistry, kids dentistry, gum treatment, crowns, bridges and more." },
      { property: "og:url", content: "/specialities" },
    ],
    links: [{ rel: "canonical", href: "/specialities" }],
  }),
  component: Specialities,
});

const specialities = [
  { icon: ShieldCheck, image: imgPreve, title: "Preventive Dentistry", items: ["Routine Check-ups", "Professional Cleaning", "Fluoride Therapy", "Dental Sealants", "Oral Hygiene Education", "Early Cavity Detection"] },
  { icon: Sparkles, image: imgImplants, title: "Dental Implants", items: ["Single Tooth Implant", "Multiple Implants", "Full Mouth Rehabilitation", "Immediate Loading", "Implant Dentures"] },
  { icon: Activity, image: imgOrtho, title: "Orthodontics", items: ["Metal Braces", "Ceramic Braces", "Self-Ligating", "Clear Aligners", "Invisalign-Style"] },
  { icon: Microscope, image: imgEndo, title: "Endodontics", items: ["Root Canal", "Re-Root Canal", "Microscope Endodontics", "Apicoectomy"] },
  { icon: Smile, image: imgCosmetic, title: "Cosmetic Dentistry", items: ["Smile Makeover", "Teeth Whitening", "Veneers", "Dental Bonding", "Gum Contouring"] },
  { icon: Crown, image: imgProstho, title: "Prosthodontics", items: ["Crowns", "Bridges", "Dentures", "Full Mouth Rehab"] },
  { icon: Leaf, image: imgBiomim, title: "Biomimetic Dentistry", items: ["Conservative Restorations", "Tooth Preservation", "Advanced Bonding"] },
  { icon: Baby, image: imgPedo, title: "Pediatric Dentistry", items: ["Child Dental Care", "Fluoride Treatments", "Sealants", "Habit Correction", "Preventive Care"] },
  { icon: UserRound, image: imgGeriatric, title: "Geriatric Dentistry", items: ["Senior Dental Care", "Denture Solutions", "Implant Rehab", "Oral Maintenance"] },
  { icon: Accessibility, image: imgInclusive, title: "Differently-Abled Care", items: ["Specialized Care", "Accessible Facilities", "Compassionate Treatment"] },
  { icon: Scissors, image: imgMaxfac, title: "Maxillofacial Surgery", items: ["Wisdom Tooth Removal", "Jaw Surgery", "Oral Pathology", "Facial Reconstruction"] },
  { icon: ShieldAlert, image: imgTrauma, title: "Panfacial Trauma", items: ["Trauma Management", "Facial Fractures", "Emergency Surgical Care", "Rehabilitation"] },
];

function Specialities() {
  return (
    <>
      <PageHero eyebrow="Our Specialities" title="Every smile, every stage of life." subtitle="A complete suite of dental services delivered by specialists who lead their fields." />
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {specialities.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group h-full overflow-hidden rounded-3xl border border-border bg-white transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={s.image} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/95 text-brand shadow-soft backdrop-blur">
                      <s.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h2 className="font-display text-2xl">{s.title}</h2>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {s.items.map((i) => (
                        <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> {i}</li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand transition group-hover:gap-2">
                      Book consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}