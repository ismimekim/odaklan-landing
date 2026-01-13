export default function Testimonials() {
    // Sample testimonials with varying lengths for masonry effect
    const testimonials = [
        { name: '[İsim 1]', company: '[Şirket]', text: '[Kullanıcı yorumu buraya gelecek.]' },
        { name: '[İsim 2]', company: '[Şirket]', text: '[Kullanıcı yorumu buraya gelecek. Bu biraz daha uzun bir yorum örneği.]' },
        { name: '[İsim 3]', company: '[Şirket]', text: '[Kısa yorum.]' },
        { name: '[İsim 4]', company: '[Şirket]', text: '[Kullanıcı yorumu buraya gelecek. Detaylı bir açıklama içerebilir.]' },
        { name: '[İsim 5]', company: '[Şirket]', text: '[Kısa yorum.]' },
        { name: '[İsim 6]', company: '[Şirket]', text: '[Kullanıcı yorumu buraya gelecek.]' },
    ]

    return (
        <section className="py-[var(--spacing-16)]">
            <div className="container">
                {/* Section Header */}
                <h2 className="text-title-1 text-[var(--color-text-primary)] text-center mb-[var(--spacing-10)]">
                    Kullanıcılarımız Ne Diyor?
                </h2>

                {/* 4-column masonry grid (using CSS columns) */}
                <div
                    className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-[var(--spacing-4)]"
                    style={{ columnFill: 'balance' }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid mb-[var(--spacing-4)] p-[var(--spacing-5)] rounded-[var(--radius-2xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border-secondary)]"
                        >
                            {/* Quote */}
                            <p className="text-body text-[var(--color-text-primary)] mb-[var(--spacing-4)]">
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-[var(--spacing-3)]">
                                {/* Avatar placeholder */}
                                <div className="w-10 h-10 rounded-[var(--radius-full)] bg-[var(--color-neutral-20)]" />

                                <div>
                                    <p className="text-compact-bold text-[var(--color-text-primary)]">
                                        {t.name}
                                    </p>
                                    <p className="text-caption text-[var(--color-text-secondary)]">
                                        {t.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
