import type React from "react"
import Image from "next/image"
import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { companyValues, metrics } from "@/lib/site-data"
import { ArrowRight, Shield, Sparkles, TrendingUp, Heart, Rocket, Users, ClipboardCheck, Cpu } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "Our Mission": <Rocket className="h-6 w-6" />,
  "Customer Partnership": <Users className="h-6 w-6" />,
  "Process Adherence": <ClipboardCheck className="h-6 w-6" />,
  "Complex Solutions": <Cpu className="h-6 w-6" />,
}

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

      <section className="border-y border-border bg-muted/30 py-12">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-primary sm:text-4xl">{metric.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Values"
            title="What we stand for"
            subtitle="These principles guide how we work and what we deliver."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value) => (
              <Card key={value.title}>
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    {iconMap[value.title]}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted/30 py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Approach</span>
              <h2 className="mt-4 text-3xl font-bold text-foreground">Built different, on purpose</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We don't believe in black-box engagements or junior-heavy teams. When you work with Gembrill, you get
                direct access to senior engineers who've seen it all and know how to ship.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  Senior engineers on every project
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  Transparent pricing and timelines
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  Clear deliverables at every milestone
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  Direct communication, no middlemen
                </li>
              </ul>
            </div>
            <Card className="overflow-hidden">
              <Image
                src="/images/diff_approach.png"
                alt="Our Approach"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </Card>
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
                View Open Positions
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
