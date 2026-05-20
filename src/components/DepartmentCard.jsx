import CardImage from './CardImage';

function DepartmentCard({ department }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <CardImage image={department.image} />
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">Editable Sample Data</p>
      <h3 className="mt-4 text-xl font-semibold text-slate-950">{department.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{department.description}</p>
    </article>
  );
}

export default DepartmentCard;
