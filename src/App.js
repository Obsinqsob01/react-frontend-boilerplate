import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import { GlobalStyles } from "./styles/GlobalStyle"
import { Home } from "./pages/Home"

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
