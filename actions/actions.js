// actions.js
import config from '../config'
import _ from 'lodash'

// AppStore
import AppStore from '../stores/AppStore'

export function getStore(callback) {

    let pages = {}
    let globals = AppStore.data.globals
    //Run an async API call or do something, after AppDispatcher registers
    setTimeout(function() { 
        globals.site = {
        title: 'React Universal Redux Bootstrap 4 Example',
        name: 'Simple React App',
        company: "Some Great Company",
        navigation_items:  [
                {
                  "uri": "",
                  "key": "home",
                  "title": "Home",
                  "children": false
                },
                {
                  "uri": "work",
                  "key": "work",
                  "title": "Work",
                  "children": false
                },
                {
                  "uri": "about",
                  "key": "about",
                  "title": "About",
                  "children": false
                },
                {
                  "uri": "contact",
                  "key": "contact",
                  "title": "Contact",
                  "children": false
                }
              ],
        }
        AppStore.data.globals = globals
        AppStore.data.ready = true
        AppStore.emitChange(); 
    
    }, 10);
    // Trigger callback (from server)
    if (callback) {
        callback(false, AppStore)
    }
}

export function getPageData(page_slug, post_slug) {

    if (!page_slug)
        page_slug = 'home'
    // Get page info
    const data = AppStore.data
    const page = {slug: page_slug}

    if (post_slug) {
        if (page_slug === 'home') {
            page.title = "Mainpage title"
        }
    }
    AppStore.data.page = page
    AppStore.emitChange()
}