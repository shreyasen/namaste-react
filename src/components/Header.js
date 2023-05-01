import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuIIpkpCqO47xEJwIANP8FPzJaDa6EojkbA&usqp=CAU"
          alt="food-villa"
        />
      </Link>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
