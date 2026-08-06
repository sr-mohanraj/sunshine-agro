import { Mail, Phone, ShieldCheck } from "lucide-react";
import company from "@/data/company.json";

export function TopBar() {
  return (
    <div className="container-page flex h-10 items-center justify-between gap-4 text-[11.5px] text-bone-200/70">
      <p className="flex items-center gap-1.5 whitespace-nowrap font-mono uppercase tracking-[0.12em]">
        <ShieldCheck className="h-3.5 w-3.5 text-sun-400" aria-hidden />
        <span className="hidden sm:inline">An ISO 9001:2015 certified company</span>
        <span className="sm:hidden">ISO 9001:2015</span>
      </p>
      <div className="flex items-center gap-4">
        <a
          href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
          className="focus-ring flex items-center gap-1.5 rounded transition-colors hover:text-sun-300"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden />
          {company.contact.phone}
        </a>
        <a
          href={`mailto:${company.contact.email}`}
          className="focus-ring hidden items-center gap-1.5 rounded transition-colors hover:text-sun-300 md:flex"
        >
          <Mail className="h-3.5 w-3.5" aria-hidden />
          {company.contact.email}
        </a>
      </div>
    </div>
  );
}
