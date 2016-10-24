// Default.js
import React, { Component } from 'react'
import { Link } from 'react-router'
import config from '../../config'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class NewsList extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidUpdate(){

  }

  getSlug(){
    return this.props.location.pathname.replace('/','') 
  }

  getPageData(){
    
  }
  
  render(){
    

    let main_content = <div dangerouslySetInnerHTML={ {__html: "newslist" } }></div>

    return (
       <div>
        <div id="main-content" className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            { main_content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}