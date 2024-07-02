import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserCard(props) {

  const navigate = useNavigate()

  return (
    <div className='cardContainer'>
        <img src={props.avatar} alt="ronak" />
        <div className="userInfo">
            <div>{props.login.toUpperCase()}</div>
            <button className='userBtn' onClick={()=> navigate(`/userProfile/${props.login}`)}>Show User</button>
        </div>
    </div>
  )
}
