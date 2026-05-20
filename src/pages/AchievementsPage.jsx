import AchievementCard from '../components/AchievementCard';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import { achievements } from '../data/achievements';

function AchievementsPage() {
  return (
    <>
      <PageTitle title="Achievements" />
      <PageHeader
        title="Achievements"
        description="Academic, student, cultural, sports, and institutional achievement highlights presented as clean, editable content sections."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-[2rem] bg-brand-surface p-8">
          <p className="text-base leading-8 text-slate-700">
            S G T & J V B Degree College was established in 1996 and continues to serve students in the Thullur, Guntur region through a disciplined academic environment and a commitment to student development.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>
    </>
  );
}

export default AchievementsPage;
