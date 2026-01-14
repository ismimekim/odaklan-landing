import { useEffect, useRef, useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function SocialProof() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const cardsRef = useScrollReveal({ threshold: 0.2 })

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1, rootMargin: '-50px' }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const problems = [
        {
            headline: 'Pasif izlemede beyin kaydetmiyor',
            stat: '90%',
            statLabel: 'Unutma Oranı',
            accent: false,
        },
        {
            headline: 'Aktif katılım olmadan bilgi uçup gidiyor',
            stat: '24',
            statLabel: 'Saat İçinde',
            accent: true,
        },
        {
            headline: 'Aktif öğrenme ile kalıcılık katlanıyor',
            stat: '6x',
            statLabel: 'Daha Kalıcı',
            accent: false,
        },
    ]

    // Card fan-out animation positions
    const getCardAnimation = (index, visible) => {
        const positions = [
            { x: -100, rotate: -8 },   // Left card
            { x: 0, rotate: 0 },       // Center card
            { x: 100, rotate: 8 },     // Right card
        ]

        if (!visible) {
            // All cards start stacked in center
            return {
                opacity: 0,
                transform: 'translateX(0) translateY(80px) rotate(0deg) scale(0.9)',
            }
        }

        // Fan out to positions
        return {
            opacity: 1,
            transform: `translateX(0) translateY(0) rotate(0deg) scale(1)`,
        }
    }

    return (
        <section
            ref={sectionRef}
            className="relative overflow-visible"
            style={{
                paddingTop: 'clamp(48px, 6vw, 80px)',
                paddingBottom: 'clamp(60px, 8vw, 100px)',
                background: 'var(--color-bg-primary)',
            }}
        >
            <div className="container px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div
                    className="text-center mb-12 sm:mb-16"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    }}
                >
                    <h2
                        className="mb-5"
                        style={{
                            fontSize: 'clamp(42px, 8vw, 80px)',
                            fontWeight: 800,
                            letterSpacing: '-0.04em',
                            lineHeight: 1.05,
                            color: '#0a0a0a',
                        }}
                    >
                        Neden netlerin artmıyor?
                    </h2>

                    <p
                        className="max-w-xl mx-auto"
                        style={{
                            fontSize: 'clamp(18px, 3vw, 24px)',
                            lineHeight: 1.5,
                            color: '#1d1d1f',
                            fontWeight: 500,
                        }}
                    >
                        Sorun sende değil, <span style={{
                            fontWeight: 700,
                            color: '#1d1d1f',
                        }}>pasif izleme</span> yönteminde.
                    </p>
                </div>

                {/* Glassmorphism Cards with Fan-out Animation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                    {problems.map((item, i) => (
                        <div
                            key={i}
                            className="relative"
                            style={{
                                ...getCardAnimation(i, isVisible),
                                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + i * 0.15}s`,
                            }}
                        >
                            {/* Glassmorphism Card */}
                            <div
                                style={{
                                    position: 'relative',
                                    padding: 'clamp(28px, 4vw, 36px)',
                                    minHeight: '280px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    borderRadius: '28px',
                                    overflow: 'hidden',
                                    // Glassmorphism base
                                    background: item.accent
                                        ? 'linear-gradient(135deg, rgba(10,10,10,0.95) 0%, rgba(30,30,30,0.9) 100%)'
                                        : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                                    backdropFilter: 'blur(20px) saturate(180%)',
                                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                    // Premium border
                                    border: item.accent
                                        ? '1px solid rgba(255,255,255,0.1)'
                                        : '1px solid rgba(255,255,255,0.8)',
                                    // Liquid glass shadow
                                    boxShadow: item.accent
                                        ? `0 8px 32px rgba(0,0,0,0.3),
                                           0 2px 8px rgba(0,0,0,0.2),
                                           inset 0 1px 0 rgba(255,255,255,0.1)`
                                        : `0 8px 32px rgba(0,0,0,0.08),
                                           0 2px 8px rgba(0,0,0,0.04),
                                           inset 0 1px 0 rgba(255,255,255,1),
                                           0 0 0 1px rgba(0,0,0,0.03)`,
                                }}
                            >
                                {/* Liquid glass highlight overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '50%',
                                        background: item.accent
                                            ? 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)'
                                            : 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)',
                                        borderRadius: '28px 28px 0 0',
                                        pointerEvents: 'none',
                                    }}
                                />

                                {/* Large Bold Headline */}
                                <h3
                                    style={{
                                        position: 'relative',
                                        fontSize: 'clamp(20px, 2.5vw, 24px)',
                                        fontWeight: 700,
                                        letterSpacing: '-0.02em',
                                        lineHeight: 1.3,
                                        color: item.accent ? '#ffffff' : '#0a0a0a',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {item.headline}
                                </h3>

                                {/* Stat Display */}
                                <div style={{ position: 'relative', marginTop: 'auto' }}>
                                    <div
                                        style={{
                                            fontSize: 'clamp(56px, 10vw, 72px)',
                                            fontWeight: 800,
                                            letterSpacing: '-0.04em',
                                            lineHeight: 0.9,
                                            color: item.accent ? '#ffffff' : '#0a0a0a',
                                        }}
                                    >
                                        {item.stat}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            color: item.accent ? 'rgba(255,255,255,0.7)' : '#374151',
                                            marginTop: '8px',
                                            letterSpacing: '0.01em',
                                        }}
                                    >
                                        {item.statLabel}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SMOOTH GRADIENT TRANSITION */}
            <div
                className="absolute left-0 right-0 pointer-events-none overflow-hidden"
                style={{
                    bottom: '-80px',
                    height: '200px',
                    zIndex: 5,
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to bottom, 
                            transparent 0%,
                            rgba(255, 255, 255, 0.5) 30%,
                            rgba(255, 255, 255, 0.9) 60%,
                            #ffffff 100%
                        )`,
                    }}
                />
            </div>
        </section>
    )
}




