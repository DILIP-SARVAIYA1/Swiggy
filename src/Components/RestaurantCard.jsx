import { useContext } from "react";
import { RES_CARD_IMG } from "../Utils/Constants";
import UserContext from "../Utils/UserContext";

const RestaurantCard = (props) => {
  const { userLogIn } = useContext(UserContext);
  const { name, cloudinaryImageId, cuisines, sla } = props.resData.info;
  return (
    <div
      className="w-[250px] h-full shadow-lg bg-gray-200 cursor-pointer rounded-lg hover:bg-gray-300 hover:scale-95 transition-all"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0 });
      }}
    >
      <img
        className="w-full h-[180px] object-cover rounded-t-lg"
        src={RES_CARD_IMG + cloudinaryImageId}
        alt="Restaurants image"
      />
      <div className="px-5 py-2">
        <p className="font-bold">{name}</p>
        <p className="text-gray-600">{cuisines.join(", ")}</p>
        <p className="text-gray-700">{sla.deliveryTime} Minutes</p>
        <p className="text-sm text-gray-500">User Log in: {userLogIn}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
