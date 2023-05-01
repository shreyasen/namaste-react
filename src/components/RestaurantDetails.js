import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantDetails = () => {
  const { id } = useParams();

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
  return (
    <div className="restaurant-details-container">
      <h1>Restaurant Details</h1>
      <div className="restaurant-details-header">
        <img src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId} />
        <div>
          <h2>{restaurantDetails?.name}</h2>
          <div>{restaurantDetails?.cuisines.join(", ")}</div>
          <p>{restaurantDetails?.locality}</p>
          <p>{restaurantDetails?.feeDetails?.message}</p>
          <div>{restaurantDetails?.avgRating}</div>
          <div>{restaurantDetails?.totalRatingsString}</div>
        </div>
      </div>

      {menu.length > 0 &&
        menu.map((res, index) => {
          console.log(res);
          return (
            <div>
              {res.card?.card?.itemCards?.length > 0 && (
                <h2>{res?.card?.card?.title}</h2>
              )}
              {res.card?.card?.itemCards?.map((item, j) => {
                return <div>{item?.card?.info?.name}</div>;
              })}
            </div>
          );
        })}
    </div>
  );
};
export default RestaurantDetails;
