import type React from "react"
import Image from "next/image"
import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { companyContent } from "@/lib/site-data"
import { ArrowRight, Shield, Sparkles } from "lucide-react"

export default function CompanyPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Engineering excellence, delivered
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We're a team of senior engineers passionate about building software that works. For over 12 years, we've
              helped companies modernize legacy systems, ship new products, and build QA programs that catch bugs
              before users do.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground">About Gembrill</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              {companyContent.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-20">
        <Container>
          <SectionTitle
            eyebrow="Value Proposition"
            title="Strategic partnerships that deliver results"
            subtitle={companyContent.valueProposition.description}
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {companyContent.valueProposition.points.map((point) => (
              <Card key={point.title} className="bg-background">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
                  <p className="mt-4 text-muted-foreground">{point.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="rounded-3xl bg-primary px-6 py-16 text-center shadow-lg sm:px-12">
            <h2 className="text-3xl font-bold text-primary-foreground">Our Mission</h2>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium leading-relaxed text-primary-foreground/90">
              "{companyContent.mission}"
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-20">
        <Container>
          <SectionTitle
            eyebrow="Quality"
            title="Quality integrated into every phase"
            subtitle={companyContent.quality.description}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {companyContent.quality.phases.map((phase) => (
              <div key={phase.phase} className="rounded-xl border border-border bg-background p-6 text-center shadow-sm">
                <Shield className="mx-auto h-10 w-10 text-primary" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{phase.phase}</h3>
                <p className="mt-2 text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Methodology"
                title="Structured for predictable delivery"
                subtitle={companyContent.methodology.description}
                align="left"
              />
              <ul className="mt-8 space-y-4">
                {companyContent.methodology.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Key Outcomes</h3>
              <ul className="mt-6 space-y-4">
                {companyContent.methodology.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-foreground py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-background">Want to join our team?</h2>
            <p className="mt-4 text-lg text-background/70">
              We're always looking for talented engineers who share our values.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
