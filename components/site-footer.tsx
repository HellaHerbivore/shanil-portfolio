import { Linkedin, Mail } from "lucide-react";

const EMAIL = "shanilwijesinghe@gmail.com";
// TODO: replace with the exact LinkedIn profile URL.
const LINKEDIN_URL = "https://www.linkedin.com/in/shanil-wijesinghe";

export function SiteFooter() {
  return (
    <footer className="border-t py-10">
      <div className="container flex items-center justify-center gap-6 text-muted-foreground">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <Linkedin className="size-5" />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email"
          className="transition-colors hover:text-foreground"
        >
          <Mail className="size-5" />
        </a>
      </div>
    </footer>
  );
}
