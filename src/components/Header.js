import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={"flex justify-between border-b-2 px-4"}>
      <Link to="/">
        <img
          className="w-20"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuIIpkpCqO47xEJwIANP8FPzJaDa6EojkbA&usqp=CAU"
          alt="food-villa"
        />
      </Link>
      <ul className="flex items-center">
        <li className="p-4">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-4">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-4">Cart</li>
      </ul>
    </div>
  );
};

export default Header;
