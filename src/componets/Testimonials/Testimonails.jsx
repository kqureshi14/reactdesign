import React from "react";
import "./Testimonails.css";

import { testimonial1, testimonial2, testimonial3 } from "../../assets/index";

const Testimonails = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt=""></img>
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name"> Google</div>
              <div className="review">
                This is great course.I got to learn lot
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial2} alt=""></img>
            <div className="reviewer-details">
              <div className="name">Rober Fox</div>
              <div className="company-name"> Facebook</div>
              <div className="review">I got to learn lot of Music. Production with this course</div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial3} alt=""></img>
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Microsoft</div>
              <div className="review">Awesome Great Job!.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonails;
