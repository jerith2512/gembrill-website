"use client"

import { FileText, Code2, PlayCircle, FileBarChart, ArrowRight, Settings, Wrench, RefreshCw, LucideIcon } from "lucide-react"
import { Lifecycle } from "@/lib/site-data"

const iconMap: Record<string, LucideIcon> = {
    FileText,
    Code2,
    PlayCircle,
    FileBarChart,
    Settings,
    Wrench,
    RefreshCw,
}

export function LifecycleDiagram({ data }: { data: Lifecycle }) {
    if (!data) return null

    if (data.modality === "service-wheel") {
        return (
            <div className="py-24">
                <h3 className="text-2xl font-bold text-foreground mb-32 text-center max-w-4xl mx-auto">{data.title}</h3>
                <div className="relative max-w-sm mx-auto aspect-square hidden md:block">
                    {/* Center Point */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/20 rounded-full z-20" />

                    {data.steps.map((step, index) => {
                        const Icon = iconMap[step.iconName] || FileText
                        const rotation = index * (360 / data.steps.length)
                        const isRightSide = rotation < 180

                        return (
                            <div
                                key={index}
                                className="absolute top-1/2 left-1/2 w-full h-[1px] -translate-y-1/2 origin-left transition-all duration-500 group"
                                style={{ transform: `rotate(${rotation - 90}deg)` }}
                            >
                                {/* Spoke / Slice Visual - subtle line */}
                                <div className="absolute top-0 left-0 h-full bg-border/40" style={{ width: "110px" }} />

                                <div
                                    className="absolute right-[50%] top-1/2 -translate-y-1/2 flex items-center gap-4"
                                    style={{
                                        transform: `translateX(110px) rotate(${-(rotation - 90)}deg)`,
                                    }}
                                >
                                    <div
                                        className={`w-24 h-24 rounded-full flex flex-col items-center justify-center p-3 text-center shadow-lg transition-transform hover:scale-110 ${step.color} border-4 border-background`}
                                    >
                                        <div className="mb-1">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-[10px] font-bold leading-tight">{step.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* Connecting Ring - subtle background */}
                    <div className="absolute inset-[25%] rounded-full border-[1px] border-dashed border-primary/20 -z-10" />
                </div>

                {/* Mobile View - Stacked */}
                <div className="grid gap-4 md:hidden">
                    {data.steps.map((step, index) => {
                        const Icon = iconMap[step.iconName] || FileText
                        return (
                            <div key={index} className={`p-6 rounded-xl flex items-center gap-4 ${step.color}`}>
                                <Icon className="w-8 h-8 flex-shrink-0" />
                                <h4 className="font-bold text-lg">{step.title}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    if (data.modality === "process") {
        return (
            <div className="py-12">
                <h3 className="text-2xl font-bold text-foreground mb-12 text-center">{data.title}</h3>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 max-w-6xl mx-auto px-4 overflow-x-auto">
                    {data.steps.map((step, index) => {
                        const Icon = iconMap[step.iconName] || FileText
                        return (
                            <div key={index} className="flex-1 min-w-[140px] group relative flex">
                                <div
                                    className={`relative z-10 w-full p-4 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 ${step.color} shadow-sm clip-path-chevron md:min-h-[160px] rounded-lg md:rounded-none`}
                                    style={{
                                        clipPath:
                                            "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)",
                                    }}
                                >
                                    {/* Fix for first item having flat start if desired, but image shows chevron all way */}
                                    <div className="mb-3">
                                        <Icon className="w-8 h-8 opacity-90" />
                                    </div>
                                    <h4 className="text-sm font-bold leading-tight">{step.title}</h4>
                                </div>
                                {/* Mobile arrow connector */}
                                <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 z-0">
                                    <ArrowRight className="text-muted-foreground/30 rotate-90" />
                                </div>
                            </div>
                        )
                    })}
                </div>
                {/* CSS for better chevron shape control if needed, but polygon works well */}
                <style jsx global>{`
                    @media (min-width: 768px) {
                        .clip-path-chevron {
                            clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%) !important;
                            margin-left: -15px;
                        }
                        .clip-path-chevron:first-child {
                             clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%) !important;
                             margin-left: 0;
                        }
                        /* Adjust first child to map to index 0 logic better if mapping wasn't direct children of flex container */
                    }
                `}</style>
            </div>
        )
    }

    // Default Cycle Layout
    return (
        <div className="py-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{data.title}</h3>
            <div className="relative grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
                {/* Connecting lines for desktop - visual decorative elements */}
                <div className="hidden md:block absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-2 border-dashed border-muted-foreground/20 rounded-full opacity-50" />
                </div>

                {data.steps.map((step, index) => {
                    const Icon = iconMap[step.iconName] || FileText
                    return (
                        <div key={index} className="relative group">
                            <div
                                className={`h-full p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${step.color.replace(
                                    "text-",
                                    "border-"
                                )} bg-card`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${step.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold mb-4 text-foreground">{step.title}</h4>
                                <ul className="space-y-2">
                                    {step.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Directional Arrows for mobile flow */}
                            {index < data.steps.length - 1 && (
                                <div className="md:hidden flex justify-center py-4">
                                    <ArrowRight className="text-muted-foreground/30 rotate-90" />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
