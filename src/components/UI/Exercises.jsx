import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="about">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercising</span>
          </h2>
          <p>
          Participating in group exercise classes or activities can provide an opportunity <br/>
          for seniors to socialize and connect with others, which can improve overall well-being.
          </p>
        </div>

        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>Regular exercise can also improve bone density, strengthen the immune system, and improve digestion.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={yoga} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p> Exercise such as yoga, stretching, or Pilates can help improve flexibility and reduce the risk of falls.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={extended} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Mental health</h4>
              <p>Exercise has been shown to improve mood, reduce stress and anxiety, and decrease the risk of depression.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
