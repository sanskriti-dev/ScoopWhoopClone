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
        </div>
        </div>
        
        </div>
    )
}

export default Card