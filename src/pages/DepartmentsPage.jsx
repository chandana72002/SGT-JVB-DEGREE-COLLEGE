import DepartmentCard from '../components/DepartmentCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { departments } from '../data/departments';

function DepartmentsPage() {
  return (
    <>
      <PageTitle title="Departments" />
      <PageHeader
        title="Departments"
        description="Academic department cards built from editable sample data so the college can easily update them later."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      </section>
    </>
  );
}

export default DepartmentsPage;
