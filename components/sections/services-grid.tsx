import type React from "react"
import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { services } from "@/lib/site-data"
import { ArrowRight, Code, Layout, Cpu, ShieldCheck, Headphones, Handshake } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "product-engineering": <Cpu className="h-5 w-5" />,
  "software-development": <Code className="h-5 w-5" />,
  "intelligent-portals": <Layout className="h-5 w-5" />,
  "software-testing": <ShieldCheck className="h-5 w-5" />,
  "bpo-services": <Headphones className="h-5 w-5" />,
  "outsourcing": <Handshake className="h-5 w-5" />,
}

export function ServicesGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Solutions"
          title="Intelligent Services for Future-Ready Business"
          subtitle="Choose a capability, see AI-driven outcomes, and move quickly into a structured discovery."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="group flex flex-col">
              <div className="flex flex-1 flex-col p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {iconMap[service.slug]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.outcome}</p>
                <ul className="mt-4 flex-1 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={typeof bullet === "string" ? bullet : bullet.text} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {typeof bullet === "string" ? (
                        bullet
                      ) : (
                        <a href={bullet.href} className="hover:text-primary hover:underline transition-colors">
                          {bullet.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <ButtonLink
                    href={`/services#${service.slug}`}
                    variant="secondary"
                    className="group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
