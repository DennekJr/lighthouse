import React from "react";
import "./productType.styles.css";

type Event = {
  eventType: string;
  video1: string;
  video2: string;
  video3: string;
  video4: string;
};

export const ProductTypes = ({
  eventType,
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
        <ul className="hs" style={{height: '300px'}}>
          <li className="item">
            <iframe src={video1} className="iframe"/>
          </li>
          <li className="item">
            <iframe src={video2} className="iframe"/>
          </li>
          <li className="item">
            <iframe src={video3} className="iframe"/>
          </li>
          <li className="item">
            <iframe src={video4} className="iframe"/>
          </li>
        </ul>
      </div>
    </div>
  );
};
