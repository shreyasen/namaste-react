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
    <div className="w-60 mt-4 ease-in-out duration-200 hover:shadow-lg hover:-translate-y-1">
      <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} />
      <div className="p-3">
        <h2 className="font-bold text-xl">{name}</h2>
        <div>{cuisines.join(", ")}</div>
        <div className="text-xs">
          <span>{avgRating}</span>
          <span>{slaString}</span>
          <span>{costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
