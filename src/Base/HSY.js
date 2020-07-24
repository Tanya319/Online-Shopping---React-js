import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class HSY extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Hassan Sheheryar Yasin</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0075/6036/4129/products/6_f6395146-4cc3-4bcc-8a46-58fff91846ef_600x.jpg?v=1574758276"></img>
 <h1>BRIDAL COUTURE</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0075/6036/4129/products/15_3c6526e2-1478-4cc4-bc8d-779b028b96e7_400x.jpg?v=1563972249"></img>
      <h1>FORMAL'19</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://cdn.shopify.com/s/files/1/0075/6036/4129/products/3_2b617256-4eec-4b8f-b214-a3f129f49b68_400x.jpg?v=1553261186"></img>
<h1>HSY WOMEN</h1></a>
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
