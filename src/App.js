

import  { Component } from 'react';
import UserDetails from "./UserDetails.js"
import { BrowserRouter as  Router, Redirect, Route, Switch  } from 'react-router-dom';
import Users from  "./Users.js";;





class App extends Component {


render() {
    return ( <div >
         <Router>
            
          <Switch>
            <Route path="/:id" render={(props)=><UserDetails {...props} />}/>
            <Route path="/" component={Users}/>
            </Switch>
            </Router>
      </div>


    );
}

}

export default App;
