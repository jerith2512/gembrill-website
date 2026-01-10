import { Container, ButtonLink } from "@/components/ui-components"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
            <Container>
                <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
                        <FileQuestion className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Page not found</h1>
                    <p className="text-lg text-muted-foreground">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                    <div className="flex gap-4">
                        <ButtonLink href="/" variant="primary">
                            Go back home
                        </ButtonLink>
                        <ButtonLink href="/contact" variant="outline">
                            Contact support
                        </ButtonLink>
                    </div>
                </div>
            </Container>
        </div>
    )
}
