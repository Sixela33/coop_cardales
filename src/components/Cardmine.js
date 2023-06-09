import React from 'react'
import { Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


const Cardmine = (props) => {
  const navigate = useNavigate()

   return (
     <Card className='card_item' onClick = {() => {navigate(props.link)}}>
      <div style={{minHeight:'100%'}}>
        <Card.Img variant="top" src={props.img} height='50%' alt ="NOT FOUND"/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
          <Card.Text>
            {props.text}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  )
}

export default Cardmine