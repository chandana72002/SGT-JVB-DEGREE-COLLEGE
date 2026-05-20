import CardImage from './CardImage';

function AchievementCard({ achievement }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)]">
      <CardImage image={achievement.image} />
      <h3 className="text-xl font-semibold text-slate-950">{achievement.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{achievement.description}</p>
    </article>
  );
}

export default AchievementCard;
