import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import CreateQuestion from "./pages/CreateQuestion";
import ReadQuestion from "./pages/ReadQuestion";
import UpdateQuestion from "./pages/UpdateQuestion";
import DeleteQuestion from "./pages/DeleteQuestion";

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
        <ProtectedRoute exact path="/create-questions" component={CreateQuestion} /> {/* protected routes for questions */}
        <ProtectedRoute exact path="/read-questions" component={ReadQuestion} />        
        <ProtectedRoute exact path="/update-questions" component={UpdateQuestion} />
        <ProtectedRoute exact path="/delete-questions" component={DeleteQuestion} /> */}
      </Switch>
    </div>
  );
}

export default App;
