function GalleryCard({ item }) {
  const image = item.image?.src ? item.image : { src: item.image, alt: item.title };

  return (
    <figure className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[var(--shadow-soft)]">
      <img
        src={image.src}
        alt={image.alt || item.title}
        loading="lazy"
        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <figcaption className="px-5 py-4 text-sm font-semibold text-slate-700">{item.title}</figcaption>
    </figure>
  );
}

export default GalleryCard;
