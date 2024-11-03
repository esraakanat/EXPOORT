import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const [t] = useTranslation();
  return (
    <footer>
      <section>
        <div className="container">
          <div className="footer-container grid">
            <div className="footer-element">
              <h3>
                <a href="home" className="logo footer-logo">
                  <span className="red-color">MA.</span>
                  <span>EXPRESS</span>
                </a>
              </h3>
              <p>{t("hero.body")}</p>
            </div>
            <div className="footer-element">
              <ul>
                <li>
                  <h3>{t("itme.btn")}</h3>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    {t("itme.driver")}
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    {t("itme.OurOffers")}
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    {t("itme.Transfer")}
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    {t("itme.Safety")}
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    {t("Certificates.title")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-element">
              <ul>
                <li>
                  <h3>{t("name")}</h3>
                </li>
                <li>
                  <a href="home" className="footer-link">
                    {t("home")}
                  </a>
                </li>
                <li>
                  <a href="#service" className="footer-link">
                    {t("service")}
                  </a>
                </li>
                <li>
                  <a href="employment" className="footer-link">
                    {t("ourTame")}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-link">
                    {" "}
                    {t("contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-element">
              <h3>{t("Getin")}</h3>
              <div className="email-input-box">
                <input placeholder={t("SubmitEmail.email")} type="text" />
                <button className="email-btn">{t("Go")}</button>
              </div>
         
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
