import Styles from "../section/contacts.module.css";
import Form from "./Form";

export default function contacts() {

    return(
        <section className={Styles.contacts}>
            <h1>Contact</h1>
            <h2>Stay Connected</h2>
            <ul>
                <li>Instagram : thisisme_aji</li>
                <li>Github : frontendaji</li>
            </ul>
        </section>
    )
}