import { Container, SectionTitle } from "@/components/ui-components"
import { processSteps } from "@/lib/site-data"

export function Process() {
  return (
    <section className="bg-muted/30 py-20">
      <Container>
        <SectionTitle
          eyebrow="Process"
          title="How we work together"
          subtitle="A proven methodology that balances speed with quality."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < processSteps.length - 1 && (
                <div className="absolute left-1/2 top-6 hidden h-0.5 w-[calc(100%+2rem)] -translate-y-1/2 bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
