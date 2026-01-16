import { Container, SectionTitle, Card } from "@/components/ui-components"
import { testimonials } from "@/lib/site-data"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Client Speak"
          className="text-left md:text-center"
        />

        <div className="mt-12 grid gap-6 grid-cols-1 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.quote} className="h-full">
              <div className="flex h-full flex-col p-6">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 flex-1 text-lg leading-relaxed text-foreground">"{testimonial.quote}"</p>
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
