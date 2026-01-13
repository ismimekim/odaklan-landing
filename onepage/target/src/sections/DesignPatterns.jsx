export default function DesignPatterns() {
    const tabs = ['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4']
    const cards = Array(6).fill(null)

    return (
        <section className="py-[var(--spacing-16)]">
            <div className="container">
                {/* Section Header */}
                <h2 className="text-title-1 text-[var(--color-text-primary)] text-center mb-[var(--spacing-8)]">
                    Özellikler
                </h2>

                {/* Segmented Control */}
                <div className="flex justify-center mb-[var(--spacing-10)]">
                    <div className="inline-flex items-center gap-[var(--spacing-1)] p-[var(--spacing-1)] rounded-[var(--radius-full)] bg-[var(--color-bg-secondary)]">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                className={`px-[var(--spacing-4)] py-[var(--spacing-2)] rounded-[var(--radius-full)] text-compact-bold transition-colors ${i === 0
                                    ? 'bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] shadow-[var(--shadow-xs)]'
                                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                                    }`}
                                style={{ transitionDuration: 'var(--duration-medium)', transitionTimingFunction: 'var(--ease-in-out)' }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Marquee placeholder (static, animation deferred) */}
                <div className="flex gap-[var(--spacing-4)] overflow-x-auto pb-[var(--spacing-4)] -mx-[var(--spacing-4)] px-[var(--spacing-4)]">
                    {cards.map((_, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-64 aspect-[3/4] rounded-[var(--radius-2xl)] bg-[var(--color-neutral-10)] overflow-hidden"
                            style={{ boxShadow: 'var(--shadow-image-inset)' }}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-caption text-[var(--color-text-tertiary)]">
                                    Görsel {i + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
