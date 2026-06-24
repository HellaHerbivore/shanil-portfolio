import Link from "next/link";

const footerLinks = [
  { label: "Social", href: "https://www.linkedin.com" },
  { label: "Links", href: "/" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="container flex items-center justify-center gap-3 text-sm text-muted-foreground">
        {footerLinks.map((item, i) => (
          <div key={item.label} className="flex items-center gap-3">
            {i > 0 && <span className="text-border">|</span>}
            <Link
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
}
