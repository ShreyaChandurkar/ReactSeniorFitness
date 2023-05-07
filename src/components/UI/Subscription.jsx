import React from "react";
import "../../styles/subscription.css";

const Pricing = () => {
  return (
    <section id="Subscription-plan">
      <div className="container">
        <div className="Subscription__top">
          <h2 className="section__title">
            Consultant <span className="highlights">Subscription</span> Plan
          </h2>
          <p>
          Remember, the most important thing is to approach your yoga practice with an open mind <br/> 
          and a willingness to learn and explore your body's capabilities. <br/> 
          With the right guidance and approach, yoga can be a safe and beneficial form of exercise for seniors over 65+.
          </p>
        </div>

        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing section__title">
                Rs.100 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className="pricing section__title">
                Rs.300 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>
                
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing section__title">
              Rs.500 <span>/month</span>
              </h2>
            </div>

            <div className="services">
              <ul>

                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>

              <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
