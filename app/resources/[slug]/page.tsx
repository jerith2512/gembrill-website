import { resources } from "@/lib/site-data"
import { Container, ButtonLink } from "@/components/ui-components"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { notFound } from "next/navigation"

export function generateStaticParams() {
    return resources.map((resource) => ({
        slug: resource.slug,
    }))
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const resource = resources.find((r) => r.slug === slug)

    if (!resource) {
        notFound()
    }

    return (
        <article className="py-20">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="mb-8">
                        <ButtonLink href="/resources" variant="outline" className="mb-8 inline-flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Resources
                        </ButtonLink>

                        <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Tag className="h-4 w-4" />
                                {resource.type}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {resource.date}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                            {resource.title}
                        </h1>
                        <p className="mt-4 text-xl text-muted-foreground">
                            {resource.description}
                        </p>
                    </div>

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: resource.content }}
                    />
                </div>
            </Container>
        </article>
    )
}
