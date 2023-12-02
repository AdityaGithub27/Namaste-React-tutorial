const RestaurantCard = (props) => {
  console.log("restaurant props", props );
  console.log("restaurant props resData", props?.resData );
  // const { cuisine, resName, deliveryTime, rating } = props;
  return (
    <div className="res-card">
      <img
        className="res-log"
        // src="https://www.eatingwell.com/thmb/Rv9nT718QZJdW5pBVe_-pitP76w=/750x0/filters:no_upscale():max_bytes(15
        // 0000):strip_icc():format(webp)/blueberry-chia-pudding_2-9de025880fc940688c362153f6d18843.jpg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.resData.image
        }
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

const dummyDataList = [
  {
    image: "vvtdsuut3utwluvdsn28",
    resName: "Mehfil",
    cuisine: "Biryani, Kebab",
    rating: "4.5",
    deliveryTime: "36 minutes",
    id:Math.random()
  },
  {
    image: "f01666ac73626461d7455d9c24005cd4",
    resName: "Paradise",
    cuisine: "Veg, Rooti",
    rating: "4.",
    deliveryTime: "27 minutes",
    id:Math.random()
  },
  {
    // image='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4',
    image: "bb7ae131544c7d37e10fc5faf76f09d6",
    resName: "Udipi",
    cuisine: "idli, dosa",
    rating: "4.3",
    deliveryTime: "26 minutes",
    id:Math.random()
  },
  {
    image: "vvtdsuut3utwluvdsn28",
    resName: "Mehfil",
    cuisine: "Biryani, Kebab",
    rating: "4.5",
    deliveryTime: "36 minutes",
    id:Math.random()
  },
  {
    image: "f01666ac73626461d7455d9c24005cd4",
    resName: "Paradise",
    cuisine: "Veg, Rooti",
    rating: "4.",
    deliveryTime: "27 minutes",
    id:Math.random()
  },
  {
    // image='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4',
    image: "bb7ae131544c7d37e10fc5faf76f09d6",
    resName: "Udipi",
    cuisine: "idli, dosa",
    rating: "4.3",
    deliveryTime: "26 minutes",
    id:Math.random()
  },
  {
    image: "vvtdsuut3utwluvdsn28",
    resName: "Mehfil",
    cuisine: "Biryani, Kebab",
    rating: "4.5",
    deliveryTime: "36 minutes",
    id:Math.random()
  },
  {
    image: "f01666ac73626461d7455d9c24005cd4",
    resName: "Paradise",
    cuisine: "Veg, Rooti",
    rating: "4.",
    deliveryTime: "27 minutes",
    id:Math.random()
  },
  {
    // image='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4',
    image: "bb7ae131544c7d37e10fc5faf76f09d6",
    resName: "Udipi",
    cuisine: "idli, dosa",
    rating: "4.3",
    deliveryTime: "26 minutes",
    id:Math.random()
  },
  {
    image: "vvtdsuut3utwluvdsn28",
    resName: "Mehfil",
    cuisine: "Biryani, Kebab",
    rating: "4.5",
    deliveryTime: "36 minutes",
    id:Math.random()
  },
  {
    image: "f01666ac73626461d7455d9c24005cd4",
    resName: "Paradise",
    cuisine: "Veg, Rooti",
    rating: "4.",
    deliveryTime: "27 minutes",
    id:Math.random()
  },
  {
    // image='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4',
    image: "bb7ae131544c7d37e10fc5faf76f09d6",
    resName: "Udipi",
    cuisine: "idli, dosa",
    rating: "4.3",
    deliveryTime: "26 minutes",
    id:Math.random()
  },
];
const BodyDetails = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard
          resName="mehfil"
          cuisine="biryani, kabab and mandi"
          rating="4.5"
          deliveryTime="45 minutes"
        />
        <RestaurantCard
          resName="santhosh dhaba"
          cuisine="roti, tandoori"
          rating="4.5"
          deliveryTime="35 minutes"
        />
        <RestaurantCard
          resName="bubu"
          cuisine="cute, love and life"
          rating="5"
          deliveryTime="7 minutes"
        />
        <RestaurantCard
          resName="mehfil"
          cuisine="biryani, kabab and mandi"
          rating="4.5"
          deliveryTime="45 minutes"
        />
        <RestaurantCard
          resName="santhosh dhaba"
          cuisine="roti, tandoori"
          rating="4.5"
          deliveryTime="35 minutes"
        /> */}
        {/* <RestaurantCard resData={dummyDataList}/> */}

        {dummyDataList.map((res) => {
          return (
           <RestaurantCard key={res.id} resData={res}/>
          )
        })}
      </div>
    </div>
  );
};



export default function Body() {
  return <BodyDetails />;
}
