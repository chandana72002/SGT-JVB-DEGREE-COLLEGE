import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import SectionTitle from '../components/SectionTitle';
import { collegeInfo } from '../data/collegeInfo';

const documents = [
  'Previous academic marks memo',
  'Transfer certificate',
  'Study certificate',
  'Caste certificate if applicable',
  'Aadhaar card',
  'Passport size photos',
];

function AdmissionsPage() {
  return (
    <>
      <PageTitle title="Admissions" />
      <PageHeader
        title="Admissions"
        description="Clear admission guidance for prospective students seeking undergraduate education at S G T & J V B Degree College."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
              <SectionTitle eyebrow="Admission Process" title="Simple and supportive steps for joining the college." />
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p>1. Contact the college or visit the campus to enquire about available programs.</p>
                <p>2. Review eligibility and prepare the required admission documents.</p>
                <p>3. Submit your application and complete the admission guidance process.</p>
                <p>4. Confirm admission after document verification and fee-related institutional formalities.</p>
              </div>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-serif text-3xl text-slate-950">Eligibility</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Candidates seeking admission to undergraduate programs should have completed Intermediate or an equivalent qualification, subject to course-specific institutional norms.
              </p>
            </article>
          </div>

          <div className="space-y-8">
            <article className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-[var(--shadow-soft)]">
              <h2 className="font-serif text-3xl">Required Documents</h2>
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-200">
                {documents.map((document) => (
                  <p key={document}>• {document}</p>
                ))}
              </div>
            </article>
            <article className="rounded-[2rem] border border-slate-200 bg-brand-surface p-8 shadow-[var(--shadow-soft)]">
              <h2 className="font-serif text-3xl text-slate-950">Admission Help</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                For admission-related support, students and parents can contact the college directly by phone or email.
              </p>
              <div className="mt-6 flex flex-col gap-4">
                <a
                  href={`tel:${collegeInfo.phone}`}
                  className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white hover:bg-brand-navy-dark"
                >
                  Call {collegeInfo.phone}
                </a>
                <a
                  href={`mailto:${collegeInfo.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-brand-navy px-6 py-3 text-sm font-bold text-brand-navy hover:bg-white"
                >
                  Email {collegeInfo.email}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdmissionsPage;
