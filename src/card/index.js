import React from 'react';
import './card.scss'

const Card = props => {
    return (
        <div className = "col-3">
        <div className="card">
        <img className="card-img-top" src= {props.imgSrc} alt="Card  cap"/>
        <div className="card-body">
            <a className = "category-text">{props.category}</a>
            <h4 className="card-title">{props.title}</h4>
            <span className = "author-name">{props.author}</span>
            <span className = "date-time">{props.published} | {props.readTime}</span>
            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        </div>
        </div>
        
        </div>
    )
}

export default Card