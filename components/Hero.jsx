import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Syamlal CM</h1>
            <div className="page-scroll">
              <p className="job-title">
                Founder & CEO at Floyet Technologies <br />• Full stack
                developer • Blogger • Writer
              </p>

              <AnchorLink className="btn btn-fill " href="#contact">
                Contact
              </AnchorLink>
              <div className="clearfix visible-xxs"></div>

              <AnchorLink className="btn btn-border" href="#portfolio">
                Explore more
              </AnchorLink>
            </div>
          </div>

          <div className="col-md-6 text-right">
            <img src="assets/img/alex-vidal.png" alt="alex-vidal" />
          </div>
        </div>
      </div>
    </div>
  );
}
