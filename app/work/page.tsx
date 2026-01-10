import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { caseStudies } from "@/lib/site-data"
import { ArrowRight, TrendingUp } from "lucide-react"

export default function WorkPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Work"
            title="Projects that delivered results"
            subtitle="Explore case studies that showcase our approach and impact."
          />

          <div className="mt-12 space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="overflow-hidden">
                <div className="grid lg:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 lg:p-12">
                    <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {study.industry}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-foreground">{study.title}</h3>
                  </div>
                  <div className="col-span-2 p-8 lg:p-12">
                    <div className="grid gap-6 sm:grid-cols-3">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Challenge
                        </span>
                        <p className="mt-2 text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Solution
                        </span>
                        <p className="mt-2 text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Impact
                        </span>
                        <p className="mt-2 flex items-start gap-2 font-medium text-foreground">
                          <TrendingUp className="mt-0.5 h-4 w-4 text-primary" />
                          {study.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-foreground py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-background">Ready to become our next success story?</h2>
            <p className="mt-4 text-lg text-background/70">
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
