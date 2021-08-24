import React from "react";
import { Switch, Route } from "react-router-dom";
// import NavMain from "./components/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import CreateForm from "./components/Forms/CreateForm";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <NavMain /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/" component={Footer} /> */}
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/create-questions" component={CreateForm} /> {/* protected routes for questions */}
        {/* <ProtectedRoute exact path="/read-all-questions" component={CreateForm} />
        <ProtectedRoute exact path="/read-one-question" component={CreateForm} />
        <ProtectedRoute exact path="/update-question" component={CreateForm} />
        <ProtectedRoute exact path="/delete-question" component={CreateForm} /> */}
      </Switch>
    </div>
  );
}

export default App;
