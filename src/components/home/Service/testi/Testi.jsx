import "./testi.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import { useTranslation } from "react-i18next";

import PostNL from "../../../assets/Img/شعار PostNL على خلفية برتقالية.png";
import DPD from "../../../assets/Img/DPD_logo.png";
import DHL from "../../../assets/Img/DHL logo.png";

const Testi = () => {
  const [t] = useTranslation();

  return (
    <div className="container_testi">

    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper Testimonial"
    >
        <SwiperSlide className="testi-content" >
    
              <div className="Slide">
              <img src={PostNL} alt="PostNL logo" className="img_testi" />
                <p>{t("Certificates.PostNLbody")}</p>
                <i className="bx bxs-quote-alt-left guote-icon"></i>
                <div className="details">
                  <span className="name">
                    {" "}
                    {t("Certificates.PostNLtitle")}{" "}
                  </span>
                  <span className="job"> {t("OurCustomers.title")} </span>
                </div>
              </div>
          
        </SwiperSlide>
        <SwiperSlide className="testi-content">
        
            <div className="testi-content">
              <div className="Slide" >
                <img src={DPD} alt="DPD logo" className="img_testi" />
                <p>{t("DeliverCompany.Dpdbody")}</p>
                <i className="bx bxs-quote-alt-left guote-icon"></i>
                <div className="details">
                  <span className="name">
                    {" "}
                    {t("DeliverCompany.Dpdtitle")}{" "}
                  </span>
                  <span className="job"> {t("OurCustomers.title")} </span>
                </div>
              </div>
            </div>
          
        </SwiperSlide>
        <SwiperSlide className="testi-content">
        
        <div className="testi-content">
          <div className="Slide">
          <img src={DHL} alt="DHL logo" className="img_testi" />
            <p>{t("DeliverCompany.Dhlbody")}</p>
            <i className="bx bxs-quote-alt-left guote-icon"></i>
            <div className="details">
              <span className="name">
                {" "}
                {t("DeliverCompany.Dhltitle")}{" "}
              </span>
              <span className="job"> {t("OurCustomers.title")} </span>
            </div>
          </div>
        </div>
      
    </SwiperSlide>

    </Swiper>
       </div>
  );
};

export default Testi;
