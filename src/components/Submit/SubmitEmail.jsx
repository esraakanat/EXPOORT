import React, { useRef, useState } from "react";
import "./Submit.css";
import indeed from "../assets/Img/svgs/indeed.svg";

import emailjs from "@emailjs/browser";

function SubmitEmail(contact, Yourfullname, Email, phone, Message, submit) {
  const form = useRef();

  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kumv14s",
        "template_snwf0ic",
        form.current,
        "CY65cFlebOCLUrceg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>

    <div>
      <div className="contact-container ">
          <div className="contact-box">
            <h1 className="contact-heading">{contact} </h1>
            <div className="icons icons1">
              <a
                href="https://www.facebook.com/profile.php?id=100064244430215&mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://x.com/maexpress1987?t=UUnAsdnLRIxo1jC7l9irgg&s=08"
                target="_blank"
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                href="https://employers.indeed.com/p/posting?hl=nl_NL&co=NL&isid=hire&ikw=signupbutton&trafficTk=1gpgvjhsnjg9f800&jstm=1708988449439&sid=nl_googmobconthajpmax_c__g_1010427_gclid%24_CjwKCAiAivGuBhBEEiwAWiFmYTXToTwYPdodim2k9AyiHKgZrJiPs1Cau6Izv1SKYZ4yitLlCywx9hoCVZEQAvD_BwE&kw=adwords_m_6018932023_18041157044_0_0_pmax&prepopulateWith=%7B%22advertiserCompany%22%3A%22Ma.express+verhuizen%22%7D"
                target="_blank"
              >
                <img src={indeed} style={{width:"25%"}} alt="indeed logo" />
              </a>
            </div>
            <div className="box-field">
              <i className="ri-user-line"></i>
              <input
                type="text"
                required
                name="user_name"
                placeholder={Yourfullname}
              />
            </div>
            <div className="box-field">
              <i className="ri-phone-line"></i>
              <input type="Number" name="user_phone" placeholder={phone} />
            </div>
            <div className="box-field">
              <i className="ri-mail-line"></i>
              <input
                type="email"
                required
                name="user_email"
                placeholder={Email}
              />
            </div>
            <textarea
              className="text-area"
              required
              name="message"
              placeholder={Message}
            ></textarea>
            <button type="submit"
              className="custom-btn submit-btn"
              style={{ fontFamily: "Cairo" }}
            >
              {submit}
            </button>
            <br></br>
            <span className="success">{done && "Sent Successfully"}</span>
          </div>
      </div>
    </div>
    </form>

  );
}

export default SubmitEmail;
