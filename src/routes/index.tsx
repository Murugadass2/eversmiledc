import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroImg from "@/assets/hero-clinic.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import specCosmetic from "@/assets/spec-cosmetic.jpg";
import specImplants from "@/assets/spec-implants.jpg";
import specMaxfac from "@/assets/spec-maxfac.jpg";
import specOrtho from "@/assets/spec-ortho.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import smile from "@/assets/smile-1.jpg";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowRight, Award, Shield, Smile, Sparkles, Stethoscope, HeartHandshake,
  Microscope, Baby, Crown, Activity, Scissors, Accessibility, UserRound,
  Phone, CheckCircle2, Clock, Send, CalendarDays, ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EverSmile Implant Centre | Best Dental Clinic & Dental Implant Hospital" },
      { name: "description", content: "EverSmile Implant Centre offers dental implants, root canal treatment, cosmetic dentistry, orthodontics, teeth whitening, pediatric dentistry, and emergency dental care with experienced dentists." },
      { name: "keywords", content: "EverSmile Implant Centre, Dental Clinic, Dental Hospital, Best Dentist, Dental Implant Centre, Family Dental Clinic, Smile Makeover, Cosmetic Dentist, Emergency Dental Care, Oral Health Clinic, Teeth Cleaning, Tooth Extraction, Root Canal Treatment, Dental Crown, Dental Bridge, Dental Veneers, Teeth Whitening, Gum Treatment, Dental Checkup, Affordable Dental Care, Best Dental Clinic in Chennai, Dentist Near Me" },
      { property: "og:title", content: "EverSmile Implant Centre | Best Dental Clinic & Dental Implant Hospital" },
      { property: "og:description", content: "Dental implants, root canal, cosmetic dentistry, orthodontics, teeth whitening & emergency dental care by experienced dentists." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  { icon: ShieldCheck, title: "Preventive Dentistry", desc: "Routine check-ups, professional cleaning, fluoride therapy and sealants to keep your smile healthy." },
  { icon: Sparkles, title: "Dental Implants", desc: "Single, multiple & full-mouth implant solutions with immediate loading options." },
  { icon: Smile, title: "Cosmetic Dentistry", desc: "Smile makeovers, veneers, whitening and contouring tailored to you." },
  { icon: Activity, title: "Orthodontics", desc: "Clear aligners, ceramic braces and Invisalign-style treatments." },
  { icon: Microscope, title: "Endodontics", desc: "Microscope-assisted root canal therapy and apicoectomy." },
  { icon: Crown, title: "Prosthodontics", desc: "Crowns, bridges, dentures & full-mouth rehabilitation." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle dental care, fluoride and sealants for children." },
  { icon: Scissors, title: "Maxillofacial Surgery", desc: "Wisdom teeth, jaw surgery, oral pathology & reconstruction." },
  { icon: Accessibility, title: "Inclusive Care", desc: "Specialized care for differently-abled and geriatric patients." },
];

const whyUs = [
  { icon: Award, title: "Experienced Specialists", desc: "A multidisciplinary team with 5+ years of combined expertise." },
  { icon: Microscope, title: "Advanced Technology", desc: "Digital scanners." },
  { icon: HeartHandshake, title: "Pain-Free Treatments", desc: "Modern anaesthesia and gentle protocols for total comfort." },
  { icon: UserRound, title: "Personalized Care", desc: "Treatment plans built around your goals, lifestyle and budget." },
  { icon: Shield, title: "Sterile Environment", desc: "Hospital-grade sterilization and infection-control standards." },
  { icon: Stethoscope, title: "Transparent Pricing", desc: "Clear, upfront estimates with flexible financing options." },
];

const doctors = [
  {
    img: doctor1,
    name: "Dr. M. Wasimharoon",
    role: (
      <>
        Oral & Maxillofacial Surgeon
        <br />
        Fellowship in Maxillofacial Trauma
      </>
    ),
    exp: "BDS, MDS, FMFT",
    bio: "Specialized expertise in dental implants, facial trauma management, wisdom tooth removal and a wide range of oral and maxillofacial surgical procedures. Committed to advanced, evidence-based surgical care tailored to each patient.",
    phone: "8668062943",
    email: "wasimdoctor798@gmail.com",
  },
  {
    img: doctor2,
    name: "Dr. H. Fahmeedha Ishrath",
    role: "Public Health Dentist",
    exp: "BDS, MDS",
    bio: "Dedicated to delivering evidence-based and patient-centered dental care. Believes that prevention and patient education are the foundations of lifelong oral health — helping individuals achieve healthy, confident smiles.",
    phone: "9003441916",
    email: "fahmeeish786@gmail.com",
  },
];

function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <input type="hidden" name="access_key" value="977fd0f3-da7c-4241-9a04-cf8b23e81596" />
      <input type="hidden" name="subject" value="New Appointment Request — Ever Smile (Home)" />
      <input type="hidden" name="from_name" value="Ever Smile Website" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Full Name</label>
        <input name="name" required placeholder="Your name" className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand" />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
        <input name="phone" required placeholder="+91 …" className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand" />
      </div>
      <div className="sm:col-span-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</label>
        <input name="email" type="email" required placeholder="you@email.com" className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand" />
      </div>
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
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message (optional)</label>
        <textarea name="message" rows={3} placeholder="Tell us a bit about your concern…" className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-1 focus:ring-brand resize-none" />
      </div>
      <button disabled={status === "sending"} className="sm:col-span-2 btn-primary inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition hover:scale-[1.02] disabled:opacity-60">
        <Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Make an Appointment"}
      </button>
      {status === "success" && <p className="sm:col-span-2 text-sm font-medium text-green-600">✓ Thank you! We'll confirm within 30 minutes.</p>}
      {status === "error" && <p className="sm:col-span-2 text-sm font-medium text-red-600">Something went wrong. Please call +91 86680 62943.</p>}
    </form>
  );
}

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [heroImg, clinicInterior, specCosmetic, specImplants, specMaxfac, specOrtho];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-soft via-white to-white" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-6 pb-16 lg:pt-10 lg:pb-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12">
          <div>
            <Reveal>
              <span className="eyebrow text-base"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> Premium Dental Care</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-7xl">
                Creating beautiful smiles with <em className="italic text-brand">advanced dental care.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Expert Preventive Dentistry, dental implants, cosmetic dentistry and complete oral healthcare solutions — delivered in a calm, luxury clinical environment.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#book-appointment" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+918668062943" className="btn-outline inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2 border-t border-border pt-8">
                {[["Advanced Tech", "Digital scans & CBCT"], ["Fellowship-Trained", "Expert surgical team"], ["Pain-Free Care", "Gentle protocols"]].map(([t, l]) => (
                  <div key={t}>
                    <div className="font-display text-base sm:text-base lg:text-lg text-brand-deep leading-tight">{t}</div>
                    <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal direction="right" delay={100}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-lift bg-brand-soft/30 mx-0 sm:mx-0" style={{ aspectRatio: "4/3", minHeight: "260px" }}>
                {heroSlides.map((slide, index) => (
                  <img
                    key={slide}
                    src={slide}
                    alt={`Dental clinic preview ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>
              <div className="absolute -left-6 bottom-10 hidden w-64 rounded-2xl glass-card p-5 sm:block animate-float">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand"><Shield className="h-5 w-5" /></div>
                  <div>
                    <div className="text-sm font-semibold">ISO-certified</div>
                    <div className="text-xs text-muted-foreground">Sterile environment</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* WHY US */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">A practice built on precision, comfort and trust.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group h-full rounded-3xl border border-border bg-white p-8 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* SERVICES */}
      <section className="section bg-gradient-to-b from-white to-brand-soft/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="eyebrow">Our Specialities</span>
                <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Complete dental care under one roof.</h2>
              </div>
              <Link to="/specialities" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all">
                View all specialities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const slug = s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
                <Reveal key={s.title} delay={i * 60}>
                  <Link to="/article/$slug" params={{ slug }} className="group block h-full rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lift">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                      Read article <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Meet Our Doctors</span>
              <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Specialists who care as much as they craft.</h2>
            </div>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2">
            {doctors.map((d, i) => (
              <Reveal key={d.name} direction={i % 2 === 0 ? "left" : "right"} delay={i * 120}>
                <div className="group overflow-hidden rounded-3xl bg-brand-soft/40">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={d.img} alt={d.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl">{d.name}</h3>
                    <p className="mt-1 text-sm text-brand">{d.role}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{d.exp}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/75">{d.bio}</p>
                    <div className="mt-5 flex flex-wrap gap-3 text-xs">
                      <a href={`tel:+91${d.phone}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-brand-deep shadow-soft hover:bg-brand hover:text-white transition">
                        <Phone className="h-3.5 w-3.5" /> +91 {d.phone}
                      </a>
                      <a href={`mailto:${d.email}`} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-brand-deep shadow-soft hover:bg-brand hover:text-white transition">
                        ✉ {d.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* BOOK APPOINTMENT — HOME */}
      <section id="book-appointment" className="relative overflow-hidden py-24 bg-white">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            {/* Left info */}
            <Reveal direction="left">
              <div>
                <span className="eyebrow"><CalendarDays className="h-3.5 w-3.5" /> Book Appointment</span>
                <h2 className="mt-5 font-display text-4xl sm:text-5xl text-foreground leading-tight">
                  Your smile journey starts here.
                </h2>
                <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                  Fill out the form and our team will confirm your appointment within 30 minutes via call or WhatsApp.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Clock, text: "Mon – Sat · 9 AM – 9 PM \n Sun · 9 AM – 1.30 PM" },
                    { icon: Phone, text: "+91 86680 62943", href: "tel:+918668062943" },
                    { icon: CheckCircle2, text: "24 / 7 Emergency Available" },
                  ].map(({ icon: Icon, text, href }) => (
                    <div key={text} className="flex items-center gap-3 text-foreground/80 text-sm font-medium">
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-soft text-brand">
                        <Icon className="h-4 w-4" />
                      </span>
                      {href ? <a href={href} className="hover:text-brand transition">{text}</a> : text}
                    </div>
                  ))}
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft h-32 max-w-sm w-full">
                  <iframe
                    title="Ever Smile Implant Centre — Location"
                    src="https://www.google.com/maps?q=No.14D,Basin+Road,Thiruvottiyur,Chennai+600019&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </Reveal>

            {/* Form card */}
            <Reveal direction="right" delay={100}>
              <div className="rounded-3xl border border-border bg-white shadow-soft p-8 sm:p-10">
                <h3 className="font-display text-2xl text-foreground">Make an Appointment</h3>
                <p className="mt-1 text-sm text-muted-foreground">We confirm within 30 minutes.</p>
                <div className="mt-6">
                  <AppointmentForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-5xl" />

      {/* SMILE GALLERY CTA */}
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={smile} alt="Smile transformation" loading="lazy" width={1000} height={800} className="h-[500px] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div>
              <span className="eyebrow">Before &amp; After</span>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">Transformations that change lives.</h2>
              <p className="mt-5 text-lg text-muted-foreground">From subtle whitening to full smile makeovers — see how beautiful smiles transform lives.</p>
              <ul className="mt-6 space-y-3">
                {["Digital smile design preview", "Minimally invasive procedures", "Lifetime warranty on implants"].map((p) => (
                  <li key={p} className="flex items-center gap-3 text-foreground/80"><CheckCircle2 className="h-5 w-5 text-brand" /> {p}</li>
                ))}
              </ul>
              <Link to="/gallery" className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                View Smile Gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-deep py-20 text-white">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center md:flex-row md:text-left">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest">
                <Clock className="h-3.5 w-3.5" /> 24/7 Available Emergency
              </span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-white">Dental emergency? We're here for you.</h2>
              <p className="mt-3 max-w-xl text-white/80">Fast-track appointments for accidents, severe pain and trauma cases — any time, day or night.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="tel:+918668062943" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-deep transition hover:scale-105">
                <Phone className="h-4 w-4" /> Call Emergency Line
              </a>
              <a href="#book-appointment" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-deep transition hover:scale-105">
                <ArrowRight className="h-4 w-4" /> Book Appointment
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
