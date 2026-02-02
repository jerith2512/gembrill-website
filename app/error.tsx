"use client"

import { useEffect } from "react"
import { Container } from "@/components/ui-components"
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Context: Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <Container>
            <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold">Something went wrong!</h2>
                <p className="mt-4 text-muted-foreground">
                    We apologize for the inconvenience. Please try again or contact support if the issue persists.
                </p>
                <div className="mt-8">
                    <Button onClick={() => reset()}>Try again</Button>
                </div>
            </div>
        </Container>
    )
}
