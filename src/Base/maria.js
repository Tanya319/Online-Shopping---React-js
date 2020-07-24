import React, { Component } from 'react'
import { Button } from 'reactstrap';
export default class Maria extends Component {
    render() {
        return (
            <div>
              <div className="container-grid">
        <h3 className="heading"><span>Maria B</span></h3>

   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.mariab.ae/skin/frontend/rwd/shopistan/images/theme/category-landing/unstitched/xsilk.jpg.pagespeed.ic.I4mKaV23Z0.webp"></img>
 <h1>SILK</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy">	<img className="gallery-image" src="https://www.mariab.ae/skin/frontend/rwd/shopistan/images/theme/category-landing/unstitched/xmbroidered.jpg.pagespeed.ic.4dZ0MwMH6j.webp"></img>
      <h1>MBROIDERED</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/hsy"> <img className="gallery-image" src="https://www.mariab.ae/skin/frontend/rwd/shopistan/images/theme/category-landing/weddingwear/xformal.jpg.pagespeed.ic.nE5HMWWMy1.webp"></img>
   <h1>BRIDAL</h1></a>
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
