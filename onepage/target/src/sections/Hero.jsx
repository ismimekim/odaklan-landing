import { BookOpen, Brain, Target, Zap, CheckCircle, FileText, Sparkles, Play, Clock, Repeat, TrendingUp } from 'lucide-react'

export default function Hero() {
    return (
        <section className="sky-hero min-h-screen flex flex-col items-center justify-center text-center pt-[var(--spacing-20)] pb-[var(--spacing-16)] relative overflow-hidden">
            {/* Cloud overlay */}
            <div className="cloud-overlay" />

            {/* Floating Cards - Bold keyword typography style */}
            {/* Desktop only - hidden on mobile/tablet */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">

                {/* Top Left Card - "Günde 30 dk yeter" */}
                <div
                    className="floating-card float-delay-1"
                    style={{
                        left: '10%',
                        top: '18%',
                        transform: 'rotate(-4deg)',
                        width: '200px',
                    }}
                >
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                        Günde <span style={{ fontWeight: 800 }}>30 dk</span> yeter
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                        Uzun saatler değil, <strong>doğru yöntem.</strong>
                    </p>
                    {/* Floating Pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                            padding: '4px 10px', borderRadius: '20px',
                            backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                            fontSize: '11px', color: 'var(--color-text-secondary)'
                        }}>
                            Süre <span style={{ color: 'rgb(22, 163, 74)', fontWeight: 700 }}>↑ Verimli</span>
                        </span>
                    </div>
                </div>

                {/* Top Right Card - "Akıllı Tekrar" */}
                <div
                    className="floating-card float-delay-2"
                    style={{
                        right: '10%',
                        top: '15%',
                        transform: 'rotate(3deg)',
                        width: '210px',
                    }}
                >
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                        <span style={{ fontWeight: 800 }}>Akıllı</span> Tekrar
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                        <strong>Unutmadan önce</strong> hatırlat sistemi.
                    </p>
                    {/* Floating Pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                            padding: '4px 10px', borderRadius: '20px',
                            backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                            fontSize: '11px', color: 'var(--color-text-secondary)'
                        }}>
                            Hafıza <span style={{ color: 'rgb(22, 163, 74)', fontWeight: 700 }}>↑ 3x</span>
                        </span>
                    </div>
                </div>

                {/* Left Card - "Sonuç" */}
                <div
                    className="floating-card float-delay-3"
                    style={{
                        left: '6%',
                        top: '45%',
                        transform: 'rotate(-5deg)',
                        width: '200px',
                    }}
                >
                    <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                        <span style={{ fontWeight: 800 }}>Sonuç</span>
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--color-text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                        <strong>Net artışı,</strong> gerçek anlama.
                    </p>
                    {/* Floating Pills */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                            padding: '4px 10px', borderRadius: '20px',
                            backgroundColor: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                            fontSize: '11px', color: 'var(--color-text-secondary)'
                        }}>
                            Netler <span style={{ color: 'rgb(22, 163, 74)', fontWeight: 700 }}>↑ %40</span>
                        </span>
                    </div>
                </div>

                {/* Right Card - Stats Card */}
                <div
                    className="floating-card float-delay-1"
                    style={{
                        right: '8%',
                        top: '50%',
                        transform: 'rotate(4deg)',
                        width: '190px',
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>YKS 2026</span>
                        <Zap style={{ width: '14px', height: '14px', color: 'rgb(59, 130, 246)' }} />
                    </div>
                    <div style={{ textAlign: 'center', padding: '8px 0' }}>
                        <div style={{ fontSize: '28px', fontWeight: 800, color: 'white', marginBottom: '2px' }}>35+</div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Özel AI Promptu</div>
                    </div>
                    {/* Pill badge */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                            padding: '4px 10px', borderRadius: '20px',
                            backgroundColor: 'rgba(59, 130, 246, 0.2)',
                            fontSize: '10px', color: 'rgba(255,255,255,0.7)'
                        }}>
                            TYT + AYT <span style={{ color: 'rgb(96, 165, 250)', fontWeight: 700 }}>Tüm Dersler</span>
                        </span>
                    </div>
                </div>

            </div>

            {/* Content */}
            <div className="container relative z-20 px-4 sm:px-6">
                {/* Top Label - Glassmorphism Dark Pill */}
                <div
                    className="animate-hero-label inline-block mb-[var(--spacing-6)] px-[var(--spacing-5)] py-[var(--spacing-2)] rounded-[var(--radius-full)] text-compact"
                    style={{
                        background: 'rgba(17, 24, 39, 0.85)',
                        backdropFilter: 'blur(20px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                        color: 'rgba(255, 255, 255, 0.9)',
                    }}
                >
                    <span style={{ fontWeight: 600 }}>YKS 2026</span> için Aktif Öğrenme Sistemi
                </div>

                {/* H1 Heading */}
                <h1 className="animate-hero-heading text-showcase text-[var(--color-text-inverse)] mb-[var(--spacing-6)] max-w-4xl mx-auto leading-tight">
                    Sadece izleme.<br />
                    <span className="text-highlight">Gerçekten öğren.</span>
                </h1>

                {/* Subtitle - White text with bold keywords (Apple style) */}
                <div className="animate-hero-subtitle text-feature mb-[var(--spacing-8)] max-w-2xl mx-auto px-4 text-center" style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: 'clamp(18px, 2.5vw, 22px)',
                    lineHeight: 1.35,
                    fontWeight: 500,
                }}>
                    <p style={{ marginBottom: '0' }}>
                        Binlerce video izleyip sınavda <strong style={{ fontWeight: 900, color: '#ffffff' }}>kalemi oynatamıyor</strong> musun?
                    </p>
                    <p>
                        <strong style={{ fontWeight: 900, color: '#ffffff' }}>Videoları YKS netlerine</strong> çeviren sistemle tanış.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="animate-hero-cta flex flex-col items-center justify-center gap-3">
                    <a
                        href="#pricing"
                        className="relative overflow-hidden bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-[var(--spacing-6)] py-[var(--spacing-3)] rounded-[var(--radius-full)] hover:bg-[var(--color-neutral-5)] transition-colors no-underline shadow-lg"
                        style={{
                            transitionDuration: 'var(--duration-default)',
                            transitionTimingFunction: 'var(--ease-out)',
                            fontWeight: 700,
                            fontSize: '16px',
                            letterSpacing: '-0.01em',
                        }}
                    >
                        <span className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            Hemen İncele
                        </span>
                    </a>
                </div>
            </div>

            {/* Remy AI style cloud transition */}
            <div
                className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
                style={{
                    background: `
                        linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.7) 60%, var(--color-bg-primary) 100%)
                    `,
                }}
            />
            {/* Cloud shapes overlay */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 400px 120px at 20% 100%, rgba(255,255,255,0.95) 0%, transparent 70%),
                        radial-gradient(ellipse 500px 150px at 80% 100%, rgba(255,255,255,0.95) 0%, transparent 70%),
                        radial-gradient(ellipse 600px 180px at 50% 100%, rgba(255,255,255,0.98) 0%, transparent 60%)
                    `,
                }}
            />
        </section>
    )
}
