
import Home from "./Components/Home"
import './App.css'
import RandomUser from './Components/RandomUser'
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

// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" Component={Login} />
//         <Route path="/home" Component={Home}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;