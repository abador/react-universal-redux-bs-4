// Default.js
import React, { Component } from 'react'
import { Link } from 'react-router'
import config from '../../config'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Default extends Component {

  componentWillMount(){
    this.getPageData()
  }

  componentDidUpdate(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
    
    // Updated
    const page = data.page
    const page_slug = this.getSlug()
    if(page.slug !== page_slug)
      this.getPageData(page_slug)
  }

  getSlug(){
    return this.props.location.pathname.replace('/','') 
  }

  getPageData(){
    const page_slug = this.getSlug()
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: page_slug
    })
  }
  
  render(){
    

    const slug = this.getSlug()
    const data = this.props.data
    const page = data.page
    let main_content = <div dangerouslySetInnerHTML={ {__html: page.slug } }></div>

    return (
       <div>   
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">This is a default page! </h1>
                    <p>You are in <b>{ main_content }!</b></p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                </div>
            </div>
      </div>
    )
  }
}