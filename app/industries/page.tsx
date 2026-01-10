import type React from "react"
import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { industries } from "@/lib/site-data"
import { ArrowRight, Heart, DollarSign, ShoppingCart, Building2, Briefcase, Cpu } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Healthcare: <Heart className="h-6 w-6" />,
  "Financial Services": <DollarSign className="h-6 w-6" />,
  "E-commerce": <ShoppingCart className="h-6 w-6" />,
  "Enterprise Software": <Building2 className="h-6 w-6" />,
  "Professional Services": <Briefcase className="h-6 w-6" />,
  Technology: <Cpu className="h-6 w-6" />,
}

export default function IndustriesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Industries"
            title="Deep expertise across sectors"
            subtitle="We understand the unique challenges and requirements of your industry."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card key={industry.name} className="group">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {iconMap[industry.name]}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{industry.name}</h3>
                  <p className="mt-2 text-muted-foreground">{industry.description}</p>
                  <div className="mt-4">
                    <ButtonLink
                      href="/contact"
                      variant="secondary"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Don't see your industry?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our methodologies adapt to any sector. Let's talk about your specific needs.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
