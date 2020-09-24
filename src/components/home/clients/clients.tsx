import React from "react";
import "./clients.styles.css";

export const Client = () => {
  return (
    <div className="clientContainer">
      <div className="clientHeading">
        <h2>CLIENTS</h2>
        <hr style={{ borderTop: "3px solid #7720FB", width: "80%" }} />
      </div>
      <div className="clientIconsContainer">
        <div className="clientIcons">
          <div>
            <a href="https://www.foodjonezi.com/">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/Food-Jenozi-logo-300x105.png"
                style={{ height: "105px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://starblue.co/collections/all">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/Screenshot-2020-08-23-at-0.23.31-300x84.png"
                style={{ height: "84px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://sparkpod.com/">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/Sparkpod-Logo.png"
                style={{ height: "153px", width: "352px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://www.amazon.com/stores/page/6B94FA03-0746-4B98-B806-7EA46EFCF2AA?ingress=0&visitId=6542b9b5-31fc-4824-bcb1-932e50e41608">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/DelighTeas-Logo-300x56.png"
                style={{ height: "56px", width: "300px" }}
              />
            </a>
          </div>
        </div>
        <div className="clientIcons">
          <div>
            <a href="https://jean-patrique.co.uk/">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/JP-Final.png"
                style={{ height: "84px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://www.vipjiu8.com/">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/Screenshot-2020-08-26-at-16.56.39.png"
                style={{ height: "114px", width: "114px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://yatoshiknives.com/">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/Logo_V2_360x-300x75.png"
                style={{ height: "75px", width: "300px" }}
              />
            </a>
          </div>
          <div>
            <a href="https://olykefoods.com/">
              <img
                src="https://thelighthouseprod.com/wp-content/uploads/2020/08/olyke-e1576099574721-5e2f77cf.png"
                style={{ height: "78px", width: "85px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
