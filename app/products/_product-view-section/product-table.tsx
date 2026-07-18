import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/content/products";
import { Category } from "@/lib/content/categories";
import { Variant } from "@/lib/content/variants";
import useFilteredProducts from "../_hooks/useFilteredProducts";
import findPrimaryImage from "../_utils/find-primary-image";

const ProductTable = ({
  products,
  categories,
  variants,
}: {
  products: Product[];
  categories: Category[];
  variants: Variant[];
}) => {
  const { filteredProducts } = useFilteredProducts({
    products,
    categories,
    variants,
  });

  return (
    <div className="overflow-x-auto rounded-2xl border border-base-300 bg-base-100 shadow-sm">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Variant</th>
            <th>Composition</th>
            <th />
          </tr>
        </thead>

        <tbody>
          {filteredProducts.map((product) => {
            const primaryImage = findPrimaryImage(product.images);
            const categoryLabel =
              categories.find((item) => item.value === product.category)
                ?.label ?? product.category;
            const variantLabel =
              variants.find((item) => item.value === product.variant)?.label ??
              product.variant;
            return (
              <tr key={product.slug}>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="h-14 w-14 rounded-lg bg-base-200">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_ASSET_URL}/${primaryImage}`}
                          alt={product.title}
                          width={56}
                          height={56}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="font-semibold">{product.title}</div>

                      <div className="text-sm text-base-content/60 line-clamp-1">
                        {product.description}
                      </div>
                    </div>
                  </div>
                </td>

                <td>{categoryLabel}</td>

                <td>{variantLabel}</td>

                <td className="max-w-70">
                  <div className="space-y-1">
                    {product.salts.map((salt) => (
                      <div
                        key={`${salt.name}-${salt.dosage}`}
                        className="text-sm text-base-content/75"
                      >
                        <span className="font-medium">{salt.name}</span>{" "}
                        {salt.dosage}
                      </div>
                    ))}
                  </div>
                </td>

                <td>
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn btn-primary btn-sm"
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
