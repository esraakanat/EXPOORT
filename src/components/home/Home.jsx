import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Item from "./item/Item";
import SubmitEmail from "../Submit/SubmitEmail";
import { useTranslation } from "react-i18next";
function Home() {
  const [t] = useTranslation();
  return (
    <div>
      <Hero />
      <Item></Item>
      <Service />

      <section id="contact">
        <div className=" container" style={{ padding: "  20px 0 " }}>
          {SubmitEmail(
            t("SubmitEmail.contact"),
            t("SubmitEmail.yourfullname"),
            t("SubmitEmail.email"),
            t("SubmitEmail.phone"),
            t("SubmitEmail.message"),
            t("SubmitEmail.submit"),
            ""
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
