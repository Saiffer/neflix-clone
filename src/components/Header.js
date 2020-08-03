import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Header.css'
function Header () {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <Router>
      <nav className={`header-main ${show && 'header-main-black'}`}>
        <Link to='/'>
          <img
            className='logo-image'
            alt='logo'
            src='https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=8'
          />
        </Link>

        <div class='dropdown'>
          <img
            className='login-logo'
            alt='login'
            src='https://occ-0-987-1328.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41'
          />
          <div class='dropdown-content'>
            <Link to='/profile' className='dropdown-link'>
              <p>Profile</p>
            </Link>
            <Link to='/settings' className='dropdown-link'>
              <p>Manage Settings</p>
            </Link>
            <Link to='/guest-page' className='dropdown-link'>
              <p>Log out</p>
            </Link>
          </div>
        </div>
      </nav>
    </Router>
  )
}

export default Header
