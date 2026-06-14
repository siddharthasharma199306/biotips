// ProductCategoryCard.tsx

import Link from "next/link";
import Image from "next/image";

type Salt = {
  name: string;
  dosage: string;
};
type ProductCategoryCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  category: string;
  variant?: string;
  salts?: Salt[];
  imageAlt?: string;
  buttonText?: string;
};

const ProductCategoryCard = ({
  title,
  category,
  variant,
  description,
  imageSrc,
  slug,
  salts = [],
  imageAlt,
  buttonText = "Explore",
}: ProductCategoryCardProps) => {
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-[400px] overflow-hidden rounded-[32px] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <figure className="relative h-64 w-full bg-base-200">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-contain p-6"
        />
      </figure>

      <div className="card-body">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {category}
          </span>

          {variant && (
            <span className="rounded-full bg-base-200 px-3 py-1 text-xs text-base-content/70">
              {variant}
            </span>
          )}
        </div>
        <h2 className="card-title text-xl">{title}</h2>

        <p className="text-sm text-base-content/70">{description}</p>

        {salts.length > 0 && (
          <div className="mt-4 rounded-2xl bg-base-200 p-4">
            <h3 className="mb-3 text-sm font-semibold text-primary">
              Composition
            </h3>

            <div className="space-y-2">
              {salts.map((salt) => (
                <div
                  key={`${salt.name}-${salt.dosage}`}
                  className="flex items-start justify-between gap-4 text-sm"
                >
                  <span className="font-medium">{salt.name}</span>

                  <span className="whitespace-nowrap text-base-content/70">
                    {salt.dosage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="card-actions justify-end pt-4">
          <Link
            href={`/products/${slug}`}
            className="btn btn-primary rounded-full"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
