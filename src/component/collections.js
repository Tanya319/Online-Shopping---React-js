import React from 'react';
import { Button } from 'reactstrap';
import Img1 from "../images/hsy.png";
import Img2 from "../images/nomi.png";
import Img3 from "../images/faiza.png";
import Img4 from "../images/zainab.png";
import Img5 from "../images/sania.jpg";
import Img6 from "../images/elan.png";
import Img7 from "../images/maria.png";
import Img8 from "../images/teena.png";
import Img9 from "../images/deepak.png";
export default function collections() {
    return (
                  <div className="container">
                <div className="space"></div>
                <a href="http://localhost:3000/home"><h2>NEW ARRIVALS</h2></a>
                <img src="https://cdn.shopify.com/s/files/1/0091/7461/4121/files/Slider_Banner_1_2000x_b89455fe-bdfc-4ed4-9e45-a0d874cc3f14_800x.png?v=1587128100" alt="i" para="i" width='100%'></img>
                <img src="https://nkhgroup.com.pk/wp-content/uploads/2020/03/89951214_2856369071110351_4188773692735488000_o.jpg" alt="i" para="i" width='100%'></img>
                <img src="https://royalfashion.pk/wp-content/uploads/2020/03/000-1.jpg" alt="i" para="i" width='100%'></img>
      <div className="container">
        <h3 className="heading"><span>BRANDS</span></h3>
 <div className="gallery">
   <div className="gallery-item">
   <a href="http://localhost:3000/hsy"> 
   <img className="gallery-image" src={Img1} alt="1st" />
 <h1>Hassan Sheheryar Yasin</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/nomi">	 <img className="gallery-image" src={Img2} alt="2nd" />
      <h1>Nomi Ansari</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/faiza">  <img className="gallery-image" src={Img3} alt="3rd" />
   <h1>Faizasaqlain</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/zainab">	 <img className="gallery-image" src={Img4} alt="4th" />
      <h1>Zainab Chottani</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/sania">  <img className="gallery-image" src={Img5} alt="5th" />
   <h1>Sania Maskatiya</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/maria">	 <img className="gallery-image" src={Img7} alt="7st" />
      <h1>Maria B</h1></a>
  	</div>
    <div className="gallery-item">
    <a href="http://localhost:3000/elan">  <img className="gallery-image" src={Img6} alt="6th" />
   <h1>Elan</h1></a>
   </div>
    <div className="gallery-item">
    <a href="http://localhost:3000/teena">  <img className="gallery-image" src={Img8} alt="8st" />
   <h1>Tena Durrani</h1></a>
   </div>
   <div className="gallery-item">
   <a href="http://localhost:3000/deepak">	 <img className="gallery-image" src={Img9} alt="9st" />
      <h1>Deepak Parwani</h1></a>
  	</div>
 </div>
 <div className="container-button">
      <h1>
  <a href="http://localhost:3000/all"> <Button type="submit" >VIEW ALL PRODUCTS</Button>{' '}</a>
</h1></div>
 </div>

</div>

 
    )
}
