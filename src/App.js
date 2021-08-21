import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Create from "./Component/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./Component/BlogDetails";
import NotFound from "./Component/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
