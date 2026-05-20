import AntiRaggingInfoCard from '../components/AntiRaggingInfoCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { antiRaggingInfo } from '../data/antiRagging';
import { collegeInfo } from '../data/collegeInfo';

function AntiRaggingPage() {
  return (
    <>
      <PageTitle title="Anti-Ragging" />
      <PageHeader
        title="Anti-Ragging"
        description="A professional anti-ragging page outlining the college policy, student responsibilities, complaint process, and support contacts."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-[var(--shadow-soft)]">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">Policy Introduction</p>
          <p className="mt-5 text-base leading-8 text-slate-100">{antiRaggingInfo.introduction}</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <AntiRaggingInfoCard title="Zero Tolerance Statement" items={[antiRaggingInfo.zeroTolerance]} />
          <AntiRaggingInfoCard title="Student Responsibilities" items={antiRaggingInfo.responsibilities} />
          <AntiRaggingInfoCard title="Complaint Process" items={antiRaggingInfo.complaintProcess} />
          <AntiRaggingInfoCard title="Anti-Ragging Committee Placeholder" items={antiRaggingInfo.committee} />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-3xl text-slate-950">Emergency Contact Details</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">Phone: {collegeInfo.phone}</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">Email: {collegeInfo.email}</p>
            <p className="mt-6 text-sm leading-7 text-slate-600">{antiRaggingInfo.awarenessMessage}</p>
          </article>
          <article className="rounded-[2rem] border border-dashed border-brand-navy bg-brand-surface p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-3xl text-slate-950">Download Undertaking</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Static UI button placeholder for an anti-ragging undertaking document download.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white hover:bg-brand-navy-dark"
            >
              Download Undertaking
            </button>
          </article>
        </div>
      </section>
    </>
  );
}

export default AntiRaggingPage;
