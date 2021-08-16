import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills() {
    return(
        <section class="site-section section-skills">
        <div class="container">
            <div class="text-center">
                <h3>My Skills</h3>
                <img src="assets/img/lines.svg" class="img-lines" alt="lines"/>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="skill">
                        <h4>Next.js</h4>
                        <div class="progress">
                            <ProgressBar class="progress-bar" completed={100} isLabelVisible={false} bgColor="#212121" height="15px" borderRadius="0"/>
                        </div>
                    </div>
                    <div class="skill">
                        <h4>React.js</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" data-transitiongoal="75"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="skill">
                        <h4>Node/Express.js</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" data-transitiongoal="82"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <h4>MongoDB</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" data-transitiongoal="66"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="skill">
                        <h4>React Native</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" data-transitiongoal="97"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <h4>Content writing</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" data-transitiongoal="45"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}