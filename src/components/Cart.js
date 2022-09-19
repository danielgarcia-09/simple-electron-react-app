import { useShopping } from "../context/ShoppingProvider";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, deleteFromCart, clearCart } = useShopping();
  const [total, setTotal] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (cart) setTotal(cart.reduce((prev, curr) => prev + curr.total, 0));
  }, [cart]);

  const deleteItem = (item) => {
    deleteFromCart(item);
  };

  const cleanCart = () => {
    clearCart();
    navigate('/catalogo');
  }

  return (
    <div className="cart-container">
      <h1 className="title">Carrito</h1>
      <div className="cart-items">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={uuid()} className="cart-item">
                <div className="description">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <p>{item.name}</p>
                    <span>RD$ {item.price}</span>
                  </div>
                </div>

                <div className="item-cant">
                  <h2>CANT.</h2>
                  <p>{item.count}</p>
                </div>
                <div className="item-cant">
                  <h2>TOTAL</h2>
                  <p>RD$ {item.total}</p>
                </div>

                <div className="delete-item" onClick={() => deleteItem(item)}>
                  X
                </div>
              </div>
            ))}
            <div className="total">
              <h2>
                TOTAL: <span>RD$ {total}</span>
              </h2>
              <button onClick={() => cleanCart()}>Despachar Cliente</button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <h1>El carrito de compras está vacío</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
