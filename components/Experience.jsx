export default function Experience() {
  return (
    <section className="site-section section-counters text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <p className="counter start" data-to="10" data-speed="2000">
              3
            </p>
            <h4>Years Experience</h4>
          </div>
          <div className="col-sm-4 col-xs-12">
            <p className="counter start" data-to="120" data-speed="2000">
              11
            </p>
            <h4>Projects Worked With</h4>
          </div>
          <div className="col-sm-4 col-xs-12">
            <p
              id="infinity"
              className="counter"
              data-from="0"
              data-to="1"
              data-speed="1000"
            >
              150+
            </p>
            <h4>Tech Contents Posted</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
