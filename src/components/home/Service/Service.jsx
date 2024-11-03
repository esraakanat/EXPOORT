import React from "react";
import "./service.css";
import { useTranslation } from "react-i18next";
import PayChecked from "../../assets/Img/PayChecked-logo-2024.jpg";
import niwo from "../../assets/Img/niwo.svg";
import Testi from "./testi/Testi";

const Service = () => {
  const [t] = useTranslation();
  return (
    <>
    <section id="ourTame">
    <div className="border"></div>

      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">{t("OurCustomers.title")}</h1>
          <p className="text-box text-box-service" style={{ color: "black" }}>
            {t("OurCustomers.titlebody")}
          </p>
        </div>
      </div>
      <Testi />{" "}
      <div className="border"></div>

      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">{t("Certificates.title")}</h1>
          <p className="text-box" style={{ color: "black" }}>
            {t("Certificates.titlep")}
          </p>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <img src={PayChecked} alt="PayChecked: اتّخذ خطوة جريئة نحو المستقبل" ></img>
              </div>
              <div className="service-title">
                {t("Certificates.PayCheckedtitle")}
              </div>
              <div className="service-desc">{t("Certificates.PayCheckedbody")}</div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <img src={niwo} style={{ marginTop: "60px" }} alt="صورة Niwo على خلفية بيضاء"></img>
              </div>
              <div className="service-title">{t("Certificates.niwotitle")}</div>
              <div className="service-desc">{t("Certificates.niwobody")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      </section>
    </>
  );
};

export default Service;
