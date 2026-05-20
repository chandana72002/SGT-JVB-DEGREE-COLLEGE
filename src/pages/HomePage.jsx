import { Link } from 'react-router-dom';
import AchievementCard from '../components/AchievementCard';
import CardImage from '../components/CardImage';
import EventCard from '../components/EventCard';
import FacilityCard from '../components/FacilityCard';
import HeroSection from '../components/HeroSection';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { achievements } from '../data/achievements';
import { collegeInfo, homeHighlights, placementStats } from '../data/collegeInfo';
import { departments } from '../data/departments';
import { events } from '../data/events';
import { facilities } from '../data/facilities';
import { testimonials } from '../data/testimonials';
import { missionPoints, vision } from '../data/visionMission';

function HomePage() {
  return (
    <>
      <PageTitle title="Home" />
      <HeroSection info={collegeInfo} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="About The Institution"
          title="A professional, student-focused degree college serving Thullur and the surrounding region."
          description="S G T & J V B Degree College was established in 1996 at Thullur, Guntur, and continues to support learners through discipline, academic excellence, value-based education, and career-oriented growth."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeHighlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
              <CardImage image={item.image} />
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-brand-navy p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Establishment & Affiliation</p>
            <h2 className="mt-4 font-serif text-3xl">Strong academic roots with university affiliation.</h2>
            <p className="mt-5 text-sm leading-8 text-slate-200">
              Established in {collegeInfo.establishedYear}, the institution is {collegeInfo.affiliation.toLowerCase()} and remains committed to quality undergraduate education in a disciplined campus environment.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-brand-surface p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-navy">Quick Statistics</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {collegeInfo.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-brand-navy">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle eyebrow="Vision" title="Purposeful higher education rooted in values and responsibility." />
            <p className="mt-5 text-sm leading-8 text-slate-600">{vision.description}</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle eyebrow="Mission" title="Focused on access, discipline, confidence, and future readiness." />
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {missionPoints.slice(0, 3).map((point) => (
                <p key={point}>• {point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <SectionTitle eyebrow="Departments" title="Academic areas presented through editable sample data." />
            <Link to="/departments" className="hidden text-sm font-semibold text-brand-navy hover:text-brand-gold sm:inline-flex">
              View all departments
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {departments.slice(0, 3).map((department) => (
              <article key={department.id} className="rounded-3xl border border-slate-200 bg-brand-surface p-6">
                <CardImage image={department.image} />
                <h3 className="text-xl font-semibold text-slate-950">{department.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{department.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Facilities" title="Campus essentials that support everyday student life." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {facilities.slice(0, 4).map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Achievements" title="Institutional progress shaped through learning, discipline, and continuity." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.slice(0, 3).map((achievement) => (
              <AchievementCard key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Testimonials" title="Editable voices from students, alumni, and parents." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Events" title="Campus activities that encourage participation and growth." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Placements" title="Career support with guidance for employment and higher education." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {placementStats.map((stat) => (
            <article key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
              <CardImage image={stat.image} />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">{stat.label}</p>
              <p className="mt-4 text-2xl font-bold text-brand-navy">{stat.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-navy">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 text-white sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Contact The College</p>
            <h2 className="mt-4 font-serif text-3xl">Reach out for admissions, academic guidance, and campus enquiries.</h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={`tel:${collegeInfo.phone}`}
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-navy hover:bg-amber-300"
            >
              Call {collegeInfo.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white hover:text-brand-navy"
            >
              Visit Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
