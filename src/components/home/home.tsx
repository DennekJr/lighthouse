import React from "react";
import { Button } from "react-mdl";
import "./home.css";
import { ProductTypes } from "./productTypes/productTypes";
import { Form } from "./form/form";
import { Contact } from "./contact/contact";
import { About } from "./about/about";
import { Client } from "./clients/clients";
import {SectionTitle} from "../SectionTitle/SectionTitle";
import {Footer} from "../Footer/Footer";

const cookingVideos = ['https://www.youtube.com/embed/GTwpmwoyOkU?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0', 'https://www.youtube.com/embed/xYypShy_orQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0']
const productVideos = ['https://www.youtube.com/embed/Tdye17_FAVQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0', 'https://www.youtube.com/embed/81o2HiWf9iY?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0', 'https://www.youtube.com/embed/BQ2dUv71gyQ?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=', 'https://www.youtube.com/embed/lxZ7pRUqtvY?feature=oembed&start&end&wmode=opaque&loop=0&controls=1&mute=0&rel=0&modestbranding=0']
export const Home = () => {
  return (
    <div>
      <section className="headerVideoSection">
        <div className={'introVideo'}>
          <video autoPlay muted loop>
            <source src="/intro.mp4" type="video/mp4" />
            <div className="borderLeft">
              <h5>Cooking Videos . Product Videos . Cinematography</h5>
              <h2>Lighthouse Productions</h2>
            </div>
          </video>
        </div>
      </section>
      <section className={'sampleVideos'}>
        <SectionTitle title={'Sample cooking videos'}/>
        <ProductTypes urls={cookingVideos}/>
        <SectionTitle title={'Sample product videos'}/>
        <ProductTypes urls={productVideos}/>
      </section>
      <section
        style={{
          padding: "60px 30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        id="about"
      >
        <About />
        <Client />
      </section>
      <Footer/>
    </div>
  );
};
