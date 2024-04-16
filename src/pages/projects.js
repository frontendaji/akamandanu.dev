import Projects from "@/components/section/Projects";
import Layout from "../components/layout/Layout";
import Head from 'next/head';

export default function ProjectPages() {
    return(
        <Layout>
            <Head>
                <title>Ajisaka kamandanu | Projects</title>
                <meta name="description" content="Explore my portfolio of projects, including frontend development, web design, and other creative works. Get inspired by my past projects and see how I can bring your ideas to life." />
                <meta name="keywords" content="Ajisaka Kamandanu Projects" />
                <meta name="author" content="Ajisaka Kamandanu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Projects/>
        </Layout>
    )
}
