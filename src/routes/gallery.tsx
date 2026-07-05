import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import newGallery1 from "@/assets/gallery-new-1.jpeg";
import newGallery2 from "@/assets/gallery-new-2.jpeg";
import newGallery3 from "@/assets/gallery-new-3.jpeg";
import newGallery4 from "@/assets/gallery-new-4.jpeg";
import newGallery5 from "@/assets/gallery-new-5.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Dental Treatment Gallery | EverSmile Implant Centre" },
      { name: "description", content: "View our dental treatment gallery featuring smile transformations, dental implants, cosmetic dentistry, braces, and modern dental facilities." },
      { name: "keywords", content: "Dental Gallery, Smile Gallery, Before and After Dental Treatment, Dental Implant Results, Smile Makeover Gallery, Cosmetic Dentistry Photos, Clinic Photos, Dental Clinic Images, Modern Dental Clinic, Patient Smile Transformation, Dental Clinic, Best Dental Clinic, Dentist Near Me, Family Dentist, Dental Care, Oral Health, Dental Treatment, Dental Hospital, Cosmetic Dentistry, General Dentistry, Preventive Dentistry, Restorative Dentistry, Dental Consultation, Dental Checkup, Teeth Cleaning, Professional Teeth Cleaning, Teeth Whitening, Smile Makeover, Dental Filling, Tooth Extraction, Wisdom Tooth Removal, Root Canal Treatment, RCT Specialist, Dental Crown, Dental Bridge, Dental Veneers, Dental Implants, Single Tooth Implant, Full Mouth Implants, Implant Dentist, Implant Center, Dentures, Partial Dentures, Complete Dentures, Invisible Braces, Clear Aligners, Metal Braces, Ceramic Braces, Orthodontic Treatment, Braces Specialist, Pediatric Dentist, Children's Dental Care, Kids Dentist, Gum Disease Treatment, Periodontal Treatment, Gum Care, Oral Surgery, Emergency Dentist, Emergency Dental Care, Tooth Pain Treatment, Sensitive Teeth Treatment, Bad Breath Treatment, Broken Tooth Repair, Chipped Tooth Repair, Missing Teeth Solution, Tooth Replacement, Dental X-Ray, Digital Dental X-Ray, Digital Dentistry, Painless Dental Treatment, Affordable Dental Care, Affordable Dentist, Experienced Dentist, Expert Dental Care, Modern Dental Clinic, Advanced Dental Technology, Quality Dental Care, Gentle Dental Care, Trusted Dentist, Dental Hygiene, Healthy Teeth, Healthy Smile, Smile Design, Smile Correction, Cosmetic Dental Clinic, Dental Specialists, Teeth Straightening, Jaw Pain Treatment, TMJ Treatment, Mouth Ulcer Treatment, Oral Cancer Screening, Preventive Oral Care, Dental Scaling, Deep Cleaning Teeth, Tooth Decay Treatment, Cavity Filling, Fluoride Treatment, Sealants for Teeth, Dental Appointment, Book Dental Appointment, Dental Clinic Near Me, Best Dentist Near Me, Dental Care Services, Dental Health Check, Tooth Care, Complete Dental Solutions, Dental Wellness, Smile Care Clinic, Oral Care Clinic, Dental Implant Clinic chennai, Dentist in Chennai, Best Dentist in Chennai, Dental Clinic in Chennai, Dental Hospital in Chennai, Dental Care in Chennai, Dental Centre in Chennai, Family Dentist Chennai, Dental Specialist Chennai, Dental Treatment Chennai, Affordable Dentist Chennai, Dental Implant Keywords, Dental Implant Chennai, Best Dental Implant Clinic Chennai, Dental Implant Specialist Chennai, Full Mouth Dental Implants Chennai, Single Tooth Implant Chennai, Immediate Dental Implants Chennai, Implant Centre Chennai, Implant Dentist Chennai, Implant Surgery Chennai, Tooth Implant Cost Chennai, Cosmetic Dentistry, Cosmetic Dentist Chennai, Smile Makeover Chennai, Teeth Whitening Chennai, Dental Veneers Chennai, Dental Bonding Chennai, Digital Smile Design Chennai, Hollywood Smile Chennai, Smile Correction Chennai, Aesthetic Dentistry Chennai, Cosmetic Dental Clinic Chennai, Orthodontics, Braces Treatment Chennai, Invisible Braces Chennai, Clear Aligners Chennai, Ceramic Braces Chennai, Metal Braces Chennai, Orthodontist Chennai, Teeth Alignment Chennai, Invisalign Chennai, Adult Braces Chennai, Kids Braces Chennai, Root Canal, Root Canal Treatment Chennai, Painless Root Canal Chennai, Root Canal Specialist Chennai, RCT Clinic Chennai, Best RCT Chennai, Emergency Root Canal Chennai, Single Sitting Root Canal Chennai, Tooth Pain Treatment Chennai, Pediatric Dentistry, Kids Dentist Chennai, Child Dental Clinic Chennai, Pediatric Dentist Chennai, Children's Dental Care Chennai, Baby Teeth Treatment Chennai, Kids Dental Hospital Chennai, Tooth Extraction, Tooth Extraction Chennai, Wisdom Tooth Removal Chennai, Painless Tooth Extraction Chennai, Surgical Tooth Extraction Chennai, Oral Surgery Chennai, Gum Care, Gum Treatment Chennai, Periodontist Chennai, Bleeding Gums Treatment Chennai, Gum Disease Treatment Chennai, Deep Cleaning Teeth Chennai, Prosthodontics, Dentures Chennai, Partial Dentures Chennai, Complete Dentures Chennai, Crown and Bridge Chennai, Dental Crowns Chennai, Zirconia Crown Chennai, Ceramic Crown Chennai, Emergency Dental Care, Emergency Dentist Chennai, 24 Hour Dentist Chennai, Toothache Treatment Chennai, Broken Tooth Repair Chennai, Emergency Dental Clinic Chennai, General Dentistry, Teeth Cleaning Chennai, Dental Filling Chennai, Tooth Filling Chennai, Oral Health Checkup Chennai, Dental X-ray Chennai, Preventive Dentistry Chennai, Dental Consultation Chennai, Oral Examination Chennai, Local SEO Keywords, Dentist Near Me, Dental Clinic Near Me, Best Dental Clinic Near Me, Implant Centre Near Me, Root Canal Near Me, Braces Near Me, Teeth Whitening Near Me, Smile Makeover Near Me, Emergency Dentist Near Me, Family Dental Clinic Near Me, Dentist in Anna Nagar, Dentist in Velachery, Dentist in T Nagar, Dentist in Adyar, Dentist in Tambaram, Dentist in Porur, Dentist in Medavakkam, Dentist in OMR, Dentist in Perungudi, Dentist in Pallikaranai, Dental Clinic Anna Nagar, Dental Clinic Velachery, Dental Clinic Tambaram, Dental Clinic Adyar, Dental Clinic Porur, Dental Clinic OMR, Dental Clinic Medavakkam, Dental Clinic Pallikaranai, Dental Clinic Perungudi, Dental Clinic T Nagar, Eversmile Implant Centre Chennai, Eversmile Dental Clinic Chennai, Eversmile Dentist Chennai, Eversmile Dental Hospital Chennai, Eversmile Implant Specialist Chennai, Eversmile, Ever Smile, Best Implant Centre Chennai, Best Dental Care Chennai, Trusted Dentist Chennai, Modern Dental Clinic Chennai, Advanced Dental Care Chennai" },
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
  { src: newGallery1, label: "Treatment Room" },
  { src: newGallery2, label: "Advanced Care" },
  { src: newGallery3, label: "Reception" },
  { src: newGallery4, label: "Clinic Entrance" },
  { src: newGallery5, label: "EverSmile Logo" },
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