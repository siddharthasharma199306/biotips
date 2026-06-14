// ui/product-carousel.tsx

"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";

type ProductCarouselProps = {
  images: string[];
  title: string;
};

const ProductCarousel = ({ images, title }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div
        className="overflow-hidden rounded-[32px] bg-base-200"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="relative h-[350px] md:h-[500px] lg:h-[650px]">
                <Image
                  src={image}
                  alt={`${title}-${index}`}
                  fill
                  className="object-contain p-8"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        className="btn btn-circle absolute left-4 top-1/2 -translate-y-1/2"
      >
        ❮
      </button>

      <button
        onClick={scrollNext}
        className="btn btn-circle absolute right-4 top-1/2 -translate-y-1/2"
      >
        ❯
      </button>
    </div>
  );
};

export default ProductCarousel;
