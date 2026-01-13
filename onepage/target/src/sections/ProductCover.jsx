import { X, Check, PlayCircle, Brain } from 'lucide-react'
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
                <div ref={sectionRef} className="reveal text-center mb-[var(--spacing-16)]">
                    <h2
                        style={{
                            fontSize: 'clamp(48px, 9vw, 80px)',
                            fontWeight: 800,
                            letterSpacing: '-0.05em',
                            lineHeight: 0.95,
                            color: '#1d1d1f',
                            marginBottom: '20px',
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
                            fontSize: 'clamp(17px, 2.2vw, 21px)',
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: '#86868b',
                            maxWidth: '600px',
                            margin: '0 auto',
                        }}
                    >
                        Pasif izlemede saat harcamak yerine, aktif öğrenmeyle her dakikayı nete çevir.
                    </p>
                </div>

                {/* Apple-style Comparison Grid */}
                <div ref={cardsRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    {/* Passive Method - Minimal, Muted */}
                    <div
                        style={{
                            borderRadius: '18px',
                            background: '#f5f5f7',
                            padding: 'clamp(24px, 4vw, 32px)',
                            border: '1px solid rgba(0,0,0,0.04)',
                        }}
                    >
                        {/* Header */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: 'rgba(0,0,0,0.06)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PlayCircle style={{ width: '18px', height: '18px', color: '#86868b' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: '19px',
                                        fontWeight: 600,
                                        color: '#1d1d1f',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    Eski Yöntem
                                </h3>
                            </div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontWeight: 500,
                                    letterSpacing: '0.01em',
                                    color: '#86868b',
                                    padding: '4px 10px',
                                    background: 'rgba(0,0,0,0.04)',
                                    borderRadius: '6px',
                                }}
                            >
                                Pasif İzleme
                            </span>
                        </div>

                        {/* List */}
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {oldMethod.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: 'rgba(0,0,0,0.06)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}
                                    >
                                        <X style={{ width: '11px', height: '11px', color: '#86868b', strokeWidth: 2 }} />
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
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

                    {/* Active Method - Vibrant, Green Accent */}
                    <div
                        style={{
                            borderRadius: '18px',
                            background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.04) 0%, rgba(34, 197, 94, 0.04) 100%)',
                            padding: 'clamp(24px, 4vw, 32px)',
                            border: '1px solid rgba(5, 150, 105, 0.12)',
                        }}
                    >
                        {/* Header */}
                        <div style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '8px',
                                        background: 'rgba(5, 150, 105, 0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Brain style={{ width: '18px', height: '18px', color: '#059669' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: '19px',
                                        fontWeight: 600,
                                        color: '#1d1d1f',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    Aktif Öğrenme
                                </h3>
                            </div>
                            <span
                                style={{
                                    display: 'inline-block',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    letterSpacing: '0.01em',
                                    color: '#059669',
                                    padding: '4px 10px',
                                    background: 'rgba(5, 150, 105, 0.1)',
                                    borderRadius: '6px',
                                }}
                            >
                                AI Destekli
                            </span>
                        </div>

                        {/* List */}
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {newMethod.map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <div
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: 'rgba(5, 150, 105, 0.15)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                            marginTop: '2px',
                                        }}
                                    >
                                        <Check style={{ width: '11px', height: '11px', color: '#059669', strokeWidth: 2.5 }} />
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '15px',
                                            lineHeight: 1.6,
                                            color: '#1d1d1f',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
