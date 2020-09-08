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
            title={
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Lighthouse Productions
              </Link>
            }
            scroll
          >
            <Navigation>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
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
