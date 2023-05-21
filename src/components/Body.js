import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnline from "../../hooks/useOnline";

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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are offline. Please check your internet connection!</h1>;
  }

  return (
    <>
      {/* <Shimmer /> */}
      <div className="w-96 m-auto pt-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-500 p-3"
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
      <div className="flex flex-wrap justify-around p-4">
        {restaurantList.length > 0 && filteredRestaurantList.length === 0 && (
          <h1>No restaurant found!</h1>
        )}
        {!restaurantList.length && <Shimmer />}
        {filteredRestaurantList.map((restaurant) => {
          // we are passing props by destructuring the elements of restaurants.data
          return (
            <Link
              to={`restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
              className="restaurant-card-link"
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
