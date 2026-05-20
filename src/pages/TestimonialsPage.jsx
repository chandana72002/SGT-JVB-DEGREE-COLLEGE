import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';

function TestimonialsPage() {
  return (
    <>
      <PageTitle title="Testimonials" />
      <PageHeader
        title="Testimonials"
        description="Editable testimonial cards for student, alumni, and parent perspectives on the college environment and experience."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TestimonialsPage;
