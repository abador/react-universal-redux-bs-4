#React Universal Redux Example App WIth Bootstrap 4
#####[View a demo here](http://react-universal-redux-bs-4.herokuapp.com)
#####[View my articles here](http://stack.abador.pl/en) - when I added this readme an article still wasn't ready

#####About
The React Universal Redux Example App WIth Bootstrap 4 is a simple example app that renders html on the server to make all pages visible to search engines. Then after initial load from the server, it is converted to a single page application to allow for fast navigation between pages.  

#####Notes
I tried to simplify the example from [Example Cosmic JS app ](https://github.com/tonyspiro/react-universal-blog).  I deleted code regarding cosmicjs api and tried to add some comments that I think will help better get the idea.  All components are shared and the only difference between client and server are the entry points (app-client.js, app-server.js and app.js). 

It uses the following:
<br>
1. [React](http://facebook.github.io/react/) for UI views<br>
2. [Express](http://expressjs.com/) for server side rendering<br>
3. [React Router](https://github.com/rackt/react-router) for routing<br>
4. [React Hot Loader](https://github.com/gaearon/react-hot-loader) for hot loading in development<br>
5. [Flux](https://facebook.github.io/flux/) for data flow<br>
#####Install
```
git clone https://github.com/abador/react-universal-redux-bs-4
cd react-universal-redux-bs-4
npm install
```
#####Run development
```
npm run development
```
Go to [http://localhost:8080](http://localhost:8080)
#####Run production
```
npm start
```
Go to [http://localhost:3000](http://localhost:3000)

