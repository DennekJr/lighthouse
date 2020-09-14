import React from "react";
import "./productType.styles.css";

type Event = {
  urls: string[];
};

export const ProductTypes = ({ urls }: Event) => {
  return (
    <div className="productTypesContainer">
      <div>
        <ul className="hs">
          {urls.map((url) => (
            <li className="item">
              <iframe src={url} className="iframe" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
