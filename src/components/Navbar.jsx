import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { collegeInfo } from '../data/collegeInfo';

const navItems = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    children: [
      { label: 'About College', to: '/about' },
      { label: 'Vision & Mission', to: '/vision-mission' },
      { label: 'Achievements', to: '/achievements' },
      { label: 'Testimonials', to: '/testimonials' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Departments', to: '/departments' },
      { label: 'Courses', to: '/courses' },
      { label: 'Faculty', to: '/faculty' },
    ],
  },
  { label: 'Admissions', to: '/admissions' },
  {
    label: 'Campus Life',
    children: [
      { label: 'Facilities', to: '/facilities' },
      { label: 'Events', to: '/events' },
      { label: 'Gallery', to: '/gallery' },
    ],
  },
  { label: 'Placements', to: '/placements' },
  { label: 'Anti-Ragging', to: '/anti-ragging' },
  { label: 'Contact', to: '/contact' },
];

function NavItem({ item, mobile = false, closeMenu }) {
  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        onClick={closeMenu}
        className={({ isActive }) =>
          `inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
            isActive
              ? 'bg-brand-navy text-white'
              : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy'
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  if (mobile) {
    return (
      <div className="rounded-2xl border border-slate-200 p-3">
        <p className="px-2 text-sm font-bold text-brand-navy">{item.label}</p>
        <div className="mt-2 flex flex-col gap-2">
          {item.children.map((child) => (
            <NavLink
              key={child.to}
              to={child.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-3 py-2 text-sm ${
                  isActive ? 'bg-brand-navy text-white' : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-brand-navy"
      >
        {item.label}
        <span aria-hidden="true">▾</span>
      </button>
      <div className="invisible absolute left-0 top-full z-20 mt-3 min-w-56 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {item.children.map((child) => (
          <NavLink
            key={child.to}
            to={child.to}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 text-sm ${
                isActive ? 'bg-brand-surface font-semibold text-brand-navy' : 'text-slate-600 hover:bg-slate-50'
              }`
            }
          >
            {child.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={collegeInfo.logo} alt={`${collegeInfo.shortName} logo`} className="h-12 w-12 rounded-full object-contain" />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">S G T & J V B</p>
            <p className="truncate text-sm text-slate-600 sm:text-base">{collegeInfo.shortName}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex rounded-full border border-slate-200 p-3 text-brand-navy hover:bg-slate-100 lg:hidden"
        >
          <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} mobile closeMenu={() => setIsOpen(false)} />
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
