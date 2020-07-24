import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Faiza extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Faizasaqlain</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://chambeilicdn-df31.kxcdn.com/cmsbo/wp-content/uploads/2020/07/DARAKHSHAN7.jpg"></img>
 <h1>IBTEDA E ISHQ</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0262/2531/1795/products/FSS_86c935a7-9867-4ce7-a16f-41dc674bfea4_1800x1800.jpg?v=1591332277"></img>
      <h1>FAIZA'S STYLE STARS</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0262/2531/1795/products/159A7237_1800x1800.jpg?v=1587686816"></img>
   <h1>MOGRA</h1></a>
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
