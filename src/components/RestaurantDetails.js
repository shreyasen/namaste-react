import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../../hooks/useRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();

  const [restaurantDetails, menu] = useRestaurant(id);

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
