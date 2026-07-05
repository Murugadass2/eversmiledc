import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Phone, Mail, Clock, Youtube, MapPin } from "lucide-react";

const socials = [
  { Icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { Icon: Instagram, href: "https://www.instagram.com/eversmile_dc?igsh=MXJweDNramxpM3FwcA==", label: "Instagram", color: "#E1306C" },
  { Icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { Icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-gradient-to-b from-white to-brand-soft">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/eversmile-logo.png" alt="Ever Smile Implant Centre" className="h-[4.5rem] w-auto object-contain" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              World-class dental care delivered with advanced technology and a patient-first philosophy. Crafting confident smiles, one patient at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full text-white shadow-soft transition hover:scale-110"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {([["/", "Home"], ["/about", "About Us"], ["/specialities", "Specialities"], ["/gallery", "Gallery"], ["/blog", "Blog"], ["/contact", "Contact"]] as [string, string][]).map(([to, label]) => (
                <li key={to}><Link to={to} className="transition hover:text-brand">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Specialities</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {["Dental Implants", "Orthodontics", "Cosmetic Dentistry", "Endodontics", "Maxillofacial Surgery", "Pediatric Dentistry"].map((s) => (
                <li key={s}><Link to="/specialities" className="transition hover:text-brand">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Reach Us</h4>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                <a href="https://www.google.com/maps?q=No.14D,Basin+Road,Thiruvottiyur,Chennai+600019" target="_blank" rel="noopener noreferrer" className="transition hover:text-brand">
                  No.14D, Basin Road, Thiruvottiyur, Chennai - 600019
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                <a href="tel:+918668062943" className="transition hover:text-brand">+91 86680 62943</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                <a href="mailto:eversmiledc15@gmail.com" className="transition hover:text-brand">eversmiledc15@gmail.com</a>
              </li>
              <li className="flex gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand mt-0.5" />
                <span>Mon–Sat : 9:00 – 9:00 <br /> Sun : 9:00 – 1:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ever Smile Implant Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand">Privacy Policy</a>
            <a href="#" className="hover:text-brand">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
