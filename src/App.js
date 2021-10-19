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
import NotFound from "./components/NotFound/NotFound";
import SingleService from "./components/SingleService/SingleService";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "./components/SignUp/SignUp";
import Appointment from "./components/Appointment/Appointment";

function App() {
 return (
  <AuthProvider>
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
      <PrivateRoute path="/services/:serviceID">
       <SingleService></SingleService>
      </PrivateRoute>
      <Route exact path="/about">
       <About></About>
      </Route>
      <PrivateRoute exact path="/doctors">
       <Doctors></Doctors>
      </PrivateRoute>
      <Route exact path="/login">
       <Login></Login>
      </Route>
      <Route exact path="/signup">
       <SignUp></SignUp>
      </Route>
      <PrivateRoute exact path="/appointment">
       <Appointment></Appointment>
      </PrivateRoute>
      <Route path="*">
       <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
    </Router>
   </div>
  </AuthProvider>
 );
}

export default App;
