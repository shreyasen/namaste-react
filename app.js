import React from "react";
import ReactDOM from "react-dom/client";
import restaurants from "./restaurants.json";

// This is a React Element
const title = (
  <div>
    <h1>Namaste React Element</h1>
  </div>
);

const TitleComponent = () => (
  <div>
    <h1>Namaste React Component</h1>
  </div>
);

// This is a React Component
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJuIIpkpCqO47xEJwIANP8FPzJaDa6EojkbA&usqp=CAU"
        alt="food-villa"
      />
      <ul>
        <li>Contact</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <div className="card-details">
        <h2>{name}</h2>
        <div>{cuisines.join(", ")}</div>
        <div className="restaurant-description">
          <span>{avgRating}</span>
          <span>{slaString}</span>
          <span>{costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        // we are passing props by destructuring the elements of restaurants.data
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <div>Footer</div>;
};

// This is another representation of Header component without using curly braces and return
const AppLayout = () => (
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(title);
root.render(<AppLayout />);
