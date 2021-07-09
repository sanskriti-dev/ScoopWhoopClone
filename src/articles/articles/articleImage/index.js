import React from 'react'

const ImageComponent = (props) => {
  return <img className={props.className} src={props.imgSrc} alt="article"  loading= "lazy"/>
}

export default ImageComponent
