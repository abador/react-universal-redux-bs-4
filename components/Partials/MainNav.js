// MainNav.js
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MainNav extends Component {

    handleClick() {
        $('.navbar-collapse').removeClass('in')
        $('html,body').scrollTop(0)
    }

    render() {

        const data = this.props.data
        const nav_items = data.globals.site.navigation_items
        const site_name = data.globals.site.name
        
        const menu_items = nav_items.map((nav_item) => {
                return (<li className="nav-item active" key={ nav_item.key }>
                <Link onClick={ this.handleClick } to={ '/' + nav_item.uri }  className="nav-link" activeClassName="active">{ nav_item.title }</Link>
        </li>)
            })
            return (
    <nav className="navbar navbar-static-top navbar-dark bg-inverse">
        <Link to={ '/' } className="navbar-brand" activeClassName="active">{ site_name }</Link>
      <ul className="nav navbar-nav">
        { menu_items }
      </ul>
    </nav>)
        }
}