import FacilityCard from '../components/FacilityCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { facilities } from '../data/facilities';

function FacilitiesPage() {
  return (
    <>
      <PageTitle title="Facilities" />
      <PageHeader
        title="Facilities"
        description="Clean, responsive facility cards highlighting the campus essentials that support student life and learning."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </section>
    </>
  );
}

export default FacilitiesPage;
