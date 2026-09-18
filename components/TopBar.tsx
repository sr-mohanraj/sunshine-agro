import { Mail, Phone } from "lucide-react";
import company from "@/data/company.json";
import { telHref } from "@/lib/site";

export function TopBar() {
  const { mobiles, email } = company.contact;
  return (
    <div className="bg-ink text-xs text-ink-100">
      <div className="container-page flex min-h-[36px] items-center justify-between gap-4">
        <p className="hidden sm:block">Chennai and Erode, Tamil Nadu, India</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a href={telHref(mobiles[0])} className="focus-ring inline-flex min-h-[44px] items-center gap-1.5 rounded py-1.5 hover:text-white sm:min-h-0">
            <Phone className="h-3.5 w-3.5" aria-hidden />
            {mobiles[0]}
          </a>
          <a href={`mailto:${email}`} className="focus-ring hidden items-center gap-1.5 rounded py-1.5 hover:text-white md:inline-flex">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
