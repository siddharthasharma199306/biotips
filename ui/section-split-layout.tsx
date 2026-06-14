// components/SectionSplitLayout.tsx

import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

type SectionSplitLayoutProps = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  imageClassName?: string;
};

const SectionSplitLayout = ({
  children,
  imageSrc,
  imageAlt,
  reverse = false,
  imageClassName,
}: SectionSplitLayoutProps) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <div
        className={clsx(
          "flex flex-col items-center gap-10 lg:gap-16",
          reverse ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        {/* Content */}
        <div className="w-full flex-1">{children}</div>

        {/* Image */}
        <div className="w-full flex-1">
          <div className="overflow-hidden rounded-4xl bg-base-200 shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={800}
              className={clsx(
                "h-[320px] w-full object-cover md:h-112.5 lg:h-150",
                imageClassName,
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSplitLayout;
