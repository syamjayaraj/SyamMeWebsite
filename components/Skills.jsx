import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
  return (
    <section className="site-section section-skills">
      <div className="container">
        <div className="text-center">
          <h3>My Skills</h3>
          <img src="assets/img/lines.svg" className="img-lines" alt="lines" />
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="skill">
              <h4>Next.js</h4>
              <div className="progress">
                <ProgressBar
                  completed={90}
                  isLabelVisible={false}
                  bgColor="#212121"
                  baseBgColor="#dfdfdf"
                  height="15px"
                  borderRadius="0"
                  width="100%"
                />
              </div>
            </div>
            <div className="skill">
              <h4>React.js</h4>
              <div className="progress">
                <ProgressBar
                  completed={95}
                  isLabelVisible={false}
                  bgColor="#212121"
                  baseBgColor="#dfdfdf"
                  height="15px"
                  borderRadius="0"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <h4>Express.js</h4>
              <div className="progress">
                <ProgressBar
                  completed={80}
                  isLabelVisible={false}
                  bgColor="#212121"
                  baseBgColor="#dfdfdf"
                  height="15px"
                  borderRadius="0"
                  width="100%"
                />
              </div>
            </div>
            <div className="skill">
              <h4>MongoDB</h4>
              <div className="progress">
                <ProgressBar
                  completed={90}
                  isLabelVisible={false}
                  bgColor="#212121"
                  baseBgColor="#dfdfdf"
                  height="15px"
                  borderRadius="0"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="skill">
              <h4>React Native</h4>
              <div className="progress">
                <ProgressBar
                  completed={70}
                  isLabelVisible={false}
                  bgColor="#212121"
                  baseBgColor="#dfdfdf"
                  height="15px"
                  borderRadius="0"
                  width="100%"
                />
              </div>
            </div>
            <div className="skill">
              <h4>Tech Content writing</h4>
              <div className="progress">
                <ProgressBar
                  completed={80}
                  isLabelVisible={false}
                  bgColor="#212121"
                  baseBgColor="#dfdfdf"
                  height="15px"
                  borderRadius="0"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
