import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: product });

    // Show toast (Bootstrap 5)
    const toastElement = document.getElementById("cartToast");
    if (toastElement) {
      const toast = new window.bootstrap.Toast(toastElement);
      toast.show();
    }
  };

  return (
    <div className="card h-100 shadow-sm rounded-4">
      <div
        className="p-3 d-flex justify-content-center align-items-center"
        style={{ height: "180px" }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        />
      </div>

      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text fw-semibold">${product.price}</p>
        <button className="btn btn-primary w-100" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
