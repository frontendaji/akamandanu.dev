import Styles from "../navigation/navigation.module.css";
import Image from "next/image";
import Link from 'next/link'
import React, { useState } from 'react';

export default function Navigation() {
    const [isNavMobileActive, setIsNavMobileActive] = useState(false);

    const toggleNavMobile = () => {
        setIsNavMobileActive(!isNavMobileActive);
    };
    
    return(
        <nav className={Styles.nav}>
            <div className={Styles.logo}>
                <Image
                    src="/images/logo.png"
                    width={500}
                    height={500}
                    alt="logo"
                />
                <h1>A Kamandanu</h1>
            </div>
            <ul>
                <li><Link href="/">Overview</Link></li>
                <li><Link href="/expertise">Expertise</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
            </ul>
            <div className={Styles.menu} onClick={toggleNavMobile}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className={`${Styles.navMobile} ${isNavMobileActive ? Styles.navMobileActive : ''}`}>
                <ul>
                    <li><Link href="/">Overview</Link></li>
                    <li><Link href="/expertise">Expertise</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>
                </ul>
            </div>
        </nav>
    )
}