import React from "react";
import "../../styles/start.css";
import YogaImg from "../../assets/img/Yoga.png";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={YogaImg}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to live a <span className="highlights">healthy life?</span>
            </h2>
            <p>
            Yoga refreshes your mind and spirit. Tones your body. 
            Keeps your internal organs and hormonal system in balance. 
            All the more reason for people of all ages to do yoga. 
            In fact, yoga asanas are one of the few physical exercises 
            you can continue doing as you age. As age progresses, 
            it is more important to focus on HOW YOU DO rather than how much you do. 
            </p>

            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
