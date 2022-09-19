import { Link, useLocation } from "react-router-dom";
import { v4 as uuid } from 'uuid';

const links = [
  { url: "/", name: "Inicio" },
  { url: "/catalogo", name: "Catálogo" },
  { url: "/carrito", name: "Carrito" },
];

const Header = () => {
  let location = useLocation();
  const { pathname } = location;
  console.log(location);

  return (
    <header>
      <img src={'https://i.imgur.com/RMXeH9B.jpg'} alt="logo" />
      <nav>
        {links.map((item) => (
          <Link key={uuid()} className={pathname === item.url ? "active" : ""} to={item.url}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
