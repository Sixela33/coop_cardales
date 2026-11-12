import React from 'react'
import { Container } from 'react-bootstrap'

const Energia = () => {

  return (
    <>
    <Container className="video-page">
        <div className="video-frame">
          <iframe src="https://www.youtube.com/embed/aGdqIV8JTgU"
          className="responsive"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
          </iframe>
        </div>
    </Container>
    </>
  )
}

export default Energia