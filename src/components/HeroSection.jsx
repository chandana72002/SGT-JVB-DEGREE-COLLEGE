import { Link } from 'react-router-dom';
import { openSourceImages } from '../data/openSourceImages';

function HeroSection({ info }) {
  const heroImage = info.heroImage || openSourceImages.campusCourtyard;

  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <img
        src={heroImage.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,40,82,0.8),rgba(16,61,120,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,40,82,0.92),rgba(16,61,120,0.74),rgba(16,61,120,0.4))]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-18 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-gold">Higher Education Since {info.establishedYear}</p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {info.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">{info.heroSubtitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{info.heroMotto}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy hover:bg-amber-300"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-brand-navy"
            >
              Contact College
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Established</p>
              <p className="mt-2 text-lg font-semibold">{info.establishedYear}</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Affiliation</p>
              <p className="mt-2 text-lg font-semibold">Acharya Nagarjuna University</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Location</p>
              <p className="mt-2 text-lg font-semibold">{info.location}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-[2rem] border border-white/15 bg-white/12 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-white p-6 text-center text-slate-900">
              <img
                src={info.logo}
                alt={`${info.shortName} logo`}
                className="mx-auto h-40 w-40 object-contain"
              />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-brand-navy">College Profile</p>
              <h2 className="mt-3 font-serif text-2xl text-slate-950">{info.shortName}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A disciplined and student-focused degree college committed to meaningful learning and future readiness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
