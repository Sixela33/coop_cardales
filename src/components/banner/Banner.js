import React from 'react'

const Banner = (props) => {
  return (
    <div id='banner' style={{backgroundImage: `url(${props.link})`}}>
      <div className="banner-content">
        {props.children}
      </div>
    </div>
  )
}

export default Banner