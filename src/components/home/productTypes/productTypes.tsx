import React from "react";
import "./productType.styles.css";

type Event = {
  eventType: string;
  // images1: string;
  // images2: string;
  // images3: string;
  // images4: string;
  // images5: string;
  // itemName1: string;
  // itemName2: string;
  // itemName3: string;
  // itemName4: string;
  // itemName5: string;
  video1: string;
  video2: string;
  video3: string;
  video4: string;
};

export const ProductTypes = ({
  eventType,
  // images1,
  // images2,
  // images3,
  // images4,
  // images5,
  // itemName1,
  // itemName2,
  // itemName3,
  // itemName4,
  // itemName5,
    video1,
    video2,
    video3,
    video4
}: Event) => {
  return (
    <div className="productTypesContainer">
      <p>
        <span className="eventType">{eventType} |</span>
        <span className="watchAll"> Watch all</span>
      </p>
      <div>
        <ul className="hs">
          <li className="item">
            <iframe src={video1} style={{height: '100%', border: 'none'}}/>
          </li>
          <li className="item">
            <iframe src={video2} style={{height: '100%', border: 'none'}}/>
          </li>
          <li className="item">
            <iframe src={video3} style={{height: '100%', border: 'none'}}/>
          </li>
          <li className="item">
            <iframe src={video4} style={{height: '100%', border: 'none'}}/>
          </li>
          {/*<li className="item">*/}
          {/*  <img src={images1} placeholder={imageText1} />*/}
          {/*  <span>{itemName1}</span>*/}
          {/*</li>*/}
          {/*<li className="item">*/}
          {/*  <img src={images2} placeholder={imageText2} />*/}
          {/*  <span>{itemName2}</span>*/}
          {/*</li>*/}
          {/*<li className="item">*/}
          {/*  <img src={images3} placeholder={imageText3} />*/}
          {/*  <span>{itemName3}</span>*/}
          {/*</li>*/}
          {/*<li className="item">*/}
          {/*  <img src={images4} placeholder={imageText4} />*/}
          {/*  <span>{itemName4}</span>*/}
          {/*</li>*/}
          {/*<li className="item">*/}
          {/*  <img src={images5} placeholder={imageText5} />*/}
          {/*  <span>{itemName5}</span>*/}
          {/*</li>*/}
        </ul>
      </div>
    </div>
  );
};
