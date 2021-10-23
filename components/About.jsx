export default function About() {
  return (
    <section id="about" className="site-section section-about text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>About</h2>
            <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
            <p className="about">
              Hello! I'm Syamlal the founder and CEO of{" "}
              <a href="https://floyet.com" target="_blank">
                Floyet Technologies
              </a>
              . I'm also a full-stack developer specialized in the MERN(MongoDB,
              Express, React, Node). I also write technical content on{" "}
              <a href="https://techomoro.com" target="_blank">
                Techomoro.com
              </a>
              ,{" "}
              <a href="https://dev.to/syamjayaraj" target="_blank">
                Dev.to
              </a>
              ,{" "}
              <a
                href="https://www.toolbox.com/user/about/SyamlalCM/"
                target="_blank"
              >
                Toolbox.com
              </a>
              ,{" "}
              <a href="https://medium.com/@syamjayaraj" target="_blank">
                Medium
              </a>
              , and{" "}
              <a
                href="https://www.quora.com/profile/Syamlal-CM"
                target="_blank"
              >
                Quora
              </a>
              . If you have a project that you want to get started on or think
              you need my help with something, then get in touch.
            </p>
            <a
              href="http://www.grad.illinois.edu/sites/default/files/pdfs/cvsamples.pdf"
              className="btn btn-fill"
              target="_blank"
              download
            >
              Download my cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
