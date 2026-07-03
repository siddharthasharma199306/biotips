import ContactCard from "./contact-card";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactCards = () => {
  return (
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
  );
};

export default ContactCards;
