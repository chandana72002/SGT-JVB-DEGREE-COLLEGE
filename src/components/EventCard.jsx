import CardImage from './CardImage';

function EventCard({ event }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <CardImage image={event.image} />
      <span className="inline-flex rounded-full bg-brand-gold-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
        {event.date}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{event.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{event.description}</p>
    </article>
  );
}

export default EventCard;
