import AnimatedCounter from "@/ui/reusable-counter";
import { stats } from "./stats-util";

const CounterCard = () => {
  return (
    <div className=" w-full max-w-5xl">
      <div className="rounded-4xl border border-white/20 bg-neutral-50/90 p-6 shadow-2xl backdrop-blur-lg lg:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <AnimatedCounter to={stat.value} suffix={stat.suffix} />

              <p className="mt-3 text-sm font-medium text-base-content/70 lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
