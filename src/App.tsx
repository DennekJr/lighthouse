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
import { Home } from "./components/home/home";

function App() {
  return (
    <div>
      <Layout>
        <section>
          <Header
            className="headerColor"
            title={
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Austen Paul
              </Link>
            }
            scroll
          >
            <Navigation>
              <a href="/product_photography">Product Photography</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </Navigation>
          </Header>
          {/*<Home/>*/}
        </section>
        <Content>
          <div className="page-content">
            <Main />
          </div>
        </Content>
        <section>
          <div className="footer">
            <Button
              href="#"
              style={{
                backgroundColor: "#5BABAB",
                color: "white",
              }}
            >
              Let's Connect
            </Button>
            <h6>© 2020 by DennekJr Productions</h6>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default App;
