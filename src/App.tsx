import React from "react";
import {
  Layout,
  Header,
  Navigation,
  Content,
  Footer,
  FooterSection,
  FooterLinkList,
  Button,
} from "react-mdl";
import "./App.css";
import { Link } from "react-router-dom";
import Main from "./components/route/main";

function App() {
  return (
    <div>
      <Layout>
        <section>
          <Header
            className="headerColor"
            id="headerId"
            scroll
          >
            <Navigation>
              <a href="/home" id="headerNavs">Home</a>
              <a href="#about" id="headerNavs">About</a>
              <a href="#contact" id="headerNavs">Contact</a>
            </Navigation>
          </Header>
        </section>
        <Content>
          <div>
            <Main />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
