import { Compass, Flame, BookOpen, RefreshCw, BarChart3, FileText } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Features() {
    const sectionRef = useScrollReveal()
    const cardsRef = useScrollReveal({ threshold: 0.15 })

    const features = [
        {
            Icon: Compass,
            title: 'Karar Ağacı',
            desc: <>Ne zaman <strong>ne yapmalı?</strong></>,
        },
        {
            Icon: Flame,
            title: '35+ Özel YKS Promptu',
            desc: <>Her durum için <strong>hazır şablonlar</strong></>,
        },
        {
            Icon: BookOpen,
            title: 'TYT & AYT Ders Bazlı',
            desc: <>Her derse özel <strong>çalışma asistanları</strong></>,
        },
        {
            Icon: RefreshCw,
            title: 'AI Destekli Tekrar',
            desc: <>Spaced repetition ile <strong>kalıcı öğrenme</strong></>,
        },
        {
            Icon: BarChart3,
            title: 'Deneme Analizi',
            desc: <><strong>Zayıf konularını</strong> bul ve kapat</>,
        },
        {
            Icon: FileText,
            title: 'Kurulum Rehberi',
            desc: <>Hemen başla, <strong>vakit kaybetme</strong></>,
        },
    ]

    return (
        <section
            className="py-[var(--spacing-16)] section-divider"
            style={{
                background: '#ffffff',
            }}
        >
            <div className="container">
                {/* Section Header */}
                <div ref={sectionRef} className="reveal text-center mb-[var(--spacing-10)]">
                    <h2
                        className="mb-[var(--spacing-3)]"
                        style={{
                            fontSize: 'clamp(36px, 6vw, 56px)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        Paket <span style={{
                            background: 'linear-gradient(135deg, #059669 0%, #22c55e 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>İçeriği</span>
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            color: '#1d1d1f',
                            fontWeight: 500,
                        }}
                    >
                        Sadece prompt değil, <strong style={{ fontWeight: 700, color: '#1d1d1f' }}>komple bir öğrenme sistemi.</strong>
                    </p>
                </div>

                {/* 3-column grid with unified cards */}
                <div ref={cardsRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="card-depth p-5"
                        >
                            {/* Icon Container */}
                            <div className="icon-container mb-4">
                                <feature.Icon
                                    style={{
                                        width: '22px',
                                        height: '22px',
                                        color: 'var(--accent-primary)',
                                        strokeWidth: 1.75,
                                    }}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="mb-2"
                                style={{
                                    fontSize: '17px',
                                    fontWeight: 600,
                                    color: '#1d1d1f',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: '14px',
                                    lineHeight: 1.6,
                                    color: '#48484a',
                                }}
                            >
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
