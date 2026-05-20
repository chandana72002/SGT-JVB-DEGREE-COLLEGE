import CardImage from './CardImage';

function FacultyCard({ faculty }) {
  return (
    <article
      className={`rounded-3xl border p-6 shadow-[var(--shadow-soft)] ${
        faculty.featured
          ? 'border-brand-gold bg-gradient-to-br from-white to-amber-50'
          : 'border-slate-200 bg-white'
      }`}
    >
      <CardImage image={faculty.image} height="h-56" />
      {!faculty.image ? (
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy text-xl font-bold text-white">
          {faculty.name
            .split(' ')
            .slice(0, 2)
            .map((part) => part[0])
            .join('')}
        </div>
      ) : null}
      <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">{faculty.department}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-950">{faculty.name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-navy">{faculty.role}</p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{faculty.bio}</p>
      <p className="mt-5 text-sm text-slate-700">{faculty.qualification}</p>
    </article>
  );
}

export default FacultyCard;
