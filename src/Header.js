import React from 'react'
import './Header.css'
function Header () {
  return (
    <nav className='header-main'>
      <img
        className='logo-image'
        alt='logo'
        src='https://assets.brand.microsites.netflix.io/assets/1ed15bca-b389-11e7-9274-06c476b5c346_cm_800w.png?v=45'
      />
      <img
        className='login-logo'
        alt='login'
        src='https://occ-0-987-1328.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41'
      />
    </nav>
  )
}

export default Header
