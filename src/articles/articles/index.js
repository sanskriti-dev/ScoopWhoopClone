import React, { Suspense } from 'react'
import './index.scss'
import NaviIcon from '../../assets/navIcon.svg'

const ImageComponent = React.lazy(() => import('./articleImage'))

const Card = (props) => {
  return (
    <div className="col-md-3 col-sm-12">
      <div className="card">
        <figure className="img-wrapper">
          <Suspense
            fallback={
              <img className="card-img-top" alt="Loading..." />
            }
          >
            <ImageComponent imgSrc={props.imgSrc} className="card-img-top" />
          </Suspense>
        </figure>

        <div className="card-body">
          <div className="content-heading">
            <div className="category-text-wrap">
              {' '}
              <span className="category-text">{props.category}</span>{' '}
            </div>
            {props.isMobile ? (
              <div className="share-view">
                {props.analytics.shares} shares | {props.analytics.views[0]}K
                views{' '}
              </div>
            ) : null}
          </div>
          <h4 className="card-title">{props.title}</h4>
          <div className="author-name">{props.author}</div>
          <div className="date-time">
            {props.published} | {props.readTime}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
