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
            desc: 'Videodaki gereksiz detayları at, sadece sınavda çıkacak bilgilere odaklan.',
        },
        {
            num: '02',
            Icon: Network,
            title: 'Yapılandırma',
            desc: 'Karmaşık konuları zihnine kazınacak basit kavram haritalarına dönüştür.',
        },
        {
            num: '03',
            Icon: HelpCircle,
            title: 'Sorgulama',
            desc: 'AI\'ın sana zorlayıcı sorular sormasını sağla. Gerçek öğrenme burada başlar.',
        },
        {
            num: '04',
            Icon: Lightbulb,
            title: 'Uygulama',
            desc: 'Konuyu farklı açılardan gören orijinal sorular türet ve anında çöz.',
        },
        {
            num: '05',
            Icon: Brain,
            title: 'Hafıza',
            desc: 'Bilgiyi kısa süreliden uzun süreli hafızaya atan özel tekrar teknikleri.',
        },
        {
            num: '06',
            Icon: MapPin,
            title: 'Planlama',
            desc: 'Bir sonraki adımını belirle, eksiklerini kapat ve ilerle.',
        },
    ]

    return (
        <section
            id="method"
            style={{
                paddingTop: 'clamp(80px, 10vw, 120px)',
                paddingBottom: 'clamp(80px, 10vw, 120px)',
                background: '#ffffff',
            }}
        >
            <div className="container">
                {/* Apple-style Section Header */}
                <div ref={sectionRef} className="reveal text-center" style={{ marginBottom: 'clamp(56px, 8vw, 80px)' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(40px, 8vw, 72px)',
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            lineHeight: 0.95,
                            color: '#1d1d1f',
                            marginBottom: '16px',
                        }}
                    >
                        6 Adımlık{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #059669 0%, #22c55e 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Aktif Öğrenme
                        </span>
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(17px, 2.2vw, 21px)',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: '#86868b',
                            maxWidth: '640px',
                            margin: '0 auto',
                        }}
                    >
                        Bu sistem, herhangi bir YouTube ders videosunu YKS netine dönüştürür.
                    </p>
                </div>

                {/* Apple-style Card Grid */}
                <div
                    ref={cardsRef}
                    className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            style={{
                                borderRadius: '18px',
                                background: '#ffffff',
                                padding: '28px',
                                border: '1px solid rgba(0,0,0,0.06)',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)'
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            {/* Header: Step Badge + Icon */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                                {/* Step Badge - iOS Style */}
                                <span
                                    style={{
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        letterSpacing: '0.06em',
                                        color: '#86868b',
                                        padding: '5px 10px',
                                        background: '#f5f5f7',
                                        borderRadius: '6px',
                                    }}
                                >
                                    ADIM {step.num}
                                </span>

                                {/* Icon Container */}
                                <div
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        background: 'rgba(5, 150, 105, 0.08)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <step.Icon
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            color: '#059669',
                                            strokeWidth: 1.8,
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Title - Bold, Tight */}
                            <h3
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    color: '#1d1d1f',
                                    letterSpacing: '-0.02em',
                                    marginBottom: '10px',
                                    lineHeight: 1.2,
                                }}
                            >
                                {step.title}
                            </h3>

                            {/* Description - Generous Line-Height */}
                            <p
                                style={{
                                    fontSize: '15px',
                                    lineHeight: 1.65,
                                    color: '#6e6e73',
                                    fontWeight: 400,
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
