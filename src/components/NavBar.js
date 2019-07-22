import React from 'react'

function NavBar(props){
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }
  
  return (
    <nav className="navbar">
          <a className='navbar-brand'>
            { props.title }
          </a>

    </nav>
  )
}

export default NavBar
