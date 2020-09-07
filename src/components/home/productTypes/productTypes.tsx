import React from "react";
import "./productType.styles.css";

type Event = {
  eventType: string;
  images1: string;
  images2: string;
  images3: string;
  images4: string;
  images5: string;
  images6: string;
  images7: string;
  images8: string;
  images9: string;
  images10: string;
  images11: string;
  images12: string;
  images13: string;
  images14: string;
  imageText1: string;
  imageText2: string;
  imageText3: string;
  imageText4: string;
  imageText5: string;
  imageText6: string;
  imageText7: string;
  imageText8: string;
  imageText9: string;
  imageText10: string;
  imageText11: string;
  imageText12: string;
  imageText13: string;
  imageText14: string;
  itemName1: string;
  itemName2: string;
  itemName3: string;
  itemName4: string;
  itemName5: string;
  itemName6: string;
  itemName7: string;
  itemName8: string;
  itemName9: string;
  itemName10: string;
  itemName11: string;
  itemName12: string;
  itemName13: string;
  itemName14: string;
};

export const ProductTypes = ({
  eventType,
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
  images11,
  images12,
  images13,
  images14,
  imageText1,
  imageText2,
  imageText3,
  imageText4,
  imageText5,
  imageText6,
  imageText7,
  imageText8,
  imageText9,
  imageText10,
  imageText11,
  imageText12,
  imageText13,
  imageText14,
  itemName1,
  itemName2,
  itemName3,
  itemName4,
  itemName5,
  itemName6,
  itemName7,
  itemName8,
  itemName9,
  itemName10,
  itemName11,
  itemName12,
  itemName13,
  itemName14,
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
            <img src={images1} placeholder={imageText1} />
            <span>{itemName1}</span>
          </li>
          <li className="item">
            <img src={images2} placeholder={imageText2} />
            <span>{itemName2}</span>
          </li>
          <li className="item">
            <img src={images3} placeholder={imageText3} />
            <span>{itemName3}</span>
          </li>
          <li className="item">
            <img src={images4} placeholder={imageText4} />
            <span>{itemName4}</span>
          </li>
          <li className="item">
            <img src={images5} placeholder={imageText5} />
            <span>{itemName5}</span>
          </li>
          <li className="item">
            <img src={images6} placeholder={imageText6} />
            <span>{itemName6}</span>
          </li>
          <li className="item">
            <img src={images7} placeholder={imageText7} />
            <span>{itemName7}</span>
          </li>
          <li className="item">
            <img src={images8} placeholder={imageText8} />
            <span>{itemName8}</span>
          </li>
          <li className="item">
            <img src={images9} placeholder={imageText9} />
            <span>{itemName9}</span>
          </li>
          <li className="item">
            <img src={images10} placeholder={imageText10} />
            <span>{itemName10}</span>
          </li>
          <li className="item">
            <img src={images11} placeholder={imageText11} />
            <span>{itemName11}</span>
          </li>
          <li className="item">
            <img src={images12} placeholder={imageText12} />
            <span>{itemName12}</span>
          </li>
          <li className="item">
            <img src={images13} placeholder={imageText13} />
            <span>{itemName13}</span>
          </li>
          <li className="item">
            <img src={images14} placeholder={imageText14} />
            <span>{itemName14}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
