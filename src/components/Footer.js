import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer>
        <p>Copyright &copy; 2023</p>
      <Link to = "/about">About</Link>
      <Link to = "/support">Support</Link>
      
      </footer>
    </div>
  )
}

export default Footer
