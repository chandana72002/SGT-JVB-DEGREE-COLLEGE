function AntiRaggingInfoCard({ title, items }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
        {items.map((item) => (
          <p key={item}>• {item}</p>
        ))}
      </div>
    </article>
  );
}

export default AntiRaggingInfoCard;
