import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
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
};

export default StatCard;
