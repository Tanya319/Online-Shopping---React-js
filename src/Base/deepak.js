import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Deepak extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>DEEPAK PERWANI</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.deepakperwani.com/images/thumbs/0004205_kut211_550.jpeg"></img>
 <h1>LUXURY PRET</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://www.deepakperwani.com/images/thumbs/0003817_mumtaz_550.jpeg"></img>
      <h1>BRIDAL</h1></a>
  	</div>
      </div>   
      <div className="container-button">
      <h1>
   <Button type="submit" >VIEW ALL PRODUCTS</Button>{' '}
</h1></div>     
 </div>
      )
    }
}
