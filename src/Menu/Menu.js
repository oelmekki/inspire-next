import React, { Component } from 'react'
import SidebarMenu from '../SidebarMenu/SidebarMenu'
import MenuItem from './MenuItem/MenuItem'
import './Menu.css'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: false,
      items: ['Home', 'Catalogs']
    }
    this.showSidebarMenu = this.showSidebarMenu.bind(this)
  }

  showSidebarMenu() {
    this.setState({sidebar: !this.state.sidebar})
  }

  render() {
    return (
      <div id="menu" className="ui container">
        <SidebarMenu visible={this.state.sidebar} items={this.state.items} location={this.props.location} />
        <div className="ui large secondary inverted pointing menu">
          <a className="toc item" onClick={this.showSidebarMenu}>
            <i className="sidebar icon"></i>
          </a>
          {this.state.items.map((item, idx) => <MenuItem key={idx} name={item} location={this.props.location} />)}

          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Menu
