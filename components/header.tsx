"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { nav } from "@/lib/site-data"
import { Container, ButtonLink } from "./ui-components"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl shadow-sm transition-all duration-300"
    >
      <Container>
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Gembrill"
              width={96}
              height={96}
              className="h-24 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="/contact" variant="primary">
              Get Started
            </ButtonLink>
          </div>

          <button
            className="rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-border py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4 px-4">
                <ButtonLink href="/contact" variant="primary" className="w-full justify-center">
                  Get Started
                </ButtonLink>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}
