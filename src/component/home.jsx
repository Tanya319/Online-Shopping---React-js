import React from 'react';
import { FaUser,FaHeart , FaShoppingBag} from 'react-icons/fa';


const Home =()=>{
        return (        
<div>
<nav></nav>
<div className="account" style={{ fontSize: '25px'}}>

<a href="#"><FaUser /></a>
<a href="#"><FaHeart/></a>
<a href="#"><FaShoppingBag/></a>
</div>
<div class="outer-menu">
  <input class="checkbox-toggle" type="checkbox" />
  <div class="hamburger">
    <div></div>
  </div>
  <div class="menu">
    <div>
      <div>
        <ul>
          <li><a href="#"><h3>Orders</h3></a></li>
          <li><a href="#"><h3>Track Your Order</h3></a></li>
          <li><a href="#"><h3>Gift Card</h3></a></li>
          <li><a href="#"><h3>Payment Details</h3></a></li>
          <li><a href="#"><h3>Customer Services</h3></a></li>
          <li><a href="#"><h3>setting</h3></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
             
</div>

         
        )
  }

export default Home
