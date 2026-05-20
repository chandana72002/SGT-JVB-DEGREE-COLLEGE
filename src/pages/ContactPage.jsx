import ContactInfoCard from '../components/ContactInfoCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { collegeInfo } from '../data/collegeInfo';

function ContactPage() {
  return (
    <>
      <PageTitle title="Contact" />
      <PageHeader
        title="Contact"
        description="Reach S G T & J V B Degree College for admissions, academic guidance, and general enquiries."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ContactInfoCard title="College Name" content={collegeInfo.name} />
          <ContactInfoCard title="Address" content={collegeInfo.address} href={collegeInfo.mapUrl} />
          <ContactInfoCard title="Phone" content={collegeInfo.phone} href={`tel:${collegeInfo.phone}`} />
          <ContactInfoCard title="Email" content={collegeInfo.email} href={`mailto:${collegeInfo.email}`} />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[var(--shadow-soft)]">
            <iframe
              title="College location map"
              src={collegeInfo.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full border-0"
            />
          </article>
          <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
            <h2 className="font-serif text-3xl text-slate-950">Contact Form</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This is a static contact form UI for layout purposes only. It is not connected to any backend service.
            </p>
            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
                <input type="text" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-navy" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                <input type="email" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-navy" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span>
                <input type="tel" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-navy" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Message</span>
                <textarea rows="5" className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-navy" />
              </label>
              <button
                type="submit"
                className="inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white hover:bg-brand-navy-dark"
              >
                Send Message
              </button>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
