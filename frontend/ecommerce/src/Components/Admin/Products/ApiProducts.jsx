import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProducts,
  deleteProduct,
} from "../../../features/admin/adminProductSlice";

const ApiProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading } = useSelector((state) => state.adminProduct);

  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    setDeletingId(id);

    await dispatch(deleteProduct(id));

    setDeletingId(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate("/admin/productForm")}
        className="w-35 mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
      >
        Add Product
      </button>

      <h1 className="text-3xl font-bold text-center mb-8">
        {products?.length ? "All Products" : "No Products"}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image?.url}
              alt={product.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-bold">{product.title}</h2>

              <p className="text-gray-600 text-sm">{product.description}</p>

              <div className="flex justify-between text-sm text-gray-700">
                <span>₹{product.price}</span>
                <span>{product.category}</span>
              </div>

              <p className="text-sm">
                Stock:
                <span className="font-semibold ml-1">{product.stock}</span>
              </p>

              <button
                onClick={() => navigate(`/admin/editProduct/${product._id}`)}
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(product._id)}
                disabled={deletingId === product._id}
                className="w-full mt-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
              >
                {deletingId === product._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/admin/productForm")}
        className="w-35 mt-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
      >
        Add Product
      </button>
    </div>
  );
};

export default ApiProducts;
