import React from "react";
import "../../styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import person1 from "../../assets/img/person1.webp";
import person2 from "../../assets/img/person2.webp";
import person3 from "../../assets/img/person3.jpg";
import person4 from "../../assets/img/person4.jpg";
import person5 from "../../assets/img/person5.jpg";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={person1} alt="" />
                </div>

                <h4>Jeanne Calment</h4>
                <p>
                Strength training exercises can help build muscle mass 
                and improve overall strength, making it easier to perform 
                daily activities and reducing the risk of falls.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={person2} alt="" />
                </div>
                
                <h4>Walter Breuning</h4>
                <p>
                Regular yoga and exercise practice has been shown
                 to reduce stress and anxiety levels, promoting 
                 a sense of calm and relaxation.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={person3} alt="" />
                </div>

                <h4>Gustav Gerneth & Chiyo Gerneth</h4>
                <p>
                Cardiovascular exercises such as running, 
                cycling, or swimming can improve heart health, 
                reduce blood pressure, and lower the risk of heart disease.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={person4} alt="" />
                </div>

                <h4>	Kane Tanaka</h4>
                <p>
                Regular yoga and exercise practice has been shown 
                to improve overall health and well-being, including 
                reducing the risk of chronic diseases such as diabetes, 
                obesity, and some types of cancer. It can also help improve 
                sleep quality, boost mood, and increase energy levels.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={person5} alt="" />
                </div>

                <h4>Delphia Welford</h4>
                <p>
                It's important to listen to your body and avoid 
                pushing yourself too hard. If a pose feels 
                uncomfortable or causes pain, modify it or skip it altogether.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
