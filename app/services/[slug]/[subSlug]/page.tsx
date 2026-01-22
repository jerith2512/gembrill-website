import { notFound } from "next/navigation"
import { subServices, services } from "@/lib/site-data"
import { Container, ButtonLink } from "@/components/ui-components"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { LifecycleDiagram } from "@/components/sections/testing-lifecycle"

export async function generateStaticParams() {
    return subServices.map((service) => ({
        slug: service.parentSlug,
        subSlug: service.slug,
    }))
}

export default async function SubServicePage(props: { params: Promise<{ slug: string; subSlug: string }> }) {
    const params = await props.params
    const service = subServices.find((s) => s.slug === params.subSlug && s.parentSlug === params.slug)
    const parentService = services.find((s) => s.slug === params.slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-muted/30 py-20">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <Link
                            href={`/services#${service.parentSlug}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to {parentService?.title || "Services"}
                        </Link>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{service.title}</h1>
                        <p className="mt-6 text-xl text-muted-foreground">{service.outcome}</p>
                    </div>
                </Container>
            </section>

            <section className="py-20">
                <Container>
                    <div className="mx-auto max-w-4xl">
                        <div className="bg-card rounded-2xl border border-border p-8 shadow-sm mb-12">
                            <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">{service.detailedDescription}</p>
                        </div>

                        {service.lifecycle && (
                            <div className="mb-12">
                                <LifecycleDiagram data={service.lifecycle} />
                            </div>
                        )}

                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground">Why Gembrill</h2>
                                <ul className="space-y-4">
                                    {service.bullets.map((bullet, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <CheckCircle className="h-6 w-6 text-primary" />
                                            </div>
                                            <span className="text-lg text-foreground">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 flex flex-col justify-center items-center text-center">
                                <h3 className="text-2xl font-bold text-primary mb-4">Ready to start?</h3>
                                <p className="text-muted-foreground mb-8">
                                    Get in touch with our team to discuss how we can help you achieve your goals.
                                </p>
                                <ButtonLink href="/contact" variant="primary" className="w-full sm:w-auto">
                                    Contact Us
                                    <ArrowRight className="h-4 w-4" />
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
