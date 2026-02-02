import Link from "next/link"
import Image from "next/image"
import { Container } from "./ui-components"
import { nav, services } from "@/lib/site-data"
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-24 pb-12">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Gembrill"
                width={96}
                height={96}
                className="h-24 w-auto opacity-90 transition-opacity hover:opacity-100"
              />
            </Link>
            <p className="mt-6 text-base font-medium leading-relaxed text-black max-w-xs">
              Engineering the future of digital experiences with precision and clarity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Navigation</h3>
            <ul className="mt-6 space-y-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-base text-black transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Services</h3>
            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-base text-black hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="text-base text-black">
                <span className="mb-2 block font-medium text-foreground">Gembrill Technologies India Private Limited.</span>
                01, First Floor, OMS Court, Nathamuni Street, GN Chetty Road, T.Nagar, Chennai - 600 017, Tamil Nadu, India
              </li>
              <li className="text-base text-black">
                <a href="tel:+919600010212" className="hover:text-primary transition-colors">+91 96000 10212</a>
              </li>
              <li className="text-base text-black">
                <a href="mailto:info@gembrill.com" className="hover:text-primary transition-colors">info@gembrill.com</a>
              </li>
              <li>
                <Link href="/contact" className="text-base font-medium text-primary hover:text-primary/80">
                  Get in touch &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-black">© {new Date().getFullYear()} Gembrill. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="https://www.facebook.com/gembrill.india/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-primary"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/GembrillIndia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-primary"
              aria-label="X (Twitter)"
            >
              {/* Custom X icon using SVG since standard Lucide might be older Twitter bird */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/gembrill-technologies-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <div className="h-4 w-px bg-border/40" />
            <Link href="/privacy" className="text-sm text-black hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-black hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer >
  )
}
