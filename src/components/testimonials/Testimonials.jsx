import React from "react";
import "./testimonials.css";
import yael from "../../assets/yael_thumbnail.jpeg";
import ellen from "../../assets/ellen_thumbnail.jpeg";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h4>Words of Appreciation</h4>
      <h3>Endorsements</h3>
      <div className="testimonial__container">
        <div
          id="carouselDark"
          className="carousel carousel-dark slide carouselContent"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <div className="carousel-content d-none d-md-block">
                <p>
                  Srichandana has been an exceptional website maintenance
                  assistant at Indiana University's Eskenazi School of Art,
                  Architecture, and Design since December 2023. She played a
                  crucial role in leading our school through the remediation of
                  our websites as mandated by the university’s Digital Strategy
                  Initiative, addressing thousands of user accessibility issues
                  swiftly and bringing us into compliance. Chandana's work is
                  characterized by her thoroughness, precision, promptness, and
                  independence. She is a quick learner who excels in
                  communication and is a joy to work with. Her technical
                  expertise, combined with her warmth and professionalism, make
                  her a valuable asset to any team.
                </p>
                <img className="thumbnail" src={yael} alt="Yaël Ksander" />
                <div className="image-caption">Yaël Ksander</div>
                <div className="title">
                  Director of Communications and Marketing
                </div>
                <div className="employer">
                  Indiana University - Eskenazi School of Art, Architecture +
                  Design
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="carousel-content">
                <p>
                  Working closely with Srichandana Chakilam during 2023–2024 has
                  been a delight. She led our website's accessibility
                  improvements, mastering PDF accessibility for screen readers
                  and ensuring clear communication with IT services. Chandana's
                  swift adaptation to our WCMS framework, timely project
                  completion, independent professionalism, and meticulous
                  attention to detail make her a valuable asset. Her proactive
                  monitoring of the site for issues and her proactive
                  communication style have greatly contributed to our success.
                  Working with her has been a pleasure, and I'm confident she'll
                  excel wherever she goes.
                </p>
                <img className="thumbnail" src={ellen} alt="Ellen Campbell" />
                <div className="image-caption">Ellen Campbell</div>
                <div className="title">Graphic Designer and Webmaster</div>
                <div className="employer">
                  Indiana University - Eskenazi School of Art, Architecture +
                  Design
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
