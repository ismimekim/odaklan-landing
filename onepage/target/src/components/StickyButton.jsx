import { useState, useEffect } from 'react'
import { Sparkles, Brain, Target, Zap } from 'lucide-react'

export default function StickyButton() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Show button after scrolling past hero
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const heroHeight = window.innerHeight * 0.6
            setIsVisible(scrollY > heroHeight)
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Check initial state
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    if (!isVisible) return null

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.3s ease-out',
            }}
        >
            <a
                href="#pricing"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isExpanded ? '12px' : '8px',
                    height: '52px',
                    width: isExpanded ? '320px' : '160px',
                    padding: '0 24px',
                    borderRadius: '26px',
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '-0.01em',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `
                        0 8px 32px rgba(34, 197, 94, 0.35),
                        0 4px 16px rgba(34, 197, 94, 0.2),
                        inset 0 1px 0 rgba(255,255,255,0.2)
                    `,
                    overflow: 'hidden',
                }}
            >
                {/* Icons - visible on hover */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: isExpanded ? '0.1s' : '0s',
                    }}
                >
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Brain style={{ width: '14px', height: '14px' }} />
                    </div>
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Target style={{ width: '14px', height: '14px' }} />
                    </div>
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Zap style={{ width: '14px', height: '14px' }} />
                    </div>
                </div>

                {/* Sparkles icon - always visible */}
                <Sparkles
                    style={{
                        width: '18px',
                        height: '18px',
                        flexShrink: 0,
                    }}
                />

                {/* Text */}
                <span style={{ whiteSpace: 'nowrap' }}>
                    Ücretsiz Dene
                </span>
            </a>
        </div>
    )
}
