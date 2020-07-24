import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Nomi extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Nomi Ansari</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://reviewit.pk/wp-content/uploads/2019/10/sajal-15.jpg"></img>
 <h1>BRIDAL</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://www.nomiansari.com.pk/images/thumbs/0003127_ivory-elegance_750.jpeg"></img>
      <h1>FORMALS</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.nomiansari.com.pk/images/thumbs/0003179_bringing-the-look-we-had-in-mind-for-iqra-aziz-to-life-was-a-one-of-kind-experience-that-we-enjoyed-_750.jpeg"></img>
   <h1>NOMI AND I</h1></a>
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
