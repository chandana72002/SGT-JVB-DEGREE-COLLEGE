import CourseCard from '../components/CourseCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { courses } from '../data/courses';

function CoursesPage() {
  return (
    <>
      <PageTitle title="Courses" />
      <PageHeader
        title="Courses"
        description="Undergraduate program information presented through static, editable course data inside the frontend project."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}

export default CoursesPage;
