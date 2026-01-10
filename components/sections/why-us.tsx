import { Container, SectionTitle, Card } from "@/components/ui-components"
import { whyUs } from "@/lib/site-data"
import { Target, Rocket, Gem, Shield } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  "Predictable Success": <Target className="h-5 w-5" />,
  "Time-to-Market": <Rocket className="h-5 w-5" />,
  "Quality & Cost": <Gem className="h-5 w-5" />,
  "IP Protection": <Shield className="h-5 w-5" />,
}

export function WhyUs() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          eyebrow="Why Gembrill"
          title="What sets us apart"
          subtitle="We focus on outcomes, not outputs. Here's what you can expect."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item) => (
            <Card key={item.title}>
              <div className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {iconMap[item.title]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
