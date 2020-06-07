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
            I am a software engineer and Internet entrepreneur who lives in
            Parambath, Kozhikode with my family.
          </p>
          <div style={{ display: more ? "block" : "none" }}>
            <p className="mt-4">
              I completed my Btech graduation from&nbsp;
              <a href="http://awhengg.org">AWH Engineering College</a>,
              Kuttikkattoor. Worked for a software service company for a few
              months. Build a strong base in Laravel, PHP, and familiar with the
              operation of a company.
            </p>

            <p className="mt-4">
              <a href="https://www.techomoro.com">Techomoro</a> a
              technology/programming blog was started on May 1st, 2018 to help
              beginners in the programming industry.
            </p>

            <p className="mt-4">
              In May 2018, I co-founded&nbsp;
              <a href="https://redmonark.com">Redmonark</a> with&nbsp;
              <a href="https://twitter.com/blizzerand">Manjunath</a>. He had a
              great knowledge of content marketing and blogging and his idea was
              to build a content sharing platform like&nbsp;
              <a href="https://medium.com">Medium</a>.
            </p>
            <p className="mt-4">
              I learned the latest programming technologies React, Express, and
              MongoDB to code the product. So from PHP, I completely migrated to
              the JavaScript environment.
            </p>
            <p className="mt-4">
              After building a basic model, we analyzed the opportunity of blog
              builders and polished the product to the most simplistic blog
              builder. That was the beginning of&nbsp;
              <a href="https://storylens.io">Storylens.io</a>.
            </p>
            <p className="mt-4">
              On 22nd January 2020,&nbsp;
              <a href="https://redmonark.com">Redmonark</a> released the first
              product &nbsp;<a href="https://storylens.io">Storylens.io</a>{" "}
              included with a robust drag and drop website builder.
            </p>
            <p className="mt-4">
              In May 2020, I started&nbsp;
              <a href="https://floyet.com">Floyet</a>, a digital branding
              company that supports small businesses and entrepreneur minded
              individuals to achieve heights.
            </p>
          </div>
          <div style={{ display: more ? "none" : "block" }}>
            <a class="more" onClick={() => setMore(true)}>
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
          Made with Love in God's own country | Powered by&nbsp;
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
