import React from 'react'
import { Link } from 'react-router'

const MenuItem = ({name, location}) => {
  let active = false

  console.log('Location:', location);
  console.log('name:' ,location);
  if ((name === 'Home' && location === '/') || location.includes(name)) {
    active = true
  }
  return (
    <Link to={name === 'Home' ? '/' : name} className={`${active ? 'active' : ''} item`}>
      {name}
    </Link>
  )
}

export default MenuItem
