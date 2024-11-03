import React from "react";
import "./item.css";
import { useTranslation } from "react-i18next";

const Item = () => {
  const [t] = useTranslation();
  return (
    <>
    <section id="service">
      <div className="imgcontent">
        <div className="row">
          <div className="col ">
            <h1> {t("itme.col_title")}</h1>
            <p> {t("itme.title")}</p>
            <button>{t("itme.btn")}</button>
          </div>
          <div className="col grad-col ">
            <div className="card card1 grid">
              <h5>{t("itme.driver")}</h5>
              <p>{t("itme.driverbody")}</p>
            </div>
            <div className="card card2 grid">
              <h5>{t("itme.OurOffers")} </h5>
              <p>{t("itme.OurOffersbody")}</p>
            </div>
            <div className="card card3 grid">
              <h5>{t("itme.Transfer")}</h5>
              <p>{t("itme.Transferbody")}</p>
            </div>
            <div className="card card4 grid">
              <h5> {t("itme.Safety")}</h5>
              <p>{t("itme.Safetybody")}</p>
            </div>
          </div>
        </div>
        
      </div>
      </section>
    </>
  );
};

export default Item;
