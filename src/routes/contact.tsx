import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, Clock, MessageCircle, Send, MapPin, CalendarDays } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EverSmile Implant Centre | Book Dental Appointment" },
      { name: "description", content: "Contact EverSmile Implant Centre to schedule your dental appointment. Visit our clinic or call for dental implants, root canals, braces, cosmetic dentistry, and emergency dental care." },
      { name: "keywords", content: "Contact Dentist, Book Dental Appointment, Dental Clinic Near Me, Dentist Near Me, Dental Consultation, Emergency Dentist, Dental Hospital Contact, Schedule Dental Checkup, Dental Appointment, Dental Care Near Me, Best Dental Clinic in Chennai, Dentist in Chennai, Dental Clinic, Best Dental Clinic, Dentist Near Me, Family Dentist, Dental Care, Oral Health, Dental Treatment, Dental Hospital, Cosmetic Dentistry, General Dentistry, Preventive Dentistry, Restorative Dentistry, Dental Consultation, Dental Checkup, Teeth Cleaning, Professional Teeth Cleaning, Teeth Whitening, Smile Makeover, Dental Filling, Tooth Extraction, Wisdom Tooth Removal, Root Canal Treatment, RCT Specialist, Dental Crown, Dental Bridge, Dental Veneers, Dental Implants, Single Tooth Implant, Full Mouth Implants, Implant Dentist, Implant Center, Dentures, Partial Dentures, Complete Dentures, Invisible Braces, Clear Aligners, Metal Braces, Ceramic Braces, Orthodontic Treatment, Braces Specialist, Pediatric Dentist, Children's Dental Care, Kids Dentist, Gum Disease Treatment, Periodontal Treatment, Gum Care, Oral Surgery, Emergency Dentist, Emergency Dental Care, Tooth Pain Treatment, Sensitive Teeth Treatment, Bad Breath Treatment, Broken Tooth Repair, Chipped Tooth Repair, Missing Teeth Solution, Tooth Replacement, Dental X-Ray, Digital Dental X-Ray, Digital Dentistry, Painless Dental Treatment, Affordable Dental Care, Affordable Dentist, Experienced Dentist, Expert Dental Care, Modern Dental Clinic, Advanced Dental Technology, Quality Dental Care, Gentle Dental Care, Trusted Dentist, Dental Hygiene, Healthy Teeth, Healthy Smile, Smile Design, Smile Correction, Cosmetic Dental Clinic, Dental Specialists, Teeth Straightening, Jaw Pain Treatment, TMJ Treatment, Mouth Ulcer Treatment, Oral Cancer Screening, Preventive Oral Care, Dental Scaling, Deep Cleaning Teeth, Tooth Decay Treatment, Cavity Filling, Fluoride Treatment, Sealants for Teeth, Dental Appointment, Book Dental Appointment, Dental Clinic Near Me, Best Dentist Near Me, Dental Care Services, Dental Health Check, Tooth Care, Complete Dental Solutions, Dental Wellness, Smile Care Clinic, Oral Care Clinic, Dental Implant Clinic chennai, Dentist in Chennai, Best Dentist in Chennai, Dental Clinic in Chennai, Dental Hospital in Chennai, Dental Care in Chennai, Dental Centre in Chennai, Family Dentist Chennai, Dental Specialist Chennai, Dental Treatment Chennai, Affordable Dentist Chennai, Dental Implant Keywords, Dental Implant Chennai, Best Dental Implant Clinic Chennai, Dental Implant Specialist Chennai, Full Mouth Dental Implants Chennai, Single Tooth Implant Chennai, Immediate Dental Implants Chennai, Implant Centre Chennai, Implant Dentist Chennai, Implant Surgery Chennai, Tooth Implant Cost Chennai, Cosmetic Dentistry, Cosmetic Dentist Chennai, Smile Makeover Chennai, Teeth Whitening Chennai, Dental Veneers Chennai, Dental Bonding Chennai, Digital Smile Design Chennai, Hollywood Smile Chennai, Smile Correction Chennai, Aesthetic Dentistry Chennai, Cosmetic Dental Clinic Chennai, Orthodontics, Braces Treatment Chennai, Invisible Braces Chennai, Clear Aligners Chennai, Ceramic Braces Chennai, Metal Braces Chennai, Orthodontist Chennai, Teeth Alignment Chennai, Invisalign Chennai, Adult Braces Chennai, Kids Braces Chennai, Root Canal, Root Canal Treatment Chennai, Painless Root Canal Chennai, Root Canal Specialist Chennai, RCT Clinic Chennai, Best RCT Chennai, Emergency Root Canal Chennai, Single Sitting Root Canal Chennai, Tooth Pain Treatment Chennai, Pediatric Dentistry, Kids Dentist Chennai, Child Dental Clinic Chennai, Pediatric Dentist Chennai, Children's Dental Care Chennai, Baby Teeth Treatment Chennai, Kids Dental Hospital Chennai, Tooth Extraction, Tooth Extraction Chennai, Wisdom Tooth Removal Chennai, Painless Tooth Extraction Chennai, Surgical Tooth Extraction Chennai, Oral Surgery Chennai, Gum Care, Gum Treatment Chennai, Periodontist Chennai, Bleeding Gums Treatment Chennai, Gum Disease Treatment Chennai, Deep Cleaning Teeth Chennai, Prosthodontics, Dentures Chennai, Partial Dentures Chennai, Complete Dentures Chennai, Crown and Bridge Chennai, Dental Crowns Chennai, Zirconia Crown Chennai, Ceramic Crown Chennai, Emergency Dental Care, Emergency Dentist Chennai, 24 Hour Dentist Chennai, Toothache Treatment Chennai, Broken Tooth Repair Chennai, Emergency Dental Clinic Chennai, General Dentistry, Teeth Cleaning Chennai, Dental Filling Chennai, Tooth Filling Chennai, Oral Health Checkup Chennai, Dental X-ray Chennai, Preventive Dentistry Chennai, Dental Consultation Chennai, Oral Examination Chennai, Local SEO Keywords, Dentist Near Me, Dental Clinic Near Me, Best Dental Clinic Near Me, Implant Centre Near Me, Root Canal Near Me, Braces Near Me, Teeth Whitening Near Me, Smile Makeover Near Me, Emergency Dentist Near Me, Family Dental Clinic Near Me, Dentist in Anna Nagar, Dentist in Velachery, Dentist in T Nagar, Dentist in Adyar, Dentist in Tambaram, Dentist in Porur, Dentist in Medavakkam, Dentist in OMR, Dentist in Perungudi, Dentist in Pallikaranai, Dental Clinic Anna Nagar, Dental Clinic Velachery, Dental Clinic Tambaram, Dental Clinic Adyar, Dental Clinic Porur, Dental Clinic OMR, Dental Clinic Medavakkam, Dental Clinic Pallikaranai, Dental Clinic Perungudi, Dental Clinic T Nagar, Eversmile Implant Centre Chennai, Eversmile Dental Clinic Chennai, Eversmile Dentist Chennai, Eversmile Dental Hospital Chennai, Eversmile Implant Specialist Chennai, Eversmile, Ever Smile, Best Implant Centre Chennai, Best Dental Care Chennai, Trusted Dentist Chennai, Modern Dental Clinic Chennai, Advanced Dental Care Chennai" },
      { property: "og:title", content: "Contact EverSmile Implant Centre | Book Dental Appointment" },
      { property: "og:description", content: "Book your dental appointment for implants, root canals, braces, cosmetic & emergency dental care." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Field({ label, name, placeholder, type = "text", className = "", required = true }: { label: string; name: string; placeholder: string; type?: string; className?: string; required?: boolean }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input type={type} name={name} placeholder={placeholder} required={required} className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-brand" />
    </div>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-soft to-white py-10 text-center">
        <span className="eyebrow justify-center">Contact</span>
        <h1 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">Let's create your dream smile.</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">Book an appointment, ask a question, or simply say hello — we'd love to meet you.</p>
      </section>
      <section className="pb-16 pt-6 lg:pb-20 lg:pt-8">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal direction="left">
            <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
            <h2 className="font-display text-3xl">Book your appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll confirm via call or WhatsApp within 30 minutes.</p>
            <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="b39e6875-0139-44a3-8380-c486e83a7fd1" />
              <input type="hidden" name="subject" value="New Appointment Request — Ever Smile" />
              <input type="hidden" name="from_name" value="Ever Smile Website" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <Field label="Full Name" name="name" placeholder="Your Name" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
              <Field label="Your Email" name="email" type="email" placeholder="you@email.com" className="sm:col-span-2" />
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred Date</label>
                <div className="relative mt-2">
                  <CalendarDays className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  <input name="preferred_date" type="date" min={new Date().toISOString().split("T")[0]} className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand min-h-[46px]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Preferred Time</label>
                <div className="relative mt-2">
                  <Clock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  <input name="preferred_time" type="time" className="w-full rounded-xl border border-border bg-white pl-10 pr-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand min-h-[46px]" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us a little about what you're looking for…" className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand" />
              </div>
              <button disabled={status === "sending"} className="btn-primary sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold disabled:opacity-60">
                <Send className="h-4 w-4" /> {status === "sending" ? "Sending..." : "Make an Appointment"}
              </button>
              {status === "success" && (
                <p className="sm:col-span-2 text-sm font-medium text-green-600">Thank you! We've received your request and will be in touch shortly.</p>
              )}
              {status === "error" && (
                <p className="sm:col-span-2 text-sm font-medium text-red-600">Something went wrong. Please call us at +91 86680 62943.</p>
              )}
            </form>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="space-y-4">
            {[
              { icon: MapPin, title: "Visit", text: "No.14D, Basin Road, Thiruvottiyur, Chennai - 600019", href: "https://www.google.com/maps?q=No.14D,Basin+Road,Thiruvottiyur,Chennai+600019" },
              { icon: Phone, title: "Call", text: "+91 86680 62943", href: "tel:+918668062943" },
              { icon: MessageCircle, title: "WhatsApp", text: "+91 86680 62943", href: "https://wa.me/918668062943" },
              { icon: Mail, title: "Email", text: "eversmiledc01@gmail.com", href: "mailto:eversmiledc15@gmail.com" },
              { icon: Clock, title: "Hours", text: "Mon–Sat · 9:00 AM – 9:00 PM Sun· 9:00 AM-1:30 PM" },
            ].map((i) => (
              <div key={i.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><i.icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{i.title}</div>
                  {i.href ? (
                    <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel={i.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-1 block text-sm text-foreground hover:text-brand transition">
                      {i.text}
                    </a>
                  ) : (
                    <div className="mt-1 text-sm text-foreground">{i.text}</div>
                  )}
                </div>
              </div>
            ))}
            </div>
          </Reveal>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Ever Smile Implant Centre — Location"
              src="https://www.google.com/maps?q=No.14D,Basin+Road,Thiruvottiyur,Chennai+600019&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
