import { useEffect, useRef } from 'react'

/**
 * Custom hook for scroll-triggered reveal animations
 * Uses IntersectionObserver to add 'visible' class when element enters viewport
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Check if VR mode or reduced motion
        const isVRMode = document.documentElement.classList.contains('vr-mode')
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        if (isVRMode || prefersReducedMotion) {
            // Immediately show without animation
            element.classList.add('visible')
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        // Optionally unobserve after revealing
                        if (options.once !== false) {
                            observer.unobserve(entry.target)
                        }
                    }
                })
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -50px 0px',
            }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [options.threshold, options.rootMargin, options.once])

    return ref
}

export default useScrollReveal
