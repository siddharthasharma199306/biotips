import { Mail, MapPin, Phone } from "lucide-react";

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  footer?: string;
};

function ContactCard({ icon, title, content, footer }: ContactCardProps) {
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
}

export default function ContactPage() {
  return (
    <main>
      {/* Banner Section */}
      <section className="border-b border-red-200 bg-linear-to-r from-red-100 via-red-50 to-red-100">
        <div className="mx-auto flex min-h-80 max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-700">
              Contact Us
            </p>

            <h1 className="mb-5 text-4xl font-bold text-base-content md:text-5xl">
              Let&apos;s Connect
            </h1>

            <p className="text-lg leading-relaxed text-base-content/75 md:text-xl">
              We&apos;re here to answer your questions and discuss how we can
              support your healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-base-100 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <ContactCard
              icon={<Mail size={28} />}
              title="Email Us"
              content={
                <a
                  href="mailto:biotipspharma@gmail.com"
                  className="font-medium text-red-700 hover:underline"
                >
                  biotipspharma@gmail.com
                </a>
              }
              footer="Response within 24 hours"
            />

            <ContactCard
              icon={<Phone size={28} />}
              title="Call Us"
              content={
                <a
                  href="tel:+919917237777"
                  className="font-medium text-red-700 hover:underline"
                >
                  +91 9917237777
                </a>
              }
              footer="Mon-Fri, 9AM-6PM IST"
            />

            <ContactCard
              icon={<MapPin size={28} />}
              title="Visit Us"
              content={
                <a
                  href="https://maps.app.goo.gl/429EX8w8TgN4wXeEA?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-y-1 text-red-700 transition hover:underline"
                >
                  <p>Sharanpur, Uttar Pradesh</p>
                  <p>India</p>
                </a>
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
}
