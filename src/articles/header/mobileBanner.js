import React from 'react';
import  "../index.scss"
import MobileNavIcon from '../../assets/navIconMobile.svg'
import {
    SearchOutlined,
    MenuOutlined,
  } from "@ant-design/icons";



const MobileBanner = props => {
    return (
         <div className= "banner mobile">
    <div className= "mobile-nav">
    <SearchOutlined/>
    <img src = {MobileNavIcon} alt="icon"/>
    <MenuOutlined/>
    </div>
    <span className = "spotlight-text">Spotlight</span>
    <div>     
   <div className = "featured-cards">        
   <div className="card-ele">   
   <div className="card">
     <img className="card-img-top" src= 'https://image.scoopwhoop.com/w330/s3.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/af7a268a-5287-45f3-b93d-cf50589ab517.jpg' alt="Card "/>
     <div className="card-body">
         <span className = "category-text">Entertainment</span>
         <h4 className="card-title">16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h4>
         <span className = "card-readMore">Read More</span>
     </div>
     </div>

     <div className="card">
     <img className="card-img-top" src= 'https://image.scoopwhoop.com/w330/s3.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/af7a268a-5287-45f3-b93d-cf50589ab517.jpg' alt="Card  cap"/>
     <div className="card-body">
         <span className = "category-text">Entertainment</span>
         <h4 className="card-title">16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h4>
         <span className = "card-readMore">Read More</span>
     </div>
     </div>
     </div>
     </div>
     </div>

</div>
)
}

export default MobileBanner