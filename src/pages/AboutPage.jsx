import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import { collegeInfo } from '../data/collegeInfo';

function AboutPage() {
  return (
    <>
      <PageTitle title="About" />
      <PageHeader
        title="About the Institution"
        description="A disciplined, student-focused degree college committed to quality higher education, value-based learning, and future readiness."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
            <SectionTitle eyebrow="College Overview" title="Serving students with purpose since 1996." />
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                S G T & J V B Degree College was established in 1996 at Thullur, Guntur. The institution is affiliated to Acharya Nagarjuna University and is committed to providing quality higher education to students in and around the region.
              </p>
              <p>
                The college promotes academic excellence, discipline, student development, and value-based education in a learning environment that encourages consistency, responsibility, and growth.
              </p>
              <p>
                Under the guidance of Principal B. Subbarao, the institution continues to help students build strong academic foundations and prepare confidently for higher studies, employment, and meaningful career opportunities.
              </p>
              <p>
                The college remains focused on accessible education, supportive teaching, and the holistic development of learners from rural and semi-urban communities.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <article className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-[var(--shadow-soft)]">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Institution Profile</p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <p><strong className="text-white">Established:</strong> {collegeInfo.establishedYear}</p>
                <p><strong className="text-white">Principal:</strong> {collegeInfo.principal}</p>
                <p><strong className="text-white">Affiliation:</strong> {collegeInfo.affiliation}</p>
                <p><strong className="text-white">Location:</strong> {collegeInfo.location}</p>
              </div>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-brand-surface p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-serif text-2xl text-slate-950">Student-Centered Environment</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                The institution is dedicated to creating a positive academic atmosphere that values discipline, learning, personal development, and career preparation.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
