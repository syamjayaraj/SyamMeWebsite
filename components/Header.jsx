import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(props) {
  let { clientWindowHeight } = props;
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    console.log(backgroundTransparacy);
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <header
      id="masthead"
      className="site-header"
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
      }}
    >
      <nav id="primary-navigation" className="site-navigation">
        <div className="container">
          <div className="navbar-header page-scroll">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-target="#portfolio-perfect-collapse"
              aria-expanded="false"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            {/* <a href="#hero" className="site-logo"><img src="assets/img/logo.png" alt="logo" /></a> */}
          </div>

          <div className="main-menu" id="portfolio-perfect-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="page-scroll">
                <AnchorLink href="#hero">Home</AnchorLink>
              </li>
              <li className="page-scroll">
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li className="page-scroll">
                <AnchorLink href="#service">Service</AnchorLink>
              </li>
              <li className="page-scroll">
                <AnchorLink href="#portfolio">Portfolio</AnchorLink>
              </li>
              <li className="page-scroll">
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
