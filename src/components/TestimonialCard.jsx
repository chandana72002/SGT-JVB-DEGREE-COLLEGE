import CardImage from './CardImage';

function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <CardImage image={testimonial.image} />
      <p className="text-base leading-8 text-slate-700">&quot;{testimonial.message}&quot;</p>
      <div className="mt-6">
        <p className="font-semibold text-slate-950">{testimonial.name}</p>
        <p className="text-sm text-brand-navy">{testimonial.role}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
