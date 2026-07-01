import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, Clock, MessageCircle, Send, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EverSmile Implant Centre | Book Dental Appointment" },
      { name: "description", content: "Contact EverSmile Implant Centre to schedule your dental appointment. Visit our clinic or call for dental implants, root canals, braces, cosmetic dentistry, and emergency dental care." },
      { name: "keywords", content: "Contact Dentist, Book Dental Appointment, Dental Clinic Near Me, Dentist Near Me, Dental Consultation, Emergency Dentist, Dental Hospital Contact, Schedule Dental Checkup, Dental Appointment, Dental Care Near Me, Best Dental Clinic in Chennai, Dentist in Chennai" },
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
      <PageHero eyebrow="Contact" title="Let's create your dream smile." subtitle="Book an appointment, ask a question, or simply say hello — we'd love to meet you." />
      <section className="pb-20 pt-8 lg:pb-24 lg:pt-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-border bg-white p-8 shadow-soft sm:p-10">
            <h2 className="font-display text-3xl">Book your appointment</h2>
            <p className="mt-2 text-sm text-muted-foreground">We'll confirm via call or WhatsApp within 30 minutes.</p>
            <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <input type="hidden" name="access_key" value="977fd0f3-da7c-4241-9a04-cf8b23e81596" />
              <input type="hidden" name="subject" value="New Appointment Request — Ever Smile" />
              <input type="hidden" name="from_name" value="Ever Smile Website" />
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <Field label="Full Name" name="name" placeholder="Your Name" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
              <Field label="Your Email" name="email" type="email" placeholder="you@email.com" className="sm:col-span-2" />
              <Field label="Preferred Date" name="preferred_date" placeholder="" type="date" required={false} />
              <Field label="Preferred Time" name="preferred_time" placeholder="" type="time" required={false} />
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us a little about what you're looking for…" className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none focus:border-brand" />
              </div>
              <button disabled={status === "sending"} className="btn-primary sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold disabled:opacity-60">
                <Send className="h-4 w-4" /> {status === "sending" ? "Sending..." : "Request Appointment"}
              </button>
              {status === "success" && (
                <p className="sm:col-span-2 text-sm font-medium text-green-600">Thank you! We've received your request and will be in touch shortly.</p>
              )}
              {status === "error" && (
                <p className="sm:col-span-2 text-sm font-medium text-red-600">Something went wrong. Please call us at +91 86680 62943.</p>
              )}
            </form>
          </div>

          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Visit", text: "No.14D, Basin Road, Thiruvottiyur, Chennai - 600019" },
              { icon: Phone, title: "Call", text: "+91 86680 62943" },
              { icon: MessageCircle, title: "WhatsApp", text: "+91 86680 62943" },
              { icon: Mail, title: "Email", text: "eversmiledc@gmail.com" },
              { icon: Clock, title: "Hours", text: "Mon–Sat · 9:00 AM – 8:00 PM · 24/7 Emergency" },
            ].map((i) => (
              <div key={i.title} className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand"><i.icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{i.title}</div>
                  <div className="mt-1 text-sm text-foreground">{i.text}</div>
                </div>
              </div>
            ))}
          </div>
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
