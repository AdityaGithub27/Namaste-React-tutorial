import { IMAGE_URL } from "../common-files/constant.js";

const RestaurantCard = (props) => {
  console.log("restaurant props", props);
  console.log("restaurant props resData", props?.resData);
  // const { cuisine, resName, deliveryTime, rating } = props;
  return (
    <div className="res-card">
      <img
        className="res-log"
        // src="https://www.eatingwell.com/thmb/Rv9nT718QZJdW5pBVe_-pitP76w=/750x0/filters:no_upscale():max_bytes(15
        // 0000):strip_icc():format(webp)/blueberry-chia-pudding_2-9de025880fc940688c362153f6d18843.jpg"
        src={IMAGE_URL + props.resData.image}
        //   src={
        //     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        //     props.resData.image
        //   }
        alt="res-log"
      />
      {/* <h3> Mehfil Reastaurant</h3>
        <h4>Biryani, Paneer</h4>
        <h4>4.5 stars</h4>
        <h4> 30 mins</h4> */}
      {/* using props */}
      <h3>{props.resData.resName}</h3>
      <h4>{props.resData.cuisine}</h4>
      <h4>{props.resData.rating}</h4>
      <h4> {props.resData.deliveryTime}</h4>
      {/* using destructring */}
      {/* <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4> {deliveryTime}</h4> */}
    </div>
  );
};

export default RestaurantCard;

//   export default function RestaurantCard() {
//     return <RestaurantCard />;
//   }
