export default function AppTicker() {
    // Placeholder app icons
    const apps = Array(12).fill(null)

    return (
        <section className="py-[var(--spacing-10)] overflow-hidden border-t border-[var(--color-border-divider)]">
            {/* Static row (animation deferred) */}
            <div className="flex items-center gap-[var(--spacing-8)] justify-center">
                {apps.map((_, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-12 h-12 rounded-[var(--radius-xl)] bg-[var(--color-neutral-10)]"
                    />
                ))}
            </div>
        </section>
    )
}
