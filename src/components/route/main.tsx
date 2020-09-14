import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../home/home";
import { About } from "../home/about/about";
import { Contact } from "../home/contact/contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="#home" component={About} />
    <Route exact path="#about" component={Contact} />
  </Switch>
);

export default Main;
