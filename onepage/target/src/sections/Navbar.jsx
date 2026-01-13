import { Zap } from 'lucide-react'

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-[var(--spacing-3)]">
            <nav
                className="flex items-center gap-[var(--spacing-6)] px-[var(--spacing-5)] py-[var(--spacing-2)] rounded-[var(--radius-full)]"
                style={{
                    background: 'rgba(255, 255, 255, 0.45)',
                    backdropFilter: 'blur(16px) saturate(200%)',
                    WebkitBackdropFilter: 'blur(16px) saturate(200%)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                }}
            >
                {/* Logo with Icon */}
                <div className="flex items-center gap-[var(--spacing-2)]">
                    <div className="w-6 h-6 rounded-[var(--radius-sm)] bg-[var(--color-neutral-100)] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[var(--color-bg-primary)]" strokeWidth={2.5} />
                    </div>
                    <span
                        className="text-[var(--color-neutral-100)]"
                        style={{
                            fontWeight: 700,
                            fontSize: '15px',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        odaklan
                    </span>
                </div>

                {/* Nav Links - Bold typography */}
                <div className="flex items-center gap-[var(--spacing-4)]">
                    <a
                        href="#method"
                        className="text-[var(--color-neutral-70)] hover:text-[var(--color-neutral-100)] transition-colors"
                        style={{
                            transitionDuration: 'var(--duration-default)',
                            transitionTimingFunction: 'var(--ease-out)',
                            fontWeight: 500,
                            fontSize: '14px',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Nasıl Çalışır
                    </a>
                    <a
                        href="#pricing"
                        className="text-[var(--color-neutral-70)] hover:text-[var(--color-neutral-100)] transition-colors"
                        style={{
                            transitionDuration: 'var(--duration-default)',
                            transitionTimingFunction: 'var(--ease-out)',
                            fontWeight: 500,
                            fontSize: '14px',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        Fiyat
                    </a>
                </div>

                {/* CTA Button - Dark for contrast on light navbar */}
                <a
                    href="#pricing"
                    className="bg-[var(--color-neutral-100)] text-[var(--color-bg-primary)] px-[var(--spacing-4)] py-[var(--spacing-2)] rounded-[var(--radius-full)] hover:bg-[var(--color-neutral-80)] transition-colors no-underline"
                    style={{
                        transitionDuration: 'var(--duration-default)',
                        transitionTimingFunction: 'var(--ease-out)',
                        fontWeight: 600,
                        fontSize: '14px',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Hemen Başla
                </a>
            </nav>
        </header>
    )
}
