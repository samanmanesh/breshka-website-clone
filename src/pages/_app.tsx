import Head from "next/head";
import Link from "next/link";
import { AppProps } from "next/app";
import "styles/index.css";
import { useRouter } from "next/router";
import AppLayout from "components/layout/AppLayout";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>NextJS TW</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        {/* ../../public/fonts/Apercu-Font/Apercu-Pro-Regular.otf */}
        {/* <link
            rel="preload"
            href="/public/fonts/Apercu-Font/Apercu-Pro-Regular.otf"
            as="font"
            crossOrigin=""
          /> */}
      </Head>
      {/* if at / */}
      {router.pathname === "/" ? (
        <Component {...pageProps} />
      ) : (
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      )}
    </>
  );
}

export default MyApp;
