import React from "react";
import heroImg from "../../assets/img/newhero.jpg";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">

          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Age is Just a Number, Stay 
              <span className="highlights"> Active!</span> 
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1800">
              Exercise for the elderly is important for maintaining physical and mental well-being. <br />
              Exercise can help prevent or reduce the impact of common diseases such as <br/>
              diabetes, arthritis, osteoporosis, heart disease, depression and cognitive decline.<br/>
              Exercise can also help with physical mobility, balance and coordination.
            </p>

            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="register__btn">Get Started</button>
            </div>
          </div>

          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h6>2567 BPM</h6>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
