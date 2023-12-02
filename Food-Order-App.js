import React from "react";
import ReactDOM from "react-dom/client";
import Header from './food-delivery-app/header/header.js'
import Body from './food-delivery-app/body/body.js'


/* intial food delivery design
1=>Header
   logo
   Nav items(home,about etc)

2=> Body
     -searcg
     -Reastaurant-container
      *RestaurantCard

 3=> footer
  copyright
  links
  address
   contact
*/

const FoodDeliveryApp = () =>{
   return (
      <div className="App">
         <Header></Header>
         <Body />
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("React.createElement is an object", FoodDeliveryApp);

root.render(<FoodDeliveryApp />);
