import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,Button} from 'reactstrap'

const UserCard = ({user}) => {
  return (
    <div>
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={user.avatar}
  />
  <CardBody>
    <CardTitle tag="h5">
      {user.first_name} {user.last_name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
        {user.email}
    </CardSubtitle>
    <CardText>
        USERS INFORMATION
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
   
  </CardBody>
</Card>
    </div>
  )
}

export default UserCard