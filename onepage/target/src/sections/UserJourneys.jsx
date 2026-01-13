export default function UserJourneys() {
    const cards = [
        { title: 'Özellik 1', description: '[Özellik açıklaması buraya gelecek]' },
        { title: 'Özellik 2', description: '[Özellik açıklaması buraya gelecek]' },
    ]

    return (
        <section className="py-[var(--spacing-16)]">
            <div className="container">
                {/* Section Header */}
                <h2 className="text-title-1 text-[var(--color-text-primary)] text-center mb-[var(--spacing-10)]">
                    Nasıl Çalışır
                </h2>

                {/* 2-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-6)]">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="rounded-[var(--radius-2xl)] bg-[var(--color-neutral-10)] overflow-hidden"
                            style={{ boxShadow: 'var(--shadow-image-inset)' }}
                        >
                            {/* Video placeholder */}
                            <div className="aspect-video w-full bg-[var(--color-neutral-20)] flex items-center justify-center">
                                <span className="text-caption text-[var(--color-text-tertiary)]">
                                    [Video/Görsel]
                                </span>
                            </div>

                            {/* Caption */}
                            <div className="p-[var(--spacing-5)]">
                                <h3 className="text-title-3 text-[var(--color-text-primary)] mb-[var(--spacing-2)]">
                                    {card.title}
                                </h3>
                                <p className="text-body text-[var(--color-text-secondary)]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
