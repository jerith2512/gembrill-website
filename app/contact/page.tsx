"use client"

import type React from "react"

import { Container, Card } from "@/components/ui-components"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Let's build something great
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're ready to help you build your next big project. Reach out to us using the contact details below.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@gembrill.com" className="mt-1 block text-lg text-muted-foreground hover:text-primary transition-colors">
                    info@gembrill.com
                  </a>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+919600010212" className="mt-1 block text-lg text-muted-foreground hover:text-primary transition-colors">+91 96000 10212</a>

                </div>
              </div>
            </Card>

            <Card className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center gap-4 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Office</h3>
                  <p className="mt-1 text-base text-muted-foreground leading-relaxed">
                    01, First Floor, OMS Court,<br />
                    Nathamuni Street, GN Chetty Road,<br />
                    T.Nagar, Chennai - 600 017,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}
