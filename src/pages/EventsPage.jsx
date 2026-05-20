import EventCard from '../components/EventCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { events } from '../data/events';

function EventsPage() {
  return (
    <>
      <PageTitle title="Events" />
      <PageHeader
        title="Events"
        description="Editable event cards that present campus programs, celebrations, seminars, and student activities."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}

export default EventsPage;
