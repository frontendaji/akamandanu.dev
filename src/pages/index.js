import styles from "@/styles/Home.module.css";
import Layout from "../components/layout/Layout";
import Overview from "@/components/section/Overview";
import Head from 'next/head';


export default function Home() {
  return(
    <Layout>
      <Head>
        <title>Ajisaka kamandanu | A Frontend Developer From Indonesia</title>
        <meta name="description" content="Hello! I'm Ajisaka kamandanu, a frontend developer from Indonesia. Welcome to my homepage. I hope you enjoy this website that I have created." />
        <meta name="keywords" content="Ajisaka Kamandanu" />
        <meta name="author" content="Ajisaka Kamandanu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Ajisaka Kamandanu",
              "jobTitle": "Frontend Developer",
              "url": "https://www.akamandanu.com/",
              "sameAs": [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
                "https://github.com/"
              ]
            }
          `
        }} />
      </Head>
      <Overview/>
    </Layout>
  )
}