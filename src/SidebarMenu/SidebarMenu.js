import React from 'react'
import MenuItem from '../Menu/MenuItem/MenuItem'

const SidebarMenu = ({visible, items, location}) => {
  return (
    <div className={`ui vertical inverted sidebar menu ${visible ? 'overlay visible' : ''}`}>
      {items.map((item, idx) => <MenuItem key={idx} name={item} location={location} />)}
      <div className="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i className="search link icon"></i>
      </div>
    </div>
  )
}

export default SidebarMenu
