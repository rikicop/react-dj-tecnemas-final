/* import './Blog.css'; */
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function Blog() {
  return (
    <Router>
      <Switch>
        <Route exact path="/api">
          <Home />
        </Route>
        <Route path="/api/:id">
          <BlogDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default Blog;
