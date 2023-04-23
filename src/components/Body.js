import { useState } from "react";
import restaurants from "../../restaurants.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restaurants);
  const [searchText, setSearchText] = useState("");

  const filterData = (searchTxt) => {
    const filteredList = restaurants.filter((res) => {
      return res.data.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    setRestaurantList(filteredList);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            filterData(e.target.value);
          }}
        />
        {/* <button className="search-btn" onClick={filterData}>
          Search
        </button> */}
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          // we are passing props by destructuring the elements of restaurants.data
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
