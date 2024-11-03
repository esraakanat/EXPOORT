import React from 'react'
import "./Page404.css";

import img404 from '../assets/Img/404.png'
import { useTranslation } from "react-i18next";

function Page404() {
  const [t] = useTranslation();

  return (
    <div>
      <div className="Page404">
  <div className="intro">
    <h1>{t("Page404.title")}</h1>
    <p>{t("Page404.body")}</p>
    <div className="cta">
      <button href="/home" className="cta-back">{t("Page404.btn")}</button>
    </div>
  </div>
  <img src={img404} alt="Sorry, the service is currently down."  />
</div>

    </div>
  )
}

export default Page404
