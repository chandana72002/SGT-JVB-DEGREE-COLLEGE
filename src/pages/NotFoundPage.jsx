import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';

function NotFoundPage() {
  return (
    <>
      <PageTitle title="Page Not Found" />
      <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-navy">404</p>
        <h1 className="mt-4 font-serif text-4xl text-slate-950">Page not found</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          The page you are looking for does not exist. You can return to the homepage and continue exploring the website.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white hover:bg-brand-navy-dark"
        >
          Back to Home
        </Link>
      </section>
    </>
  );
}

export default NotFoundPage;
