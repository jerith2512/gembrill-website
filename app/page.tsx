import { Hero } from "@/components/sections/hero"
import { Metrics } from "@/components/sections/metrics"
import { BentoGrid } from "@/components/sections/bento-grid"
import { Process } from "@/components/sections/process"
import { WhyUs } from "@/components/sections/why-us"
import { CaseStudies } from "@/components/sections/case-studies"
import { Testimonials } from "@/components/sections/testimonials"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <BentoGrid />
      <Process />
      <WhyUs />
      <CaseStudies />
      <Testimonials />
      <FinalCTA />
    </>
  )
}
