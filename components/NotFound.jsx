import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='container'>
      <h1>404 Page Not Found</h1>
      <pre>
        <h3>{`The Requsted Url
/User3 was not Found
on this Server`}</h3>
      </pre>
      <Link to={"/"}>Go Back To Home Page</Link>
    </div>
  )
}
