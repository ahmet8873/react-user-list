
import { useState,useEffect } from 'react'
import ListGroupUsers from './ListGroupUsers'

const UserList = () => {

    const [users,setUsers]=useState([])

    const fetchUsers=async()=>{
       const response=await fetch('https://reqres.in/api/users?page=1')
       const data=await response.json()
       setUsers(data.data)
    //    console.log(data.data)
    }

   useEffect(()=>{
    fetchUsers()
   },[])

   
  return (
    <div>
        <ListGroupUsers users={users}></ListGroupUsers>
         </div>
  )
}

export default UserList