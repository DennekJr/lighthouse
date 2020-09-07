import React from "react";
import { Button, Grid } from "react-mdl";
import "./home.css";
import { ProductTypes } from "./productTypes/productTypes";
import {Form} from "./form/form";
import {Contact} from "./contact/contact";

export const Home = () => {
  return (
    <div className="container">
      <section className="headerVideoSection">
        <div className="borderLeft">
          <h5>
            Cinematography . StoryTelling . Exploring . Drone Operation .
            Photography
          </h5>
          <h2>Lighthouse Production</h2>
          <h3>Creating films that inspires millions</h3>
          <h4>So what's your dream? Let's make it a reality</h4>
          <Button
            raised
            accent
            ripple
            className="bannerButton"
            style={{ backgroundColor: "rgba(91, 171, 171, 1)" }}
          >
            WATCH HIGHLIGHT REEL
          </Button>
        </div>
      </section>
      <section style={{ padding: "30px" }}>
        <ProductTypes
          eventType="Products"
          images1="https://wallpaperaccess.com/full/151676.jpg"
          imageText1="Anime Character"
          images2="https://www.mobilesmspk.net/user/images/upload_images/2020/02/13/www.mobilesmspk.net_london-image-1.jpg"
          imageText2="Anime Character"
          images3="https://mobilehd.blob.core.windows.net/main/2015/07/london-bus-bigben-sunset-road-1280x1920.jpg"
          imageText3="Anime Character"
          images4="https://i.pinimg.com/originals/1c/3a/ec/1c3aecee54c89d05ad58aa445fb8ea51.jpg"
          imageText4="Anime Character"
          images5="https://i.pinimg.com/originals/47/71/5a/47715a1942522e308b3cfc397709d7eb.jpg"
          imageText5="Anime Character"
          images6="https://s2.best-wallpaper.net/wallpaper/iphone/1612/Tower-Bridge-river-London-UK_iphone_750x1334.jpg"
          imageText6="Anime Character"
          images7="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText7="Anime Character"
          images8="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText8="Anime Character"
          images9="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText9="Anime Character"
          images10="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText10="Anime Character"
          images11="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText11="Anime Character"
          images12="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText12="Anime Character"
          images13="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText13="Anime Character"
          images14="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText14="Anime Character"
          itemName1="Shingetsu"
          itemName2="Shingetsu2"
          itemName3="Shingetsu3"
          itemName4="Shingetsu4"
          itemName5="Shingetsu5"
          itemName6="Shingetsu6"
          itemName7="Shingetsu7"
          itemName8="Shingetsu8"
          itemName9="Shingetsu9"
          itemName10="Shingetsu10"
          itemName11="Shingetsu11"
          itemName12="Shingetsu12"
          itemName13="Shingetsu13"
          itemName14="Shingetsu14"
        />
        <ProductTypes
          eventType="Commercial"
          images1="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkgzrq6FB6fMxIZszPlv-qcY4iswxh92eZlQ&usqp=CAU"
          imageText1="Anime Character"
          images2="https://i.pinimg.com/originals/ed/06/b0/ed06b04c6ccbad6451923d022c3d7c29.png"
          imageText2="Anime Character"
          images3="https://i.pinimg.com/originals/fc/fb/f8/fcfbf8188c93c428027e60cbe319038b.jpg"
          imageText3="Anime Character"
          images4="https://i.pinimg.com/originals/ce/e9/97/cee9977167cea3a9d130438a4624cbec.jpg"
          imageText4="Anime Character"
          images5="https://wallpaperaccess.com/full/297278.png"
          imageText5="Anime Character"
          images6="https://i.pinimg.com/originals/58/91/bd/5891bd01fa5933a232a66156c12b3314.jpg"
          imageText6="Anime Character"
          images7="https://i.pinimg.com/originals/d8/f2/32/d8f23252920b89af38a0534dbe29824a.jpg"
          imageText7="Anime Character"
          images8="https://wallpaperaccess.com/full/417990.jpg"
          imageText8="Anime Character"
          images9="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText9="Anime Character"
          images10="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText10="Anime Character"
          images11="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText11="Anime Character"
          images12="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText12="Anime Character"
          images13="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText13="Anime Character"
          images14="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText14="Anime Character"
          itemName1="Shingetsu"
          itemName2="Shingetsu2"
          itemName3="Shingetsu3"
          itemName4="Shingetsu4"
          itemName5="Shingetsu5"
          itemName6="Shingetsu6"
          itemName7="Shingetsu7"
          itemName8="Shingetsu8"
          itemName9="Shingetsu9"
          itemName10="Shingetsu10"
          itemName11="Shingetsu11"
          itemName12="Shingetsu12"
          itemName13="Shingetsu13"
          itemName14="Shingetsu14"
        />
        <ProductTypes
          eventType="Travel"
          images1="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0610C-zSyaP-cwV7nfPlvx3Bd-YpxVCybqg&usqp=CAU"
          imageText1="Anime Character"
          images2="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTHWiRgr-AQYOvYukna38lipMXKTBgJVclYQ&usqp=CAU"
          imageText2="Anime Character"
          images3="https://i.pinimg.com/originals/6a/38/44/6a38449b18addab79f685e7f37cbbf8f.jpg"
          imageText3="Anime Character"
          images4="https://www.itl.cat/pngfile/big/250-2500845_download-the-perfect-lord-shiva-pictures-mahadev-mahakal.jpg"
          imageText4="Anime Character"
          images5="https://www.bhagwankiphotos.com/wp-content/uploads/2018/12/Mahakal-Ka-Trishul-Photo.jpg"
          imageText5="Anime Character"
          images6="https://i.pinimg.com/736x/46/35/0a/46350aeb4ab47aafc91a5557c76405e6.jpg"
          imageText6="Anime Character"
          images7="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText7="Anime Character"
          images8="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText8="Anime Character"
          images9="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText9="Anime Character"
          images10="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText10="Anime Character"
          images11="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText11="Anime Character"
          images12="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText12="Anime Character"
          images13="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText13="Anime Character"
          images14="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText14="Anime Character"
          itemName1="Shingetsu"
          itemName2="Shingetsu2"
          itemName3="Shingetsu3"
          itemName4="Shingetsu4"
          itemName5="Shingetsu5"
          itemName6="Shingetsu6"
          itemName7="Shingetsu7"
          itemName8="Shingetsu8"
          itemName9="Shingetsu9"
          itemName10="Shingetsu10"
          itemName11="Shingetsu11"
          itemName12="Shingetsu12"
          itemName13="Shingetsu13"
          itemName14="Shingetsu14"
        />
        <ProductTypes
          eventType="Short Films"
          images1="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          imageText1="Anime Character"
          images2="https://images.pexels.com/photos/2187963/pexels-photo-2187963.jpeg?cs=srgb&dl=pexels-tim-fuzail-2187963.jpg&fm=jpg"
          imageText2="Anime Character"
          images3="https://1.bp.blogspot.com/-CTfnNM4W6hc/XJ8-0l1s-hI/AAAAAAAA_VA/gjfF6luGEu4enTuj1NBzvZrU7kyeMO_ogCLcBGAs/s1600/mike-marrah-1319345-unsplash.jpg"
          imageText3="Anime Character"
          images4="https://images.pexels.com/photos/1564183/pexels-photo-1564183.jpeg?cs=srgb&dl=pexels-chelsi-peter-1564183.jpg&fm=jpg"
          imageText4="Anime Character"
          images5="https://www.lovethispic.com/uploaded_images/83509-Beautiful-Sunflower-Bouquet.jpeg"
          imageText5="Anime Character"
          images6="https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1534397452/vendor/359/catalog/product/2/0/20180621023418_file_5b2bb76a1a514.jpg"
          imageText6="Anime Character"
          images7="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText7="Anime Character"
          images8="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText8="Anime Character"
          images9="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText9="Anime Character"
          images10="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText10="Anime Character"
          images11="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText11="Anime Character"
          images12="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText12="Anime Character"
          images13="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText13="Anime Character"
          images14="https://kissmanga.in/wp-content/uploads/2020/01/10-193x278-1.jpg"
          imageText14="Anime Character"
          itemName1="Shingetsu"
          itemName2="Shingetsu2"
          itemName3="Shingetsu3"
          itemName4="Shingetsu4"
          itemName5="Shingetsu5"
          itemName6="Shingetsu6"
          itemName7="Shingetsu Num7"
          itemName8="Shingetsu8"
          itemName9="Shingetsu9"
          itemName10="Shingetsu10"
          itemName11="Shingetsu11"
          itemName12="Shingetsu12"
          itemName13="Shingetsu13"
          itemName14="Shingetsu14"
        />
      </section>
      <section style={{ padding: "30px", display: 'flex', justifyContent: 'center'}} className="contactForm">
        <Contact />
        <Form />
      </section>
    </div>
  );
};
