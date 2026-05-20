import FacultyCard from '../components/FacultyCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { facultyMembers } from '../data/faculty';

function FacultyPage() {
  return (
    <>
      <PageTitle title="Faculty" />
      <PageHeader
        title="Faculty"
        description="Principal information and placeholder faculty profiles that can be updated later from the static data file."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {facultyMembers.map((faculty) => (
            <FacultyCard key={faculty.id} faculty={faculty} />
          ))}
        </div>
      </section>
    </>
  );
}

export default FacultyPage;
