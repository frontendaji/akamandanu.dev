import Expertise from "@/components/section/Expertise";
import Layout from "../components/layout/Layout";
import Head from 'next/head';

export default function ExpertisePage() {
    return(
        <Layout>
            <Head>
                <title>Ajisaka kamandanu | Expertise</title>
                <meta name="description" content="Explore my expertise in frontend development and discover the skills and technologies I specialize in. Learn more about my experience and how I can help you with your projects." />
                <meta name="keywords" content="Ajisaka Kamandanu Expertise" />
                <meta name="author" content="Ajisaka Kamandanu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Expertise/>
        </Layout>
    )
}