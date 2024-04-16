import styles from "@/styles/Home.module.css";
import Layout from "../components/layout/Layout";
import Overview from "@/components/section/Overview";
import Head from 'next/head';


export default function Home() {
  return(
    <Layout>
      <Head>
        <title>Ajisaka kamandanu | A Frontend Developer From Indonesia</title>
        <meta name="description" content="Hello! I'm Ajisaka kamandanu, a frontend developer from Indonesia. Welcome to my homepage." />
        <meta name="keywords" content="Ajisaka Kamandanu" />
        <meta name="author" content="Ajisaka Kamandanu" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Overview/>
    </Layout>
  )
}