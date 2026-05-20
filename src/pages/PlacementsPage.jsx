import CardImage from '../components/CardImage';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { placementStats } from '../data/collegeInfo';

const supportAreas = [
  'Career guidance for planning academic and professional pathways.',
  'Skill development support to improve confidence and employability.',
  'Interview preparation through communication and readiness-focused guidance.',
  'Higher education guidance for students planning advanced studies.',
];

function PlacementsPage() {
  return (
    <>
      <PageTitle title="Placements" />
      <PageHeader
        title="Placements"
        description="A simple placement support page highlighting career guidance, skill development, interview readiness, and higher education support."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-3xl text-slate-950">Placement Support Introduction</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600">
              The college encourages students to prepare for employment and higher education through guidance-oriented support, confidence-building, and career-focused development.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-slate-600">
              {supportAreas.map((item) => (
                <p key={item}>• {item}</p>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-3xl">Editable Placement Statistics</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {placementStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-6">
                  <CardImage image={stat.image} height="h-36" />
                  <p className="text-sm text-slate-200">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-brand-gold">{stat.value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default PlacementsPage;
