import RestaurantCard from './restaurantCard.js'

import {dummyDataList} from '../common-files/constant.js'

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
          return <RestaurantCard key={res.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

// export default function Body() {
//   return <BodyDetails />;
// }

export default  BodyDetails;