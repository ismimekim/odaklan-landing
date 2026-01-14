import { X, Check, PlayCircle, Brain, Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ProductCover() {
    const sectionRef = useScrollReveal()
    const cardsRef = useScrollReveal({ threshold: 0.2 })

    const oldMethod = [
        'Saatlerce video izlemek',
        'Renkli notlar çıkarmak',
        '"Konuyu bitirdim" sanmak',
        'Ezber yapmaya çalışmak',
        'Sınavda hatırlayamamak',
    ]

    const newMethod = [
        'Videoyu analiz ettirmek',
        'Soru türettirip çözmek',
        'Kavram haritası çıkarmak',
        'AI ile tartışarak öğrenmek',
        'Kalıcı hafızaya atmak',
    ]

    return (
        <section
            className="relative section-divider"
            style={{
                paddingTop: 'clamp(80px, 10vw, 120px)',
                paddingBottom: 'clamp(80px, 10vw, 120px)',
                background: '#ffffff',
            }}
        >
            <div className="container relative z-10">
                {/* Apple-style Ultra-Tight Typography */}
                <div ref={sectionRef} className="reveal text-center" style={{ marginBottom: 'clamp(56px, 8vw, 80px)' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(56px, 10vw, 96px)',
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            lineHeight: 0.95,
                            color: '#1d1d1f',
                            marginBottom: '24px',
                        }}
                    >
                        Oyunun kurallarını{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #059669 0%, #22c55e 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>değiştir.</span>
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(19px, 2.5vw, 24px)',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: '#86868b',
                            maxWidth: '720px',
                            margin: '0 auto',
                        }}
                    >
                        Pasif izlemede saat harcamak yerine, aktif öğrenmeyle her dakikayı nete çevir.
                    </p>
                </div>

                {/* Asymmetric Comparison Grid - 40/60 */}
                <div ref={cardsRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

                    {/* Passive Method - 40% - Minimal, Muted */}
                    <div
                        className="lg:col-span-2"
                        style={{
                            borderRadius: '20px',
                            background: '#f5f5f7',
                            padding: 'clamp(24px, 3vw, 32px)',
                            border: '1px solid rgba(0,0,0,0.04)',
                            opacity: 0.92,
                        }}
                    >
                        {/* Header */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                                <div
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '10px',
                                        background: 'rgba(0,0,0,0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PlayCircle style={{ width: '20px', height: '20px', color: '#86868b' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: 'clamp(20px, 2.5vw, 26px)',
                                        fontWeight: 700,
                                        color: '#1d1d1f',
                                        letterSpacing: '-0.03em',
                                    }}
                                >
                                    Eski Yöntem
                                </h3>
                            </div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    color: '#86868b',
                                    padding: '5px 12px',
                                    background: 'rgba(0,0,0,0.04)',
                                    borderRadius: '8px',
                                }}
                            >
                                Pasif İzleme
                            </span>
                        </div>

                        {/* List */}
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {oldMethod.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div
                                        style={{
                                            width: '22px',
                                            height: '22px',
                                            borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.06)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}
                                    >
                                        <X style={{ width: '12px', height: '12px', color: '#86868b', strokeWidth: 2 }} />
                                    </div>
                                    <span
                                        style={{
                                            fontSize: 'clamp(15px, 1.8vw, 17px)',
                                            lineHeight: 1.65,
                                            color: '#6e6e73',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Active Method - 60% - Vibrant, Prominent */}
                    <div
                        className="lg:col-span-3"
                        style={{
                            borderRadius: '24px',
                            background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.06) 0%, rgba(34, 197, 94, 0.04) 100%)',
                            padding: 'clamp(32px, 5vw, 48px)',
                            border: '2px solid rgba(5, 150, 105, 0.2)',
                            boxShadow: '0 20px 40px rgba(5, 150, 105, 0.12), 0 0 0 1px rgba(5, 150, 105, 0.08)',
                            position: 'relative',
                        }}
                    >
                        {/* Glow Border Effect */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: '24px',
                                background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, transparent 50%)',
                                pointerEvents: 'none',
                            }}
                        />

                        {/* Header */}
                        <div style={{ marginBottom: '28px', position: 'relative' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'rgba(5, 150, 105, 0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Brain style={{ width: '24px', height: '24px', color: '#059669' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: 'clamp(24px, 3.5vw, 36px)',
                                        fontWeight: 800,
                                        color: '#1d1d1f',
                                        letterSpacing: '-0.04em',
                                    }}
                                >
                                    Aktif Öğrenme
                                </h3>
                            </div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '14px',
                                    fontWeight: 700,
                                    letterSpacing: '0.02em',
                                    color: '#059669',
                                    padding: '6px 14px',
                                    background: 'rgba(5, 150, 105, 0.12)',
                                    borderRadius: '10px',
                                }}
                            >
                                AI Destekli
                            </span>
                        </div>

                        {/* List */}
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
                            {newMethod.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                    <div
                                        style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: 'rgba(5, 150, 105, 0.18)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}
                                    >
                                        <Check style={{ width: '13px', height: '13px', color: '#059669', strokeWidth: 3 }} />
                                    </div>
                                    <span
                                        style={{
                                            fontSize: 'clamp(17px, 2vw, 19px)',
                                            lineHeight: 1.65,
                                            color: '#1d1d1f',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <a
                            href="#pricing"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '14px 28px',
                                borderRadius: '14px',
                                background: '#059669',
                                color: 'white',
                                fontSize: 'clamp(15px, 1.8vw, 17px)',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                                boxShadow: '0 8px 16px rgba(5, 150, 105, 0.25)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#047857'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(5, 150, 105, 0.35)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#059669'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 8px 16px rgba(5, 150, 105, 0.25)'
                            }}
                        >
                            <Sparkles style={{ width: '18px', height: '18px' }} />
                            Hemen Başla
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
