import Styles from '../section/overview.module.css';

export default function Overview() {
    return(
        <section className={Styles.overview}>
            <h1>Hi there, I&apos;m Aji ! 👋</h1>
            <h2>About Me</h2>
            <ul>
                <li>👀 I’m passionate about Front End Development.</li>
                <li>🌱 I’m currently honing my skills in HTML, CSS, JavaScript, and React.</li>
                <li>💞️ I’m eager to collaborate on exciting Front End projects.</li>
                <li>📫 Reach me at frontendaji@gmail.com.</li>
            </ul>
            <h2>Technologies I Work With</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
            <h2>Top Languages</h2>
            <div className={Styles.CardLanguages}>
                <h3>Most Used Language</h3>
                <div className={Styles.bar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={Styles.languages}>
                    <ul>
                        <li>HTML (42%)</li>
                        <li>CSS (48%)</li>
                    </ul>
                    <div className={Styles.javascript}>
                        <ul>
                            <li>Javascript (10%)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2>Lates Project</h2>
            <div className={Styles.project}>
                <div className={Styles.cardProject}>

                </div>
            </div>
            <h2>Let&apos;s Connect</h2>
            <ul>
                <li>Instagram :</li>
                <li>Linkedin :</li>
                <li>Github :</li>
            </ul>
        </section>
    )
}