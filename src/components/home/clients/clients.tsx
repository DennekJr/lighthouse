import React from "react";
import "./clients.styles.css";
import {SectionTitle} from "../../SectionTitle/SectionTitle";

export const Client = () => {
  return (
    <div className="clientContainer">
      <div className="clientHeading">
        <SectionTitle title={'Clients'}/>
      </div>
      <div className="clientIconsContainer">
        <div className="clientIcons">
          <div>
            <a href="https://www.foodjonezi.com/">
              <img
                src="/images/food-jenozi.png"
                style={{ height: "105px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://starblue.co/collections/all">
              <img
                src="/images/starBlue.png"
                style={{ height: "84px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://sparkpod.com/">
              <img
                src="/images/sparkpod.png"
                style={{ height: "153px", width: "352px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://www.amazon.com/stores/page/6B94FA03-0746-4B98-B806-7EA46EFCF2AA?ingress=0&visitId=6542b9b5-31fc-4824-bcb1-932e50e41608">
              <img
                src="/images/delighTeas.png"
                style={{ height: "56px", width: "300px" }}
              />
            </a>
          </div>
        </div>
        <div className="clientIcons">
          <div>
            <a href="https://jean-patrique.co.uk/">
              <img
                src="/images/jp-final.png"
                style={{ height: "84px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://www.vipjiu8.com/">
              <img
                src="/images/vip.png"
                style={{ height: "114px", width: "114px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://yatoshiknives.com/">
              <img
                src="/images/yatoshiKnives.png"
                style={{ height: "75px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://olykefoods.com/">
              <img
                src="/images/olyke.png"
                style={{ height: "78px", width: "85px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
