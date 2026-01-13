import { Filter, Network, HelpCircle, Lightbulb, Brain, MapPin } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function LibraryStats() {
    const sectionRef = useScrollReveal()
    const cardsRef = useScrollReveal({ threshold: 0.15 })

    const steps = [
        {
            num: '01',
            Icon: Filter,
            title: 'Filtreleme',
            desc: <>Videodaki <strong>gereksiz detayları</strong> at, sadece sınavda çıkacak bilgilere odaklan.</>,
        },
        {
            num: '02',
            Icon: Network,
            title: 'Yapılandırma',
            desc: <>Karmaşık konuları zihnine kazınacak <strong>basit kavram haritalarına</strong> dönüştür.</>,
        },
        {
            num: '03',
            Icon: HelpCircle,
            title: 'Sorgulama',
            desc: <>AI'ın sana <strong>zorlayıcı sorular</strong> sormasını sağla. Gerçek öğrenme burada başlar.</>,
        },
        {
            num: '04',
            Icon: Lightbulb,
            title: 'Uygulama',
            desc: <>Konuyu farklı açılardan gören <strong>orijinal sorular</strong> türet ve anında çöz.</>,
        },
        {
            num: '05',
            Icon: Brain,
            title: 'Hafıza',
            desc: <>Bilgiyi kısa süreliden <strong>uzun süreli hafızaya</strong> atan özel tekrar teknikleri.</>,
        },
        {
            num: '06',
            Icon: MapPin,
            title: 'Planlama',
            desc: <>Bir sonraki <strong>adımını belirle</strong>, eksiklerini kapat ve ilerle.</>,
        },
    ]

    return (
        <section
            id="method"
            className="py-[var(--spacing-24)]"
            style={{
                background: '#ffffff',
            }}
        >
            <div className="container">
                <div ref={sectionRef} className="reveal text-center mb-[var(--spacing-14)]">
                    <h2
                        className="mb-[var(--spacing-4)]"
                        style={{
                            fontSize: 'clamp(36px, 6vw, 56px)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            color: 'var(--color-neutral-100)',
                        }}
                    >
                        6 Adımlık <span style={{
                            background: 'linear-gradient(135deg, #059669 0%, #22c55e 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>Aktif Öğrenme</span>
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            color: '#1d1d1f',
                            fontWeight: 500,
                        }}
                    >
                        Bu sistem, herhangi bir <strong style={{ color: '#1d1d1f', fontWeight: 600 }}>YouTube ders videosunu</strong> YKS netine dönüştürür.
                    </p>
                </div>

                {/* Unified Cards */}
                <div ref={cardsRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="card-depth p-5"
                        >
                            {/* Header: Icon + Step Badge */}
                            <div className="flex items-center justify-between mb-4">
                                {/* Icon Container */}
                                <div className="icon-container">
                                    <step.Icon
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            color: 'var(--accent-primary)',
                                            strokeWidth: 1.75,
                                        }}
                                    />
                                </div>

                                {/* Step Badge */}
                                <span className="badge">
                                    ADIM {step.num}
                                </span>
                            </div>

                            {/* Title */}
                            <h3
                                className="mb-3"
                                style={{
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#1d1d1f',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p
                                style={{
                                    fontSize: '14px',
                                    lineHeight: 1.7,
                                    color: '#48484a',
                                }}
                            >
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
