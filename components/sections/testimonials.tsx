import { Container, SectionTitle, Card } from "@/components/ui-components"
import { testimonials } from "@/lib/site-data"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Trust"
          title="What clients value most"
          subtitle="Hear from engineering leaders who've worked with us."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.quote}>
              <div className="p-6">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-lg leading-relaxed text-foreground">"{testimonial.quote}"</p>
                <div className="mt-6 border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
