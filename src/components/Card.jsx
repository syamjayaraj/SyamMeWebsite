import React, { useState } from "react";

function Card() {
  const [more, setMore] = useState(false);

  return (
    <div className="profile">
      <div class="profile-section">
        <img src="/assets/images/syamlal-image.jpg" className="profile-image" />
        <h1 class="name">Syamlal CM</h1>
        <h2 className="position">
          Founder & CEO at <a href="https://floyet.com">Floyet</a>
        </h2>
        <div className="about">
          <p className="mb-0">
            I noticed that entrepreneurs were searching for help in building a
            brand and business owners were striving to market their products.
            They have needed some digital solutions to solve these problems
            and&nbsp;
            <a href="https://floyet.com">Floyet</a> - a digital branding company
            was established by me in May 2020 to help them.
          </p>
          <div style={{ display: more ? "block" : "none" }}>
            <p className="mt-4">
              Prior to Floyet, I served for a software service company for a few
              months. After a year of planning in May 2018, co-founded&nbsp;
              <a href="https://storylens.io">Storylens</a> - a blog building
              platform.
            </p>
            <p className="mt-4">
              I'm a Btech graduate in Computer Science and Engineering
            </p>
          </div>
          <div style={{ display: more ? "none" : "block" }}>
            <a class="  small more" onClick={() => setMore(true)}>
              More
            </a>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="row">
          <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
            <div class="item email">
              <i class="fas fa-envelope"></i>
              <a href="mailto:hi@syam.me">hi@syam.me</a>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
            <div class="item skype">
              <i class="fab fa-skype"></i>
              <a href="skype:+919496342650?call">syamjayaraj</a>
            </div>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
            <div class="item phone">
              <i class="fas fa-phone"></i>
              <a href="tel:+91-7306585662">+91-7306585662</a>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-4" />

      <div class="social-accounts-section">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a
              href="https://facebook.com/syamjayaraj"
              target="_blank"
              class="btn-sm btn-default btn-lg"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="https://twitter.com/syamjayaraj"
              target="_blank"
              class="btn-sm btn-default btn-lg"
            >
              <i class="fab fa-twitter fa-fw"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="https://www.linkedin.com/in/syamjayaraj"
              target="_blank"
              class="btn-sm btn-default btn-lg"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href="https://www.github.com/syamjayaraj"
              target="_blank"
              class="btn-sm btn-default btn-lg"
            >
              <i class="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <p>
          Made with Love in God's own country | Powered by &nbsp;
          <a href="https://floyet.com">Floyet</a>
        </p>
        <p>
          Copyright © <a href="https://syam.me">Syam.me</a> 2020
        </p>
      </div>
    </div>
  );
}

export default Card;
