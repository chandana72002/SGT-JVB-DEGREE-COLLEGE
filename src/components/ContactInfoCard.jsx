function ContactInfoCard({ title, content, href }) {
  const wrapper = href ? 'a' : 'div';
  const props = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {};
  const Component = wrapper;

  return (
    <Component
      {...props}
      className="block rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)] hover:-translate-y-1"
    >
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">{title}</p>
      <p className="mt-4 text-base leading-7 text-slate-700">{content}</p>
    </Component>
  );
}

export default ContactInfoCard;
