import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menu, setMenu] = useState([]);
  const getRestaurantDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };
  useEffect(() => {
    getRestaurantDetails();
  }, []);
  return [restaurantDetails, menu];
};
export default useRestaurant;
