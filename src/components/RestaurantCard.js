import { IMG_CDN_URL } from "../constants";

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
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
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

export default RestaurantCard;
