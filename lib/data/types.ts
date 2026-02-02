export type NavItem = { label: string; href: string }

export type Bullet = string | { text: string; href: string }

export type Service = {
    slug: string
    title: string
    outcome: string
    bullets: Bullet[]
    image: string
    detailedDescription?: string
}

export type LifecycleStep = {
    title: string
    items: string[]
    iconName: "FileText" | "Code2" | "PlayCircle" | "FileBarChart" | "Settings" | "Wrench" | "RefreshCw"
    color: string
}

export type Lifecycle = {
    title: string
    steps: LifecycleStep[]
    modality?: "cycle" | "process" | "service-wheel"
}

export type SubService = {
    slug: string
    parentSlug: string
    title: string
    outcome: string
    detailedDescription: string
    bullets: string[]
    lifecycle?: Lifecycle
}

export type CaseStudy = {
    title: string
    industry: string
    problem: string
    solution: string
    impact: string
}
