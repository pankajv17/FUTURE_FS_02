import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { state, dispatch } = useCart();

    const totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <div className="container py-4">
            <h2 className="mb-3">Shopping Cart</h2>
            {state.cartItems.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <div className="text-center">
                        <img
                            src="/empty-cart.png"
                            alt="Empty Cart"
                            className="img-fluid"
                            style={{ width: "100%", height: "auto", maxHeight:"300px", objectFit: "cover"  }}
                        />
                        <p className="mt-3">Your cart is currently empty.</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <Link to="/" className="btn btn-secondary d-flex align-items-center justify-content-center me-3">
                            <i className="bi bi-arrow-left "></i> Continue Shopping
                        </Link>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="row">
                        {state.cartItems.map((item) => (
                            <div key={item._id} className="col-md-4 mb-3">
                                <div className="card p-3 shadow-sm rounded-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="card-img-top"
                                        style={{ height: "180px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text fw-semibold">${item.price}</p>
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.qty}
                                            className="form-control d-inline-block"
                                            style={{ width: "80px" }}
                                            onChange={(e) =>
                                                dispatch({
                                                    type: "UPDATE_QTY",
                                                    payload: { id: item._id, qty: Number(e.target.value) }
                                                })
                                            }
                                        />
                                        <button
                                            className="btn btn-outline-danger mt-2"
                                            onClick={() =>
                                                dispatch({ type: "REMOVE_ITEM", payload: item._id })
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <hr />
                    <h3 className="mb-3">Order Summary</h3>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>Total Items: {state.cartItems.reduce((acc, item) => acc + item.qty, 0)}</h4>
                        <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
                    </div>
                    <hr />

                    <button className="btn btn-danger mt-3" onClick={() => dispatch({ type: "CLEAR_CART" })}>
                        Clear Cart
                    </button>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                        <Link to="/checkout" className="btn btn-success">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
