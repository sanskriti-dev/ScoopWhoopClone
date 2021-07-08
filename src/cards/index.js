import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Card from '../card';
import moment from 'moment';
import NavIcon from '../../src/assets/header-icon.svg';
import StickyNaviIcon from '../../src/assets/navIcon.svg'  
import {
    DownOutlined,
    UserOutlined,
    SearchOutlined,
    MenuOutlined,
  } from "@ant-design/icons";


import './cards.scss'

const Cards = (props) => {
    const [allCards,setAllCards] = useState([])
    const [offset,setOffSet] = useState(8)
    const [stickyNav , setStickyNav] = useState(false)

    useEffect (() => {
        window.addEventListener('scroll', listenScrollEvent);
    })

    useEffect(() => {
        axios.get(`https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=20`).then(
            (response) => {
                let allCardsData = [...allCards,...response.data.data]
                setAllCards(allCardsData)
            }
        )

    },[offset])

    const navListLeft = ["Trending" , "Videos" , "Stories", "Quizzes" , "Memes","Spotlight"] 
    const navListRight = [ <DownOutlined />, <UserOutlined/>,<SearchOutlined/>,<MenuOutlined/>] 

    const listenScrollEvent = e => {
        if (window.scrollY > 170) {
          setStickyNav(true)
        } else {
          setStickyNav( false)
        }
        if (window.innerHeight + document.documentElement.scrollTop-23 == document.documentElement.offsetHeight){
            let pageOffSet = offset + 8 
             setOffSet(pageOffSet)
           }
      }
    
     
    return (
        <div>                     
        <div className = "banner">
            <header className = {stickyNav ? "sticky" : ""}>
                <div className = "row">
                    <div className = "col-1">
                    <img src = {stickyNav ? StickyNaviIcon : NavIcon}/>
                    </div>
                    <div className = "col-8">
                      <div className = "navlist-left">
                    {navListLeft.map(ele => {
                            return  <div className=  {stickyNav ? "nav-item nav-item-sticky " : "nav-item"}>
                            {ele}
                        </div>
                        })}
                     </div>
                    </div>
                    <div className = "col-3">
                    <div className = "navlist-left" >
                    {navListRight.map(ele => {
                            return ele
                        })}
                    </div>
                    </div>
                    
                </div>
                
            </header>
          
            <div className = "header-article">
                    <span className = "header-category">Entertainment</span>
                    <h1 className = "header-text">16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                    <span className= "header-read">Read article -{`>`} </span>
            </div>


      </div>
       <div className = "cards"> 
        <div className = "row">
            {allCards?.map(item => {
                return (
                    <Card 
                    imgSrc = {item.feature_img} 
                    title = {item.title}
                    category = {item?.cat_display?.[0]?.category_display}
                    author = {item?.auth_display?.display_name}
                    readTime = {item.readtime}
                    published = {moment(item.pub_date).fromNow()}
                    />    
                )
            })}
        </div>
        </div>
        </div>
 
    )

}

export default Cards