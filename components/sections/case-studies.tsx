import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { caseStudies } from "@/lib/site-data"
import { ArrowRight } from "lucide-react"

export function CaseStudies() {
  return (
    <section className="bg-muted/30 py-20">
      <Container>
        <SectionTitle
          eyebrow="Work"
          title="Proof that speaks to outcomes"
          subtitle="Real projects, real impact. Here's what we've delivered."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.title} className="flex flex-col">
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{study.industry}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{study.title}</h3>
                <div className="mt-4 flex-1 space-y-3">
                  <div>
                    <span className="text-xs font-medium uppercase text-muted-foreground">Challenge</span>
                    <p className="mt-1 text-sm text-muted-foreground">{study.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase text-muted-foreground">Solution</span>
                    <p className="mt-1 text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase text-muted-foreground">Impact</span>
                    <p className="mt-1 text-sm font-medium text-foreground">{study.impact}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/work" variant="outline">
            View All Case Studies
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
