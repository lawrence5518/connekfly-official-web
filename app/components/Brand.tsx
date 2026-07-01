export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-mark" aria-label="ConnekFly">
      <div className="brand-icon" aria-hidden="true">
        <span className="brand-glyph">C</span>
      </div>
      {!compact && (
        <span className="brand-word">
          Connek<span>Fly</span>
        </span>
      )}
    </div>
  );
}

export function StatusPill({
  children,
  tone = "purple",
}: {
  children: React.ReactNode;
  tone?: "purple" | "green" | "gold" | "gray" | "red" | "blue";
}) {
  return <span className={`status-pill status-${tone}`}>{children}</span>;
}

export function MetricCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string | number;
  note: string;
}) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </article>
  );
}
