import { useState } from 'react'
import Home from "./Components/Home"
import './App.css'
import RandomUser from './Components/randomUser'
import {Switch , Route} from "react-router"
function App() {
  return (
    <>
    <Switch>
     <Route exact path="/random" component={RandomUser}/>
     <Route exact path="/" component={Home}/>
    </Switch>
    </>
  )
}

export default App
