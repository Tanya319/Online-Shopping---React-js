import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Elan extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>ELAN</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://cdn.shopify.com/s/files/1/1678/4755/files/600x795_878fe430-c33a-46a7-a4e7-339ea32c7814_600x.jpg?v=1589016075"></img>
 <h1>ELANVITAL</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://cdn.shopify.com/s/files/1/1678/4755/files/727A8952-color-tone.jpg?6894949711442575573"></img>
      <h1>CHAMPS DE PATCHOULI</h1></a>
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
