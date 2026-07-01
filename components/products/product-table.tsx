import Link from "next/link";

import useFilteredProducts from "./hooks/useFilteredProducts";
import findPrimaryImage from "./utils/find-primary-image";
import { Product } from "@/lib/content/products";
import { Category } from "@/lib/content/categories";
import { Variant } from "@/lib/content/variants";

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
            return (
              <tr key={product.slug}>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="h-14 w-14 rounded-lg bg-base-200">
                        <img src={primaryImage} alt={product.title} />
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

                <td>{product.category}</td>

                <td>{product.variant}</td>

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
