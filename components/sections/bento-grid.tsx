"use client"

import { Container, SectionTitle, Card, ButtonLink } from "@/components/ui-components"
import { services } from "@/lib/site-data"
import { ArrowRight, Code, Layout, Cpu, ShieldCheck, Headphones, Handshake } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import clsx from "clsx"

const iconMap: Record<string, React.ReactNode> = {
    "product-engineering": <Cpu className="h-6 w-6" />,
    "software-development": <Code className="h-6 w-6" />,
    "portal-development": <Layout className="h-6 w-6" />,
    "software-testing": <ShieldCheck className="h-6 w-6" />,
    "bpo-services": <Headphones className="h-6 w-6" />,
    "outsourcing": <Handshake className="h-6 w-6" />,
}

function BentoCard({
    service,
    index,
}: {
    service: (typeof services)[0]
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    // Parallax effect for content or background
    const y = useTransform(scrollYProgress, [0, 1], [0, -20])

    // Standard grid, no spanning
    const spanClass = "col-span-1"

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={clsx("relative group", spanClass)}
        >
            <Card className="h-full overflow-hidden border-none bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/5">
                <div className="flex h-full flex-col p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        {iconMap[service.slug]}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-foreground">{service.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.outcome}</p>

                    <div className="mt-8 flex-1">
                        {/* Show bullets for all cards */}
                        <ul className="space-y-3">
                            {service.bullets.slice(0, 3).map((bullet) => (
                                <li key={bullet} className="flex items-center gap-3 text-sm text-muted-foreground/80">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6 opacity-60 transition-opacity group-hover:opacity-100">
                        <span className="text-sm font-medium text-primary">Explore Service</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:translate-x-1">
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                {/* Subtle gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Card>

            {/* Click target */}
            <ButtonLink href={`/services#${service.slug}`} className="absolute inset-0 z-10 opacity-0">
                <span className="sr-only">View {service.title}</span>
            </ButtonLink>
        </motion.div>
    )
}

export function BentoGrid() {
    return (
        <section className="py-20 lg:py-32">
            <Container>
                <SectionTitle
                    eyebrow="Our Expertise"
                    title="World-class services."
                    subtitle="Precision engineering meets strategic innovation."
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <BentoCard key={service.slug} service={service} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
