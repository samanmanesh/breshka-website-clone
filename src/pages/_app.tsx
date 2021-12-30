import Head from 'next/head'
import Link from "next/link";
import { AppProps } from 'next/app'
import 'styles/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS TW</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* ../../public/fonts/Apercu-Font/Apercu-Pro-Regular.otf */}
        {/* <link
            rel="preload"
            href="/public/fonts/Apercu-Font/Apercu-Pro-Regular.otf"
            as="font"
            crossOrigin=""
          /> */}
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp