
import { useEffect, useState } from "react";

const AddProductModal = ({
  open,
  onClose,
  onAdd,
  categories,
  editData,
}) => {
  const [form, setForm] = useState({
    name: "",
    image: "", // base64
    category: "",
    available: "",
    prices: { S: "", M: "", L: "" },
    orderType: [],
  });

  // PREFILL WHEN EDIT
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        image: editData.image || "",
        category: editData.category || "",
        available: editData.available || "",
        prices: {
          S: editData.price?.S || "",
          M: editData.price?.M || "",
          L: editData.price?.L || "",
        },
        orderType: editData.orderType || [],
      });
    }
  }, [editData]);

  if (!open) return null;

 
  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const imageUrl = URL.createObjectURL(file);

  setForm((prev) => ({
    ...prev,
    image: imageUrl,
  }));
};


  // ORDER TYPE TOGGLE
  const toggleOrderType = (type) => {
    setForm((prev) => ({
      ...prev,
      orderType: prev.orderType.includes(type)
        ? prev.orderType.filter((t) => t !== type)
        : [...prev.orderType, type],
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.category || !form.prices.S) {
      alert("Name, category & price (S) required");
      return;
    }

    onAdd({
      name: form.name,
      image: form.image,
      category: form.category,
      available: Number(form.available || 0),
      sizes: Object.keys(form.prices).filter(
        (k) => form.prices[k]
      ),
      price: form.prices,
      orderType: form.orderType,
    });

    if (!editData) {
      setForm({
        name: "",
        image: "",
        category: "",
        available: "",
        prices: { S: "", M: "", L: "" },
        orderType: [],
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[450px] rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          {editData ? "Edit Product" : "Add Product"}
        </h2>

        {/* NAME */}
        <input
          placeholder="Product name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />

        {/* IMAGE FILE INPUT */}
        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />

          {form.image && (
            <img
              src={form.image}
              alt="preview"
              className="w-20 h-20 rounded object-cover"
            />
          )}
        </div>

        {/* CATEGORY */}
        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>

        {/* STOCK */}
        <input
          type="number"
          placeholder="Stock"
          value={form.available}
          onChange={(e) =>
            setForm({ ...form, available: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />

        {/* PRICE BY SIZE */}
        {["S", "M", "L"].map((size) => (
          <div key={size} className="flex gap-2">
            <span className="w-6">{size}</span>
            <input
              type="number"
              placeholder={`Price ${size}`}
              value={form.prices[size]}
              onChange={(e) =>
                setForm({
                  ...form,
                  prices: {
                    ...form.prices,
                    [size]: e.target.value,
                  },
                })
              }
              className="flex-1 border px-3 py-2 rounded"
            />
          </div>
        ))}

        {/* ORDER TYPE */}
        <div>
          <p className="text-sm font-medium mb-2">
            Order Type
          </p>
          <div className="flex gap-2">
            {["DINE_IN", "TAKEAWAY", "DELIVERY"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => toggleOrderType(type)}
                className={`px-3 py-1 text-xs rounded-full border ${
                  form.orderType.includes(type)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {type.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-orange-500 text-white rounded"
          >
            {editData ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
