import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/ingreso" component={Login} />
        <Route exact path="/registro" component={Register} />
        <Redirect from="*" to="/ingreso" />
      </Switch>
    </Router>
  );
}

export default App;
