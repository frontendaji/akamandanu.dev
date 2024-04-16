import Styles from "../aside/aside.module.css";
import Image from "next/image";
import Link from 'next/link';
export default function Aside() {
    return(
        <aside className={Styles.aside}>
            <div className={Styles.avatar}>
                <div className={Styles.images}>
                    <Image
                        src="/images/Ajisaka Kamandanu.jpeg"
                        width={500}
                        height={500}
                        alt="Ajisaka Kamandanu"
                    />
                </div>
            </div>
            <h1>Ajisaka Kamandanu</h1>
            <h2>a frontend developer</h2>
            <p>I&apos;m deeply passionate about frontend development. I&apos;m constantly excited about expanding my knowledge and honing my skills in this field.</p>
            <button onClick={() => window.open('https://www.instagram.com/thisisme_aji/', '_blank')}>Collaboration</button>
            <div className={Styles.socialMedia}>
                <button onClick={() => window.open('https://www.instagram.com/thisisme_aji/', '_blank')}>Instagram</button>
                <button onClick={() => window.open('https://github.com/frontendaji/', '_blank')}>Github</button>
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