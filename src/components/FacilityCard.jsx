import CardImage from './CardImage';

function FacilityCard({ facility }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <CardImage image={facility.image} />
      <h3 className="mt-5 text-xl font-semibold text-slate-950">{facility.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{facility.description}</p>
    </article>
  );
}

export default FacilityCard;
