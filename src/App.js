import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import About from "./components/About/About";
import Doctors from "./components/Doctors/Doctors";
import Login from "./components/Login/Login/Login";

function App() {
 return (
  <div className="App">
   <Router>
    <Header></Header>
    <Switch>
     <Route exact path="/">
      <Home></Home>
     </Route>
     <Route exact path="/services">
      <ServicesPage></ServicesPage>
     </Route>
     <Route exact path="/about">
      <About></About>
     </Route>
     <Route exact path="/doctors">
      <Doctors></Doctors>
     </Route>
     <Route exact path="/login">
      <Login></Login>
     </Route>
    </Switch>
    <Footer></Footer>
   </Router>
  </div>
 );
}

export default App;
