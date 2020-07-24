import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Teena extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Tena Durrani</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0125/8533/6896/products/78978098089098_460x.jpg?v=1574059076"></img>
 <h1>BRIDALS</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0125/8533/6896/products/10_20efc67e-7248-422a-95cc-ba054f3ff421_460x.jpg?v=1574059057"></img>
      <h1>FORMALS</h1></a>
  	</div>
    <div className="container-button">
      <h1>
   <Button type="submit" >VIEW ALL PRODUCTS</Button>{' '}
</h1></div>
      </div>    
 </div>
      )
    }
}
