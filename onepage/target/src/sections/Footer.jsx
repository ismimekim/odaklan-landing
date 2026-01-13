export default function Footer() {
    return (
        <footer
            className="relative overflow-hidden"
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1,
                paddingTop: 'clamp(100px, 15vw, 160px)',
                paddingBottom: 'clamp(60px, 10vw, 100px)',
                background: 'linear-gradient(180deg, #1d1d1f 0%, #0d0d0f 100%)',
                minHeight: '420px',
            }}
        >
            <div className="container relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Large Typography - "YKS'ye odaklan" */}
                    <h2
                        className="mb-[var(--spacing-6)]"
                        style={{
                            fontSize: 'clamp(56px, 15vw, 180px)',
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            lineHeight: 0.9,
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textTransform: 'none',
                        }}
                    >
                        YKS'ye<br />
                        <span style={{
                            fontSize: '0.85em',
                            fontWeight: 800,
                            fontStyle: 'italic',
                        }}>
                            odaklan.
                        </span>
                    </h2>

                    {/* Tagline */}
                    <p
                        className="mb-[var(--spacing-8)] max-w-md"
                        style={{
                            fontSize: 'clamp(16px, 2.5vw, 20px)',
                            color: 'rgba(255,255,255,0.5)',
                            fontWeight: 500,
                            lineHeight: 1.5,
                        }}
                    >
                        <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>Pasif izleme</strong>'den <strong style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>aktif öğrenme</strong>'ye geçiş zamanı.
                    </p>

                    {/* Divider */}
                    <div
                        className="w-16 h-px mb-[var(--spacing-6)]"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                    />

                    {/* Logo */}
                    <div
                        className="mb-[var(--spacing-3)]"
                        style={{
                            fontSize: '18px',
                            fontWeight: 700,
                            color: 'rgba(255,255,255,0.7)',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        odaklan.co
                    </div>

                    {/* Copyright */}
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
                        © 2026 odaklan.co — YKS 2026 için Aktif Öğrenme Sistemi
                    </p>
                </div>
            </div>

            {/* Decorative gradient orb */}
            <div
                className="absolute pointer-events-none"
                style={{
                    bottom: '-30%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '400px',
                    background: 'radial-gradient(ellipse, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
            />
        </footer>
    )
}
