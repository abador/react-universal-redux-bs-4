// Home.js
import React, { Component } from 'react'
import { Link } from 'react-router'
import config from '../../config'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Home extends Component {

    componentWillMount() {
        this.getPageData()
    }

    componentDidUpdate() {

    }

    getSlug() {
        return this.props.location.pathname.replace('/', '')
    }

    getPageData() {
        AppDispatcher.dispatch({
          action: 'get-page-data',
          page_slug: "home"
        })
    }

    render() {
            return (
                    <div>
                    
                        <div className="jumbotron">
                            <div className="container">
                                <h1 className="display-3">Hello, world!</h1>
                                <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                            </div>
                        </div>
                        <div className="container">
                    
                            <div className="row">
                                <div className="col-md-4">
                                    <h2>Heading</h2>
                                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                                </div>
                                <div className="col-md-4">
                                    <h2>Heading</h2>
                                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                                </div>
                                <div className="col-md-4">
                                    <h2>Heading</h2>
                                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    )
        }
}