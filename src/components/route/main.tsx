import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "../home/home";
import {ProductPhotography} from "../product_photograghy/product_photography";
import {About} from "../home/about/about";
import {Contact} from "../home/contact/contact";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Contact} />
    </Switch>
);

export default Main;
