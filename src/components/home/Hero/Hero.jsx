import React from "react";
import "./hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [t] = useTranslation();

  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="text-box">
            <h1> {t("hero.title")} </h1>
            <p>{t("hero.body")}</p>
            <div className="content-btn">

            <a className="hero-btn">{t("hero.btn")}</a>
            <a className="hero-btn">{t("hero.btnStudent")}</a>
            </div>


          </div>
        </div>
      </section>
    
    </>
  );
};

export default Hero;
