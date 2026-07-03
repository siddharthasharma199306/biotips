import { BadgeCheck, Building2, Stethoscope } from "lucide-react";
import StatCard from "./stat-card";

const AboutTrustedByDoctors = () => {
  return (
    <section className="bg-base-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Trusted by Doctors
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Earned through
              <br />
              consistency, <span className="text-red-700">not promises.</span>
            </h2>

            <p className="max-w-2xl text-lg leading-8 text-base-content/75">
              We have earned the trust of thousands of doctors, specialists, and
              healthcare practitioners through consistent quality, reliable
              supply, and transparent communication.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            <StatCard
              icon={<Building2 size={28} />}
              value="25+"
              label="Years of Experience"
            />

            <StatCard
              icon={<Stethoscope size={28} />}
              value="500+"
              label="Doctors Recommend"
            />

            <StatCard
              icon={<BadgeCheck size={28} />}
              value="100+"
              label="Products in Range"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrustedByDoctors;
