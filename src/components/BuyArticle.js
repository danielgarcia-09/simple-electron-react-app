import { useState } from "react";
import { useShopping } from "../context/ShoppingProvider";

const BuyArticle = ({ item, modalOpen }) => {

  const { addToCart } = useShopping();
  const [count, setCount] = useState(item.count || 1);

  const handleSubCount = () => {
    if (count === 1) return;
    setCount((count) => count - 1);
  };

  const handleAddCount = () => {
    setCount((count) => count + 1);
  };

  const handleSubmit = () => {
    addToCart({
    ...item,
      count,
      total: item.price * count
    });
    modalOpen(false)
  };
  return (
    <div className="buy-item">
      <div className="description">
        <img src={item.image} alt={item.name} />

        <div>
          <p>{item.name}</p>
          <span>RD$ {item.price}</span>
        </div>
      </div>

      <div className="actions">
        <div className="quantity">
          <h2 onClick={handleSubCount}> - </h2>
          <p>{count}</p>
          <h2 onClick={handleAddCount}> + </h2>
        </div>
        <button onClick={() => handleSubmit()}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default BuyArticle;
