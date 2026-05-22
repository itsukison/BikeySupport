import Link from "next/link";

const pages = [
  {
    href: "/privacy",
    title: "Privacy Policy",
    description: "How Bikey handles typed content, accounts, and app data.",
  },
  {
    href: "/support",
    title: "Support",
    description: "Setup steps, full access notes, and troubleshooting.",
  },
  {
    href: "/terms",
    title: "Terms of Use",
    description: "The terms that apply when using Bikey.",
  },
];

export default function Home() {
  return (
    <section className="page">
      <div className="card">
        <p className="eyebrow">Bikey</p>
        <h1>Legal and Support</h1>
        <p className="lead">
          Bikey is a bilingual keyboard app for typing Japanese and English
          together. Use these pages for App Store review, in-app settings, and
          user support.
        </p>

        <div className="link-grid">
          {pages.map((page) => (
            <Link className="link-card" href={page.href} key={page.href}>
              {page.title}
              <span>{page.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
