import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home  from './pages';
import SigninPage from './pages/signin';
import BlogPage from './pages/blog';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/signin" component={SigninPage} exact />
        {/* <Route path="/api" component={BlogPage} exact /> */}
        {/* Aqui se lo quite por que se borraba el contenido al refrescar */}
        <Route  path="/api" component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default App;
