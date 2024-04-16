import Styles from "../section/expertise.module.css";

export default function Expertise() {
    return(
        <section className={Styles.expertise}>
            <h1>Expertise</h1>
            <h2>Programming Language</h2>
                <div className={Styles.programing}>
                    <div className={Styles.html}>
                        <p>HTML</p>
                        <span></span>
                        <p>85%</p>
                    </div>
                    <div className={Styles.css}>
                        <p>CSS</p>
                        <span></span>
                        <p>75%</p>
                    </div>
                    <div className={Styles.javascript}>
                        <p>Javascript</p>
                        <span></span>
                        <p>50%</p>
                    </div>
                </div>
            <h2>JavaScript library</h2>
                <div className={Styles.library}>
                    <p>React JS</p>
                    <span></span>
                    <p>35%</p>
                </div>
            <h2>CSS Library</h2>
                <div className={Styles.cssLibrary}>
                    <div className={Styles.bootstrap}>
                        <p>Bootsrap</p>
                            <span></span>
                        <p>40%</p>
                    </div>
                    <div className={Styles.taillwind}>
                        <p>Taillwind</p>
                            <span></span>
                        <p>55%</p>
                    </div>
                </div>
            <h2>Framework</h2>
                <div className={Styles.framework}>
                    <div className={Styles.next}>
                        <p>Next JS</p>
                            <span></span>
                        <p>45%</p>
                    </div>
                    <div className={Styles.vue}>
                        <p>Vue JS</p>
                            <span></span>
                        <p>50%</p>
                    </div>
                </div>
            <h2>English proficiency</h2>
                <div className={Styles.english}>
                    <div className={Styles.speaking}>
                        <p>Speaking</p>
                            <span></span>
                        <p>40%</p>
                    </div>
                    <div className={Styles.reading}>
                        <p>Reading</p>
                            <span></span>
                        <p>65%</p>
                    </div>
                </div>
            <h2>Soft Skills</h2>
                <div className={Styles.soft}>
                    <ul>
                        <li>Effective Communication</li>
                        <li>Adaptability</li>
                        <li>Teamwork</li>
                        <li>Problem Solving</li>
                        <li>Creativity</li>
                        <li>Self-Learning Skills</li>
                    </ul>
                </div>
            <h2>Used Applications</h2>
                <div className={Styles.applications}>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>Figma</li>
                    </ul>
                </div>
        </section>
    )
}