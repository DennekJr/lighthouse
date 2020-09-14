import React, {useEffect} from "react";
import { Layout, Header, Navigation, Content } from "react-mdl";
import "./App.css";
import Main from "./components/route/main";
import {useScroll} from "./hooks/useScroll";

function App() {
  const [executeScroll] = useScroll()

  const scrollTo = () => {
    executeScroll()
  }

  return (
    <div>
      <Layout>
        <section>
          <Header className="headerColor" id="headerId" scroll>
            <Navigation>
              <a href="/home" id="headerNavs">
                Home
              </a>
              <a onClick={scrollTo} href="#about" id="headerNavs">
                About
              </a>
              <a href="#contact" id="headerNavs">
                Contact
              </a>
            </Navigation>
          </Header>
        </section>
        <Content>
          <div>
            <Main/>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
