import { pageHeaderImages } from '../data/openSourceImages';

function PageHeader({ title, description, image }) {
  const headerImage = image || pageHeaderImages[title];
  const hasImage = Boolean(headerImage?.src);

  return (
    <section className={`relative overflow-hidden border-b border-slate-200 ${hasImage ? 'bg-brand-navy text-white' : 'bg-white'}`}>
      {hasImage ? (
        <>
          <img
            src={headerImage.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,40,82,0.9),rgba(16,61,120,0.74),rgba(16,61,120,0.36))]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,166,58,0.18),_transparent_28%)]" />
      )}
      <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8">
        <p className={`text-sm font-bold uppercase tracking-[0.24em] ${hasImage ? 'text-brand-gold' : 'text-brand-navy'}`}>
          S G T & J V B Degree College
        </p>
        <h1 className={`mt-4 max-w-3xl font-serif text-4xl sm:text-5xl ${hasImage ? 'text-white' : 'text-slate-950'}`}>
          {title}
        </h1>
        <p className={`mt-5 max-w-3xl text-lg leading-8 ${hasImage ? 'text-slate-100' : 'text-slate-600'}`}>
          {description}
        </p>
      </div>
    </section>
  );
}

export default PageHeader;
