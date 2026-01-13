import { Sparkles } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function FinalCTA() {
    const sectionRef = useScrollReveal()

    return (
        <section
            id="pricing"
            className="relative"
            style={{
                paddingTop: 'var(--spacing-20)',
                paddingBottom: 'calc(var(--spacing-20) + 80px)',
                background: '#ffffff',
            }}
        >
            <div className="container relative z-10">
                <div
                    ref={sectionRef}
                    className="reveal max-w-2xl mx-auto text-center p-[var(--spacing-10)] rounded-[32px]"
                    style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.08), 0 8px 32px rgba(0,0,0,0.04)',
                        border: '1px solid rgba(0,0,0,0.06)',
                    }}
                >
                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 mb-[var(--spacing-4)] px-4 py-2 rounded-full"
                        style={{
                            background: 'rgba(59, 130, 246, 0.08)',
                            border: '1px solid rgba(59, 130, 246, 0.15)',
                        }}
                    >
                        <Sparkles style={{ width: '14px', height: '14px', color: '#3b82f6' }} />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#3b82f6' }}>
                            Sınırlı Süre Teklifi
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mb-[var(--spacing-4)]">
                        <span
                            className="mr-[var(--spacing-3)]"
                            style={{
                                fontSize: 'clamp(20px, 3vw, 28px)',
                                fontWeight: 500,
                                color: 'var(--color-neutral-40)',
                                textDecoration: 'line-through',
                            }}
                        >
                            ₺400
                        </span>
                        <span
                            style={{
                                fontSize: 'clamp(48px, 8vw, 72px)',
                                fontWeight: 800,
                                letterSpacing: '-0.03em',
                                color: 'var(--color-neutral-100)',
                            }}
                        >
                            ₺149
                        </span>
                    </div>

                    {/* Subtitle */}
                    <p
                        className="mb-[var(--spacing-6)]"
                        style={{
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            color: '#1d1d1f',
                            fontWeight: 500,
                        }}
                    >
                        <strong style={{ color: 'var(--color-neutral-80)', fontWeight: 600 }}>Tek seferlik</strong> ödeme. <strong style={{ color: 'var(--color-neutral-80)', fontWeight: 600 }}>Ömür boyu</strong> erişim.
                    </p>

                    {/* CTA Button - Dark for contrast */}
                    <a
                        href="#"
                        className="inline-block bg-[var(--color-neutral-100)] text-[var(--color-bg-primary)] px-[var(--spacing-8)] py-[var(--spacing-4)] rounded-[var(--radius-full)] hover:bg-[var(--color-neutral-80)] transition-colors no-underline mb-[var(--spacing-4)]"
                        style={{
                            transitionDuration: 'var(--duration-default)',
                            transitionTimingFunction: 'var(--ease-out)',
                            fontWeight: 700,
                            fontSize: '17px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                        }}
                    >
                        Hemen İncele
                    </a>

                    {/* Delivery note */}
                    <p style={{ fontSize: '13px', color: 'var(--color-neutral-50)' }}>
                        Anında Teslimat • 35+ AI Promptu
                    </p>
                </div>
            </div>

            {/* Curved bottom edge - reveals footer underneath */}
            <div
                className="absolute left-0 right-0 bottom-0 pointer-events-none"
                style={{
                    height: '80px',
                    background: '#ffffff',
                    borderRadius: '0 0 48px 48px',
                }}
            />
        </section>
    )
}
