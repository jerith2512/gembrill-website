
import { Container } from "@/components/ui-components"
import Link from "next/link"
import Image from "next/image"

export default function TermsOfService() {
    return (
        <div className="pt-24 pb-20">
            <Container className="max-w-4xl">
                <div className="space-y-6">
                    <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                        <Image
                            src="/logo.png"
                            alt="Gembrill"
                            width={96}
                            height={96}
                            className="h-24 w-auto"
                            priority
                        />
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
                    <div className="space-y-4">
                        <p className="text-lg font-medium text-foreground">
                            By accessing and using this Site, you agree to these Terms.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Gembrill Technologies India Private Limited, and its affiliates ("Gembrill" or "we"), provides its content
                            on this Web site (the "Site") subject to the following terms and conditions (the "Terms"). We may
                            periodically change the Terms, so please check back from time to time. By accessing and using this Site, you
                            agree to these Terms. For an explanation of Gembrill's practices and policies related to the collection,
                            use, and storage of our users' information, please read our Privacy Policy.
                        </p>
                    </div>
                </div>

                <div className="mt-16 space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Copyrights</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Except where otherwise expressly noted or as noted below, all Contents of this Website, including white
                            papers, case studies, graphics, icons and overall appearance of the Website, are the sole and exclusive
                            property of Gembrill .
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Trademarks</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            The trademarks, service marks, designs, and logos (collectively, the "Trademarks") referring or related to
                            Gembrill displayed on the Site are the registered and unregistered Trademarks of Gembrill . You agree that
                            you will not refer to or attribute any information to Gembrill or its licensors in any public medium (e.g.,
                            press release, Web sites) for advertising or promotion purposes, or for the purpose of informing or
                            influencing any third party and that you will not use or reproduce any Trademark of, or imply any
                            endorsement by or relationship with, Gembrill .
                        </p>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            The names of actual companies, logos, service marks and products/services mentioned herein may be the
                            trademarks of their respective owners. Reference to a company, product, service or publication does not
                            imply an approval or recommendation of that company, product, service or publication.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Use of Site Content</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Contents are included in this Website solely for the personal use of Website users. You may not copy,
                            modify, distribute, transmit, display, perform, reproduce, transfer, resell, republish or use (other than
                            for the purpose of evaluating Gembrill 's products and services if you are a prospect) any of the Contents
                            of this Website without the prior written consent of Gembrill , which may be withheld in its sole
                            discretion.
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    )
}
