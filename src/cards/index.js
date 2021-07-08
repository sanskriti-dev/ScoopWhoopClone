import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Card from '../card';
import moment from 'moment';
import NavIcon from '../../src/assets/header-icon.svg';

import './cards.scss'

const Cards = (props) => {
    const [allCards,setAllCards] = useState([])
    const [offset,setOffSet] = useState(8)

    useEffect (() => {
        window.addEventListener('scroll', infiniteScroll);
    })

    useEffect(() => {
        axios.get(`https://www.scoopwhoop.com/api/v4/read/all/?offset=${offset}&limit=20`).then(
            (response) => {
                let allCardsData = [...allCards,...response.data.data]
                setAllCards(allCardsData)
            }
        )

    },[offset])

    const infiniteScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop-23 == document.documentElement.offsetHeight){
            let pageOffSet = offset + 8 
             setOffSet(pageOffSet)
           }
        }
    const navListLeft = ["Trending" , "Videos" , "Stories", "Quizzes" , "Memes","Spotlight"]    

  
    return (
        <div>
            
            

            <div className ="header">
                
                <div className= "navlist">
                <nav className="navbar navbar-expand-lg ">
                {/* <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="navList-content">
                    <div className="nav-left">
                        {navListLeft.map(ele => {
                            return  <div className="nav-item ">
                            {ele}
                        </div>
                        })}
                    </div>
                </div>
                </nav>

            </div>
                <div className = "header-article">
                    <span className = "header-category">Entertainment</span>
                    <h1 className = "header-text">16 Fan Favourite Cult Movies That You Didn't Know Were Copied</h1>
                    <span className= "header-read">Read article -{`>`} </span>
            </div>

            <img className="header-image" src='https://s4.scoopwhoop.com/anj2/60547185c8d1115b02424f3a/77808a56-3907-44bd-a6f2-e270996c225c.jpg'/>
            </div>
           <div className = "cards mt-30">
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
    )

}

export default Cards