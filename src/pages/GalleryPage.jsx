import GalleryCard from '../components/GalleryCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { galleryItems } from '../data/gallery';

function GalleryPage() {
  return (
    <>
      <PageTitle title="Gallery" />
      <PageHeader
        title="Gallery"
        description="A responsive gallery grid using openly licensed education and campus images from Wikimedia Commons."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default GalleryPage;
