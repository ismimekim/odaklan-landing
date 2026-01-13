import { useEffect, useRef, useState } from 'react'

export default function ScrollRevealText() {
    const containerRef = useRef(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    // Empathetic copy for YKS students - clean typography, no emojis
    const textContent = `Biliyoruz — saatlerce video izliyorsun ama sınava girince hiçbir şey hatırlamıyorsun. Sorun sende değil, yöntemde. Biz sana izlediğin her videoyu gerçek bilgiye çeviren bir sistem verdik, yapay zekayla. Artık "anladım" demek yetmiyor, kanıtlaman gerekiyor.`

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Check for VR mode or reduced motion
        const isVRMode = document.documentElement.classList.contains('vr-mode')
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (isVRMode || prefersReducedMotion) {
            setScrollProgress(1)
            return
        }

        const handleScroll = () => {
            const rect = container.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Start later, finish later for more buffer time
            const startPoint = windowHeight * 0.7
            const endPoint = windowHeight * 0.15

            if (rect.top > startPoint) {
                setScrollProgress(0)
            } else if (rect.top < endPoint) {
                setScrollProgress(1)
            } else {
                const progress = (startPoint - rect.top) / (startPoint - endPoint)
                setScrollProgress(Math.min(1, Math.max(0, progress)))
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Character-by-character reveal
    const totalChars = textContent.length
    const smoothProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress)
    const charsToReveal = Math.floor(smoothProgress * totalChars)

    return (
        <section
            ref={containerRef}
            className="bg-[var(--color-bg-primary)] section-divider"
            style={{
                // Apple UI/UX: 8pt grid system
                // Tighter bottom for visual flow to next section
                paddingTop: 'clamp(48px, 8vw, 80px)',
                paddingBottom: 'clamp(24px, 4vw, 48px)',
            }}
        >
            {/* More centered text container with better max-width */}
            <div
                className="mx-auto px-6 sm:px-8"
                style={{ maxWidth: '720px' }}
            >
                <p
                    className="text-center"
                    style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(20px, 4vw, 32px)',
                        lineHeight: 1.6,
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {textContent.split('').map((char, index) => {
                        const isRevealed = index < charsToReveal

                        // Smooth gradient for edge characters
                        let opacity = 0.28 // WCAG AA minimum contrast
                        if (isRevealed) {
                            opacity = 1
                        } else if (index < charsToReveal + 15) {
                            opacity = 0.28 + (0.72 * (1 - (index - charsToReveal) / 15))
                        }

                        return (
                            <span
                                key={index}
                                style={{
                                    color: `rgba(0, 0, 0, ${opacity})`,
                                    transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                {char}
                            </span>
                        )
                    })}
                </p>
            </div>
        </section>
    )
}
