import React from 'react'

const Banner = (props) => {
  return (
    <div id='banner' style={{backgroundImage: `url(${props.link})`}}>
      {props.children}
    </div>
  )
}

export default Banner