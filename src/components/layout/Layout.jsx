import Aside from "../aside/aside";
import Footer from "../footer/Footer";
import Styles from "../layout/layout.module.css";
import Navigation from "../navigation/Navigation";

export default function first({ children}) {
    return(
        <div className={Styles.container}>
            <header>
                <Navigation/>
            </header>
            <main className={Styles.main}>
                <Aside/>
                { children }
            </main>
            <footer className={Styles.footer}>
                <Footer/>
            </footer>
        </div>
    )
}