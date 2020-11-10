import React, { useContext, Suspense } from "react"
import {
  Router,
} from "@reach/router"
import { GlobalStyles } from "./styles/GlobalStyle"
import { NavigationBar } from "./Components/NavigationBar"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { NotFound } from "./pages/NotFound"
import { Context } from "./Context"

export const App = () => {
  const { isAuth } = useContext(Context)
  
  return (
    <Suspense fallback={<h1>Carganding</h1>}>
      <GlobalStyles/>
      <NavigationBar />

      <Router>
        <NotFound default/>
        <Home path='/'/>
        {!isAuth && <Register path='/register' />}
        {!isAuth && <Login path='/login' />}
      </Router>

    </Suspense>
  );
}

