import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from "./component/user/ListUserComponent";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";
// import radio from "./component/user/radiobutton";
// import Tachyons from 'tachyons';

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className='tc' style={style}>React User Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListUserComponent} />
                      <Route path="/users" component={ListUserComponent} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />
                      {/* <Route path="/radio" component={radio} /> */}
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;

