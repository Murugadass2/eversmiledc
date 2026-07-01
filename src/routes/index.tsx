import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-clinic.jpg";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import smile from "@/assets/smile-1.jpg";
import {
  ArrowRight, Award, Shield, Smile, Sparkles, Stethoscope, HeartHandshake,
  Microscope, Baby, Crown, Activity, Scissors, Accessibility, UserRound,
  Phone, CheckCircle2, Clock,
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
  { icon: Microscope, title: "Advanced Technology", desc: "Digital scanners, CBCT imaging and microscope-assisted precision." },
  { icon: HeartHandshake, title: "Pain-Free Treatments", desc: "Modern anaesthesia and gentle protocols for total comfort." },
  { icon: UserRound, title: "Personalized Care", desc: "Treatment plans built around your goals, lifestyle and budget." },
  { icon: Shield, title: "Sterile Environment", desc: "Hospital-grade sterilization and infection-control standards." },
  { icon: Stethoscope, title: "Transparent Pricing", desc: "Clear, upfront estimates with flexible financing options." },
];

const doctors = [
  {
    img: doctor1,
    name: "Dr. M. Wasimharoon",
    role: "Oral & Maxillofacial Surgeon",
    exp: "M.BDS, MDS, FMFT",
    bio: "Specialized expertise in dental implants, facial trauma management, wisdom tooth removal and a wide range of oral and maxillofacial surgical procedures. Committed to advanced, evidence-based surgical care tailored to each patient.",
    phone: "8668062943",
    email: "Wasimdoctor798@gmail.com",
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


function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-soft via-white to-white" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-brand/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-24">
          <div>
            <span className="eyebrow text-base"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> Premium Dental Care</span>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Creating beautiful smiles with  <em className="italic text-brand">advanced dental care.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Expert dental implants, cosmetic dentistry and complete oral healthcare solutions — delivered in a calm, luxury clinical environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                Book Appointment <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+918668062943" className="btn-outline inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[["Advanced Tech", "Digital scans & CBCT"], ["Fellowship-Trained", "Expert surgical team"], ["Pain-Free Care", "Gentle protocols"]].map(([t, l]) => (
                <div key={t}>
                  <div className="font-display text-base sm:text-lg text-brand-deep leading-tight">{t}</div>
                  <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
              <img src={heroImg} alt="Modern dental treatment room" className="h-[560px] w-full object-cover" width={1600} height={1100} />
            </div>
            <div className="absolute -left-6 bottom-10 hidden w-64 rounded-2xl bg-white p-5 shadow-lift sm:block animate-float">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand-soft text-brand"><Shield className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-semibold">ISO-certified</div>
                  <div className="text-xs text-muted-foreground">Sterile environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">A practice built on precision, comfort and trust.</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((f) => (
              <div key={f.title} className="group rounded-3xl border border-border bg-white p-8 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-gradient-to-b from-white to-brand-soft/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Specialities</span>
              <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Complete dental care under one roof.</h2>
            </div>
            <Link to="/specialities" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all">
              View all specialities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => {
              const slug = s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
              return (
              <Link to="/article/$slug" params={{ slug }} key={s.title} className="group rounded-2xl border border-border bg-white p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-deep text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                  Read article <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )})}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Meet Our Doctors</span>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Specialists who care as much as they craft.</h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 sm:grid-cols-2">
            {doctors.map((d) => (
              <div key={d.name} className="group overflow-hidden rounded-3xl bg-brand-soft/40">
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
            ))}
          </div>
        </div>
      </section>


      {/* SMILE GALLERY CTA */}
      <section className="section bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={smile} alt="Smile transformation" loading="lazy" width={1000} height={800} className="h-[500px] w-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Before & After</span>
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
        </div>
      </section>

      {/* EMERGENCY CTA */}
      <section className="bg-gradient-to-br from-brand to-brand-deep py-20 text-white">
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
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 hover:bg-white hover:text-brand-deep">
              <ArrowRight className="h-4 w-4" /> Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
