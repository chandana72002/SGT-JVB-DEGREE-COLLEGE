import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import VisionMissionCard from '../components/VisionMissionCard';
import { openSourceImages } from '../data/openSourceImages';
import { coreValues, missionPoints, vision } from '../data/visionMission';

function VisionMissionPage() {
  return (
    <>
      <PageTitle title="Vision & Mission" />
      <PageHeader
        title="Vision, Mission, and Core Values"
        description="The principles that shape the institution’s commitment to quality education, discipline, and meaningful student development."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <VisionMissionCard
            title={vision.title}
            accent="navy"
            image={openSourceImages.campusCourtyard.src}
            imageAlt={openSourceImages.campusCourtyard.alt}
          >
            <p>{vision.description}</p>
          </VisionMissionCard>
          <VisionMissionCard
            title="Mission"
            accent="gold"
            image={openSourceImages.seminarRoom.src}
            imageAlt={openSourceImages.seminarRoom.alt}
          >
            {missionPoints.map((point) => (
              <p key={point}>• {point}</p>
            ))}
          </VisionMissionCard>
        </div>
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[var(--shadow-soft)]">
          <h2 className="font-serif text-3xl text-slate-950">Core Values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <div key={value} className="rounded-2xl bg-brand-surface px-5 py-4 text-center font-semibold text-brand-navy">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionMissionPage;
