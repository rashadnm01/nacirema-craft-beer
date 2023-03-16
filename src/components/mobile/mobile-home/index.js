import React from "react";
import "./_home.scss";
import { MobileNav } from "../mobile-nav";
import HomepageImage from "../../../images/homepage-image.png";
import NCBLogo from "../../../images/ncb-logo.png";
import FinestFlavor from "../../../images/finest-flavor-for-the.png";
import FinestMoments from "../../../images/finest-moments.png";
import ShopIcon from "../../../images/shop-icon.png";

export const MobileHome = () => {
  return (
    <div className="home-wrapper">
      <MobileNav />
      <div className="home-body">
        <div className="body">
          <div className="logo">
            <img id="logo" src={NCBLogo} />
          </div>
          <div className="middle">
            <div className="title-wrapper">
              <div className="title">
                <img id="finest-flavor" src={FinestFlavor} />
              </div>
              <div className="title">
                <img id="finest-moments" src={FinestMoments} />
              </div>
            </div>

            <div className="subtitle-wrapper">
              Duis pretium porta augue, nec dictum quam porttitor sed. Donec non
              nibh maximus, volutpat diam eget, fringilla turpis. In hac
              habitasse platea dictumst
            </div>
          </div>
          <div className="button-wrapper">
            <div className="button">About Us</div>
            <div className="button">
              Shop <img src={ShopIcon} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
