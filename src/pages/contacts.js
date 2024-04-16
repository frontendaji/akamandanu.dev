import Contacts from "@/components/section/Contacts";
import Layout from "../components/layout/Layout";
import Head from 'next/head';

export default function ContactsPages() {
    return(
        <Layout>
            <Head>
                <title>Ajisaka kamandanu | Contact</title>
                <meta name="description" content="Get in touch with me to discuss your projects, collaborations, or any inquiries you may have. Fill out the contact form or reach out to me through email or social media. I look forward to hearing from you!" />
                <meta name="keywords" content="Contacts Ajisaka Kamandanu" />
                <meta name="author" content="Ajisaka Kamandanu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Contacts/>
        </Layout>
    )
}
