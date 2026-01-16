"use client"

import { Container, ButtonLink } from "@/components/ui-components"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-32 sm:py-48"
      style={{ background: "#FF7518" }}
    >
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-6 inline-block rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-sm font-medium tracking-wide text-black/80 backdrop-blur-md">
          The Future of Engineering
        </span>

        <h1 className="text-balance bg-gradient-to-r from-black to-white bg-clip-text px-2 text-5xl font-bold tracking-tighter text-transparent sm:text-6xl lg:text-8xl">
          Digital <br className="hidden sm:block" />
          <span>Perfection.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-black/80 sm:text-2xl">
          We build, modernize, and QA software with predictable success and measurable ROI.
        </p>

        <div className="mt-10 flex gap-4">
          <ButtonLink
            href="/contact"
            className="rounded-full bg-white px-8 py-6 text-base text-[#FF6B00] shadow-lg transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Start Project
          </ButtonLink>
          <ButtonLink
            href="/work"
            variant="outline"
            className="rounded-full border-black/30 px-8 py-6 text-base text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
