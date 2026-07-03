import { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  footer?: string;
}

const ContactCard = ({ icon, title, content, footer }: ContactCardProps) => {
  return (
    <div className="card border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="card-body items-center text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-700">
          {icon}
        </div>

        <h3 className="text-xl font-semibold">{title}</h3>

        <div className="space-y-1 text-base-content/80">{content}</div>

        {footer ? (
          <p className="mt-2 text-sm text-base-content/60">{footer}</p>
        ) : null}
      </div>
    </div>
  );
};

export default ContactCard;
