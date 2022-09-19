import { v4 as uuid } from 'uuid';
import { icons, oferts, photo1, photo2 } from "../data/data";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="index">
      <section className="photos">
        <img src={photo1} alt="photo1" />
        <img src={photo2} alt="photo2" />

        <div className="categories">
          <h1>Categorías</h1>
          {icons.map(({ image, name }) => (
            <div key={uuid()} className="item">
              <img src={image} alt={name} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="oferts">
        <h1>Ofertas</h1>
        <div>
          <section className="catalog">
            {oferts.map((item) => (
                <div key={uuid()} className="catalog-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <div className="actions">
                    <span>RD$ {item.price}</span>
                  </div>
                </div>
              ))}   
          </section>
          <div className="watch-catalog">
            <Link to={'/catalogo'}>Ver catalogo</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
