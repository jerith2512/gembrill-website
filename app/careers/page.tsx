
import { Container } from "@/components/ui-components"
import Link from "next/link"
import Image from "next/image"
import { Users, Briefcase, Heart, Trophy, Mail, Phone } from "lucide-react"

export default function Careers() {
    return (
        <div className="pt-24 pb-20">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Careers at Gembrill
                    </h1>
                    <p className="mt-6 text-xl text-muted-foreground">
                        Join one of the fastest growing companies in the industry.
                    </p>
                </div>

                <div className="mt-20 space-y-24">
                    <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Users className="h-6 w-6" />
                            </div>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Being a Gembrillian</h2>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                Gembrill is one of the fastest growing companies in the industry, and is constantly looking for talented
                                people to strengthen its resource pool. Gembrill's philosophy is towards encouraging professional growth
                                at all levels and provides Gembrillian's with a dynamic working environment, career advancement
                                opportunity and excellent pro-employee benefits that are much better than the industry peers.
                            </p>
                        </div>
                        <div className="overflow-hidden rounded-2xl bg-muted/50">
                            <Image
                                src="/images/careers-team.png"
                                alt="Gembrill Team Collaboration"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </section>

                    <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div className="order-2 lg:order-1 overflow-hidden rounded-2xl bg-muted/50">
                            <Image
                                src="/images/careers-office.png"
                                alt="Gembrill Modern Office Environment"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Briefcase className="h-6 w-6" />
                            </div>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">Work Environment</h2>
                            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                                Gembrill's Work Environment is creative and open that supports expression and achievement and gives
                                everyone a chance to be a part of its success. It offers world-class facilities, which are hazard free and
                                aids continuous learning and development of its resources. Serious and customer-focused work is
                                interspersed with loads of recreational activities that help team building and camaraderie between
                                resources. It provides the right balance for employees to professionally excel.
                            </p>
                        </div>
                    </section>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-2xl border border-border/50 bg-card p-8 transition-shadow hover:shadow-lg">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Users className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-foreground">Corporate Culture</h3>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                Corporate Culture at Gembrill reflects a highly developed state of perfection. Gembrill believes in
                                rewarding its resources for brilliance, teamwork and decorum. Transparency is at the core of everything
                                that Gembrill does.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/50 bg-card p-8 transition-shadow hover:shadow-lg">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Heart className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-foreground">Benefits</h3>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                Gembrill provides a comprehensive Benefits package including competitive salary, life insurance coverage,
                                accident insurance, and performance linked incentives, allowing maximum benefit from future potential.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-border/50 bg-card p-8 transition-shadow hover:shadow-lg">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Trophy className="h-5 w-5" />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-foreground">Awards & Recognition</h3>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                Awards are channeled towards applauding employee's meritorious contribution. This is not an ornamental
                                piece and is a sincere appreciation and recognition of an employee's contribution to growth.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-3xl bg-primary/5 p-8 text-center sm:p-16">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Join Our Team</h3>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            Ready to take the next step in your career? Send your resume and portfolio to our team.
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
                </div>
            </Container>
        </div>
    )
}
