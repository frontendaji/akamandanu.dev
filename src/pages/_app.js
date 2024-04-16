import "@/styles/globals.css";
import React from 'react';
import Head from 'next/head';
import ProgressBar from "@/components/progress/ProgressBar";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>A Kamandanu</title>
      </Head>
      <ProgressBar/>
      <Component {...pageProps} key={router.route}/>
    </>
  );
}
