import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import UserCard from "./UserCard";

const ListGroupUsers = ({ users }) => {
  return (
    <div >
      <ListGroup style={{display:"flex", alignItems:"center"}}>
        {users.map((user) => (
          <ListGroupItem key={user.id} >
            <UserCard user={user}></UserCard>
            </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListGroupUsers;
