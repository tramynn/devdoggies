import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestLanding from "./Components/GuestLanding/GuestLanding";
import DogalogueLanding from "./Components/DogalogueLanding/DogalogueLanding";
import UserProfile from "./Components/UserProfile/UserProfile";
import UserSettings from "./Components/UserSettings/UserSettings";
import AdoptionCenter from "./Components/AdoptionCenter/AdoptionCenter";

export default (
  <Switch>
    <Route component={GuestLanding} exact path="/" />
    <Route component={DogalogueLanding} path="/dogalogue" />
    <Route component={UserProfile} path="/:username" />
    <Route component={UserSettings} path="/settings" />
    <Route component={AdoptionCenter} path="/adoption-center" />
    <Route
      render={() => {
        return <h1>404 Page Not Found.</h1>;
      }}
    />
  </Switch>
);
