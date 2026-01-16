import type React from "react"
import Image from "next/image"
import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { services } from "@/lib/site-data"
import { ArrowRight, Code, CheckCircle, Layout, Cpu, ShieldCheck, Headphones, Handshake } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "product-engineering": <Cpu className="h-6 w-6" />,
  "software-development": <Code className="h-6 w-6" />,
  "portal-development": <Layout className="h-6 w-6" />,
  "software-testing": <ShieldCheck className="h-6 w-6" />,
  "bpo-services": <Headphones className="h-6 w-6" />,
  "outsourcing": <Handshake className="h-6 w-6" />,
}

export default function ServicesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Services"
            title="Services that deliver outcomes"
            subtitle="From product engineering to QA automation, we help you build software that works."
          />
        </Container>
      </section>

      <section className="border-t border-border">
        {services.map((service, index) => (
          <div key={service.slug} id={service.slug} className={index % 2 === 1 ? "bg-muted/30" : ""}>
            <Container className="py-16">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    {iconMap[service.slug]}
                  </div>
                  <h2 className="mt-6 text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{service.outcome}</p>
                  <ul className="mt-6 space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <ButtonLink href={`/services/${service.slug}`} variant="primary">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video w-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-foreground py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-background">Not sure which service fits?</h2>
            <p className="mt-4 text-lg text-background/70">
              Schedule a free discovery call and we'll help you identify the right approach.
            </p>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="primary">
                Book a Discovery Call
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
