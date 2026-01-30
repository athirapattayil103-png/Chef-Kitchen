

import { useEffect, useState } from "react";
import AddProductModal from "../components/AddProductModal";
import { useCategory } from "../context/CategoryContext";

const Product = () => {
  const { categories } = useCategory();

  // ✅ ONLY USER ADDED PRODUCTS
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem("products");
    return stored ? JSON.parse(stored) : [];
  });

  const [openModal, setOpenModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // 🔒 SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // ➕ ADD / ✏️ UPDATE PRODUCT
  const handleAddProduct = (newProduct) => {
    if (editingProduct) {
      // UPDATE
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingProduct.id
            ? { ...p, ...newProduct }
            : p
        )
      );
    } else {
      // ADD
      setProducts((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...newProduct,
        },
      ]);
    }

    setEditingProduct(null);
    setOpenModal(false);
  };

  // ❌ DELETE PRODUCT
  const handleDelete = (id) => {
    if (!window.confirm("Delete this product?")) return;
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Products</h1>

        <button
          onClick={() => {
            setEditingProduct(null);
            setOpenModal(true);
          }}
          className="px-4 py-2 bg-slate-900 text-white rounded-lg"
        >
          Add Product
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Sizes</th>
              <th className="px-6 py-3">Order Type</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-400"
                >
                  No products added
                </td>
              </tr>
            ) : (
              products.map((item) => (
                <tr key={item.id} className="border-t">
                  {/* IMAGE */}
                  <td className="px-6 py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>

                  {/* NAME */}
                  <td className="px-6 py-4">{item.name}</td>

                  {/* CATEGORY */}
                  <td className="px-6 py-4 capitalize">
                    {item.category}
                  </td>

                  {/* STOCK */}
                  <td className="px-6 py-4">{item.available}</td>

                  {/* SIZES */}
                  <td className="px-6 py-4">
                    {item.sizes?.length
                      ? item.sizes.join(", ")
                      : "—"}
                  </td>

                  {/* ORDER TYPE */}
                  <td className="px-6 py-4 uppercase text-xs">
                    {item.orderType?.length
                      ? item.orderType.join(", ")
                      : "—"}
                  </td>

                  {/* ✅ ACTION BUTTONS */}
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => {
                        setEditingProduct(item);
                        setOpenModal(true);
                      }}
                      className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      <AddProductModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditingProduct(null);
        }}
        onAdd={handleAddProduct}
        categories={categories}
        editData={editingProduct}
      />
    </>
  );
};

export default Product;
