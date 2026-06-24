export const metadata = {
  title: "Contact — Shanil Wijesinghe",
};

export default function ContactPage() {
  return (
    <div className="container max-w-2xl py-20 animate-fade-in-up opacity-0">
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        Contact
      </h1>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        Get in touch at{" "}
        <a
          href="mailto:shanilwijesinghe2@gmail.com"
          className="font-medium text-foreground underline underline-offset-4"
        >
          shanilwijesinghe2@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
