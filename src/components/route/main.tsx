import React from "react";
import {Route, Switch} from "react-router-dom";
import {Home} from "../home/home";
import {ProductPhotography} from "../product_photograghy/product_photography";
import {About} from "../about/about";
import {Contact} from "../contact/contact";

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product_photography" component={ProductPhotography} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
);

export default Main;
