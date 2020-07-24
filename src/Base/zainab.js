import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Zainab extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Hassan Sheheryar Yasin</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.zainabchottani.com/images/thumbs/0012068_marine-orchid-a_700.jpeg"></img>
 <h1>LAWN/CHIKANKARI'20</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://www.zainabchottani.com/images/thumbs/0009846_smoky-blue_700.jpeg"></img>
      <h1>SWAROVSKI</h1></a>
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
