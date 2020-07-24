import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Sania extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Sania maskatiya</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.saniamaskatiya.com/images/thumbs/0005195_box-cut-block-printed-kurta_700.jpeg"></img>
 <h1>LUXURY PRET</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://www.saniamaskatiya.com/images/thumbs/0003040_net-embroidered-front-open-shirt_700.jpeg"></img>
      <h1>OFF THE RAMP</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.saniamaskatiya.com/images/thumbs/0004339_zardoze-work-saree_700.jpeg"></img>
   <h1>BRIDALS DILARA</h1></a>
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
