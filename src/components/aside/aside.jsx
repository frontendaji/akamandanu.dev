import Styles from "../aside/aside.module.css";
import Image from "next/image";
export default function Aside() {
    return(
        <aside className={Styles.aside}>
            <div className={Styles.avatar}>
                <div className={Styles.images}>

                </div>
            </div>
            <h1>Ajisaka Kamandanu</h1>
            <h2>a frontend developer</h2>
            <p>I&apos;m deeply passionate about frontend development. I&apos;m constantly excited about expanding my knowledge and honing my skills in this field.</p>
            <button>Collaboration</button>
            <div className={Styles.socialMedia}>
                <button>Instagram</button>
                <button>Github</button>
            </div>
            <div className={Styles.location}>
                <Image
                    src="/images/map.png"
                    alt="location"
                    width={50}
                    height={50}
                />
                <p>Purworejo, Central Java, Indonesian</p>
            </div>
        </aside>
    )
}