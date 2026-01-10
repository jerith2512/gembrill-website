import type React from "react"
import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { resources } from "@/lib/site-data"
import { ArrowRight, FileText, BookOpen, Wrench, CheckSquare, Mail, Phone } from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  Guide: <BookOpen className="h-5 w-5" />,
  Article: <FileText className="h-5 w-5" />,
  Tool: <Wrench className="h-5 w-5" />,
  Checklist: <CheckSquare className="h-5 w-5" />,
}

export default function ResourcesPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <SectionTitle
            eyebrow="Resources"
            title="Insights and tools"
            subtitle="Practical guides and resources to help you build better software."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {resources.map((resource) => (
              <Card key={resource.title} className="group">
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {iconMap[resource.type]}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{resource.title}</h3>
                  <p className="mt-2 text-muted-foreground">{resource.description}</p>
                  <div className="mt-4">
                    <ButtonLink
                      href={`/resources/${resource.slug}`}
                      variant="primary"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section >

      <section className="border-t border-border bg-muted/30 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground">Have questions?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Need help with modernization, QA, or DevOps? We're here to help you succeed.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex flex-col items-center gap-4 rounded-xl border border-border bg-card px-8 py-6 text-lg font-medium text-foreground shadow-sm sm:flex-row sm:gap-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@gembrill.com</span>
                </div>
                <div className="hidden h-6 w-px bg-border sm:block" />
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 44 4296 9596</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
