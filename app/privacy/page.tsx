
import { Container, SectionTitle } from "@/components/ui-components"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPolicy() {
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
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
                    <p className="text-lg text-muted-foreground">
                        This Privacy Policy governs your use of the Site. Additional terms and conditions may apply to protect
                        information you supply to Gembrill in a forum other than the Site. By using the Site, you consent to the
                        collection, storage and use of certain personal information by Gembrill. Such personal information includes
                        your name, address, telephone number and other information furnished by you to Gembrill.
                    </p>
                </div>

                <div className="mt-16 space-y-12">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Collection of Personal Information</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Gembrill collects personal information about you from the Site when you complete the "Enquiry form",
                            "Contact Us" or apply for jobs using the "Careers" of the site.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Use of Personal Information</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Gembrill uses your personal information to provide you with information that you have requested from
                            Gembrill or to provide you with information about other products and services that might be of interest to
                            you or to consider any employment-related enquiries that you may submit. Gembrill may keep any of your
                            personal information on file and use it to contact you for the above purposes. If you do not wish to receive
                            non-essential e-mail communications concerning Gembrill's products or services, you can opt out of
                            receiving this information by contacting Gembrill at{" "}
                            <a href="mailto:info@gembrill.com" className="text-primary hover:underline">
                                info@gembrill.com
                            </a>
                            .
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Disclosure of Personal Information</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Gembrill will only release your personal information to third parties if legally required to do so or if
                            the rights or property of Gembrill, its affiliates, any applicable service providers or other users of the
                            Site are at risk. Otherwise, Gembrill will not disclose your personal information to third parties other
                            than its affiliates and service providers.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Protection of Personal Information</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Gembrill employs technical security measures that endeavor to protect your personal information from
                            outside threats, as well as a code of conduct for employees who are permitted access to your personal
                            information. However, Gembrill does not represent, warrant or guarantee that your personal information will
                            be protected against loss, misuse or alterations and does not accept any liability for personal information
                            submitted to it nor for third parties' use or misuse of your personal information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Revisions to Policy</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Gembrill reserves the right, at its discretion, to change, modify, add, or remove portions of this Privacy
                            Policy at any time. If Gembrill changes this Privacy Policy, it will post such changes on the Site so that
                            you may become aware of what information Gembrill collects, how Gembrill uses such information and under
                            what circumstances Gembrill discloses such information.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Contacting the Site</h2>
                        <p className="text-base leading-relaxed text-muted-foreground">
                            If you have any questions about Gembrill's Privacy Policy, you can contact{" "}
                            <a href="mailto:info@gembrill.com" className="text-primary hover:underline">
                                info@gembrill.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </Container>
        </div>
    )
}
