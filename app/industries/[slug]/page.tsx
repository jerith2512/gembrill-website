import { notFound } from "next/navigation"
import { Container, SectionTitle, ButtonLink } from "@/components/ui-components"
import { industries } from "@/lib/site-data"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"

export function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }))
}

export default async function IndustryPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params
    const industry = industries.find((i) => i.slug === params.slug)

    if (!industry) {
        notFound()
    }

    return (
        <>
            <section className="bg-muted/30 py-20">
                <Container>
                    <div className="mb-8">
                        <ButtonLink href="/industries" variant="ghost" className="pl-0 hover:bg-transparent">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Industries
                        </ButtonLink>
                    </div>
                    <SectionTitle
                        eyebrow="Industry Expertise"
                        title={industry.name}
                        subtitle={industry.description}
                        align="left"
                    />
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground">Overview</h2>
                            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                                {industry.detailedDescription}
                            </p>

                            <div className="mt-8">
                                <ButtonLink href="/contact" variant="primary">
                                    Learn More
                                    <ArrowRight className="h-4 w-4" />
                                </ButtonLink>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                            <h3 className="text-xl font-semibold text-foreground">Key Focus Areas</h3>
                            <ul className="mt-6 space-y-4">
                                {industry.bullets?.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span className="text-muted-foreground">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
