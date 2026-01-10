import { Container, ButtonLink } from "@/components/ui-components"
import { ArrowRight, Calendar } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-foreground py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl text-balance">
            Ready to ship software with confidence?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-background/70 text-pretty">
            Let's discuss your project. No pressure, no obligations — just a conversation about what you're building.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="/contact"
              variant="primary"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              <Calendar className="h-4 w-4" />
              Schedule a Call
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="outline"
              className="border-background/30 text-background hover:bg-background hover:text-foreground bg-transparent"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
