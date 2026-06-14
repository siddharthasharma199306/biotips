import { BadgeCheck, Building2, Stethoscope } from "lucide-react";

type StatCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="card border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="card-body items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-700">
          {icon}
        </div>

        <h3 className="text-3xl font-bold text-red-700">{value}</h3>

        <p className="text-sm font-medium text-base-content/75">{label}</p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Banner Section */}
      <section className="border-b border-red-200 bg-gradient-to-br from-red-100 via-red-50 to-rose-100">
        <div className="mx-auto flex min-h-[320px] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              About Biotips
            </p>

            <h1 className="mb-5 text-4xl font-bold leading-tight text-base-content md:text-5xl lg:text-6xl">
              Precision in Medicine.
              <br />
              Trust in Every Dose.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-base-content/75 md:text-xl">
              25+ years of pharmaceutical excellence — trusted by 500+ doctors
              across India.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Doctors Section */}
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
                We have earned the trust of thousands of doctors, specialists,
                and healthcare practitioners through consistent quality,
                reliable supply, and transparent communication.
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
    </main>
  );
}
