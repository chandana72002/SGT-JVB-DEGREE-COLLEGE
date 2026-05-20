function VisionMissionCard({ title, children, accent = 'navy', image, imageAlt }) {
  const accents = {
    navy: 'border-brand-navy bg-brand-navy text-white',
    gold: 'border-brand-gold bg-white text-slate-900',
  };

  return (
    <article className={`rounded-3xl border p-8 shadow-[var(--shadow-soft)] ${accents[accent]}`}>
      {image ? (
        <img
          src={image}
          alt={imageAlt || title}
          className="-mx-8 -mt-8 mb-8 h-64 w-[calc(100%+4rem)] object-cover"
        />
      ) : null}
      <h3 className="font-serif text-2xl">{title}</h3>
      <div className={`mt-5 space-y-4 text-sm leading-7 ${accent === 'navy' ? 'text-slate-100' : 'text-slate-600'}`}>
        {children}
      </div>
    </article>
  );
}

export default VisionMissionCard;
