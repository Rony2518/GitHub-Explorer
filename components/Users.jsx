import React, {useState, useEffect} from 'react'
import axios from 'axios'
import UserCard from './UserCard'

export default function Users() {

  const [gitUsers, setGitUsers] = useState([])

  const getGitUsers = async () =>{
    const response = await axios.get('https://api.github.com/users');
    setGitUsers(response.data);
    return response.data
  }

  useEffect(()=>{
    getGitUsers().catch((e)=>console.error(e));
  },[])

  return (
    <div className='con'>
      {gitUsers.map((user)=>{
        return <UserCard key={user.id} login={user.login} avatar={user.avatar_url}/>
      })}
    </div>
  )
}
