import { Link } from 'react-router-dom';
import { collegeInfo } from '../data/collegeInfo';

const quickLinks = [
  { label: 'About College', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Placements', to: '/placements' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="mt-16 bg-brand-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img src={collegeInfo.logo} alt={`${collegeInfo.shortName} logo`} className="h-16 w-16 rounded-full bg-white object-contain p-1" />
            <div>
              <h2 className="font-serif text-2xl">{collegeInfo.shortName}</h2>
              <p className="mt-1 text-sm text-slate-300">{collegeInfo.affiliation}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">{collegeInfo.address}</p>
          <p className="mt-3 text-sm text-slate-300">Phone: {collegeInfo.phone}</p>
          <p className="mt-1 text-sm text-slate-300">Email: {collegeInfo.email}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="mt-5 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-slate-300 hover:text-brand-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Reach Us</h3>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>Admissions, academic guidance, and general enquiries are welcome during college working hours.</p>
            <a
              href={`tel:${collegeInfo.phone}`}
              className="inline-flex rounded-full border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white hover:text-brand-navy"
            >
              Call {collegeInfo.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-300 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 S G T & J V B Degree College. All Rights Reserved.</p>
          <p>{collegeInfo.affiliation}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
