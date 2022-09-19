import { useState } from "react";
import { useShopping } from "../context/ShoppingProvider";
import BuyArticle from "./BuyArticle";
import Modal from "./Modal";
import { v4 as uuid } from "uuid";
import {
  ACCESSORIES,
  HATS,
  PANTS,
  POLOSHIRTS,
  SHIRTS,
  SHOES,
} from "../data/data";

const categories = [
  { name: "TODO", value: "TODO" },
  { name: "Poloshirt", value: POLOSHIRTS },
  { name: "Calzado", value: SHOES },
  { name: "Pantalones", value: PANTS },
  { name: "Accesorios", value: ACCESSORIES },
  { name: "Camisas", value: SHIRTS },
  { name: "Gorras", value: HATS },
];

const Catalog = () => {
  const { articles } = useShopping();
  const [catalog, setCatalog] = useState(articles || []);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("TODO");

  const addItem = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const filterArticles = (category) => {
    setSelectedCategory(category);
    let filter;
    if (category === "TODO") filter = articles;
    else filter = articles.filter((item) => item.category === category);
    setCatalog(filter);
  };
  return (
    <div className="catalog-container">
      <h1 className="title">Catalógo</h1>
      <div className="categories">
        {categories.map((item) => (
          <button
            key={uuid()}
            className={item.value === selectedCategory ? "active" : ""}
            onClick={() => filterArticles(item.value)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <section className="catalog">
        {catalog.length > 0 &&
          catalog.map((item) => (
            <div key={uuid()} className="catalog-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <div className="actions">
                <span>RD$ {item.price}</span>
                <button onClick={() => addItem(item)}>Seleccionar</button>
              </div>
            </div>
          ))}
        {isOpen && selectedItem && (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <BuyArticle item={selectedItem} modalOpen={setIsOpen} />
          </Modal>
        )}
      </section>
    </div>
  );
};

export default Catalog;
