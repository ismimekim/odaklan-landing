import { X, Check, PlayCircle, Brain } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function ProductCover() {
    const sectionRef = useScrollReveal()
    const cardsRef = useScrollReveal({ threshold: 0.2 })

    const oldMethod = [
        { text: 'Saatlerce video izlemek', bold: 'Saatlerce' },
        { text: 'Renkli notlar çıkarmak', bold: 'notlar' },
        { text: '"Konuyu bitirdim" sanmak', bold: 'sanmak' },
        { text: 'Ezber yapmaya çalışmak', bold: 'Ezber' },
        { text: 'Sınavda hatırlayamamak', bold: 'hatırlayamamak' },
    ]

    const newMethod = [
        { text: 'Videoyu analiz ettirmek', bold: 'analiz' },
        { text: 'Soru türettirip çözmek', bold: 'Soru türettirip' },
        { text: 'Kavram haritası çıkarmak', bold: 'Kavram haritası' },
        { text: 'AI ile tartışarak öğrenmek', bold: 'tartışarak' },
        { text: 'Kalıcı hafızaya atmak', bold: 'Kalıcı hafızaya' },
    ]

    const renderWithBold = (text, bold) => {
        const parts = text.split(bold)
        if (parts.length === 2) {
            return <>{parts[0]}<strong style={{ fontWeight: 700 }}>{bold}</strong>{parts[1]}</>
        }
        return text
    }

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
                {/* Apple-style Large Heading */}
                <div ref={sectionRef} className="reveal text-center mb-[var(--spacing-14)]">
                    <h2
                        style={{
                            fontSize: 'clamp(44px, 8vw, 72px)',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.05,
                            color: 'var(--color-neutral-100)',
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
                </div>

                {/* Unified Cards Grid */}
                <div ref={cardsRef} className="reveal-stagger grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    {/* Old Method - Error Tint Card */}
                    <div
                        className="card-depth card-tint-error rounded-[16px] overflow-hidden"
                    >
                        {/* Card Header */}
                        <div
                            className="p-5 pb-4"
                            style={{
                                borderBottom: '1px solid rgba(0,0,0,0.04)',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="icon-container" style={{ background: 'var(--status-error-bg)' }}>
                                    <PlayCircle style={{ width: '20px', height: '20px', color: 'var(--status-error)' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: '#1d1d1f',
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    Eski Yöntem
                                </h3>
                                <span className="badge badge-error">
                                    Pasif İzleme
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 pt-4">
                            <ul className="flex flex-col gap-3">
                                {oldMethod.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: 'var(--status-error-bg)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <X style={{ width: '12px', height: '12px', color: 'var(--status-error)', strokeWidth: 2.5 }} />
                                        </div>
                                        <span style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: 1.5 }}>
                                            {renderWithBold(item.text, item.bold)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* New Method - Success Tint Card (GREEN for positive) */}
                    <div
                        className="card-depth card-tint-success rounded-[16px] overflow-hidden"
                    >
                        {/* Card Header */}
                        <div
                            className="p-5 pb-4"
                            style={{
                                borderBottom: '1px solid rgba(0,0,0,0.04)',
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="icon-container" style={{ background: 'var(--status-success-bg)' }}>
                                    <Brain style={{ width: '20px', height: '20px', color: 'var(--status-success)' }} />
                                </div>
                                <h3
                                    style={{
                                        fontSize: '18px',
                                        fontWeight: 600,
                                        color: '#1d1d1f',
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    Aktif Öğrenme
                                </h3>
                                <span className="badge badge-success">
                                    AI Destekli
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 pt-4">
                            <ul className="flex flex-col gap-3">
                                {newMethod.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: 'var(--status-success-bg)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Check style={{ width: '12px', height: '12px', color: 'var(--status-success)', strokeWidth: 2.5 }} />
                                        </div>
                                        <span style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: 1.5 }}>
                                            {renderWithBold(item.text, item.bold)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
