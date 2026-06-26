import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  fetchCategories,
} from "../../../../features/product/ProductSlice";
import ProductCard from "./Product";
import ProductSkeleton from "../../Loading/ProductSkeleton";

const Products = () => {
  const dispatch = useDispatch();

  const { productItems, categories, page, pages, status } = useSelector(
    (state) => state.product,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(
      fetchProduct({
        page: currentPage,
        category: selectedCategory,
      }),
    );
  }, [currentPage, selectedCategory]);

  return (
    <main className="bg-surface text-on-surface">
      <main className="max-w-container-max mx-auto px-gutter py-xl">
        {/* TITLE */}
        <header className="mb-xl">
          <h1 className="font-display-lg text-display-lg">Our Products</h1>
        </header>

        {/* CATEGORY FILTER (API BASED) */}
        <section className="flex flex-wrap gap-sm mb-xl">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-lg py-sm rounded-full cursor-pointer ${
              selectedCategory === "" ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>

          {categories?.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-lg py-sm rounded-full cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-lg">
          {status === "loading"
            ? Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))
            : productItems?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-sm mt-xl">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border cursor-pointer"
          >
            Prev
          </button>

          <span>
            {currentPage} / {pages}
          </span>

          <button
            disabled={currentPage === pages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border cursor-pointer"
          >
            Next
          </button>
        </div>
      </main>
    </main>
  );
};

export default Products;
