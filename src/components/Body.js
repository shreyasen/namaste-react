import { useState, useEffect } from "react";
import restaurants from "../../restaurants.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterData = (searchTxt) => {
    const filteredList = restaurantList.filter((res) => {
      return res.data.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    setFilteredRestaurantList(filteredList);
  };

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6739913&lng=88.35064679999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!restaurantList.length) {
    return <h1>loading...</h1>;
  }
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
        {restaurantList.length > 0 && filteredRestaurantList.length === 0 && (
          <h1>No restaurant found!</h1>
        )}
        {filteredRestaurantList.map((restaurant) => {
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
