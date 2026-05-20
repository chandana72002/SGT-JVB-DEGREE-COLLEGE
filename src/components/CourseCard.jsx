import CardImage from './CardImage';

function CourseCard({ course }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <CardImage image={course.image} />
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-950">{course.name}</h3>
        <span className="rounded-full bg-brand-surface px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-navy">
          {course.duration}
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{course.description}</p>
      <p className="mt-5 text-sm font-medium text-slate-700">Eligibility: {course.eligibility}</p>
    </article>
  );
}

export default CourseCard;
