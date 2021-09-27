import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <link
                        href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap&text=Akatsuki%20Unofficial%20Members"
                        rel="stylesheet"
                    /> */}

                    <meta name="theme-color" content="#973942" />
                    <meta name="google" content="notranslate" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="default"
                    />
                    <link rel="manifest" href="manifest.json" />
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="img/icons/apple-icon-114x114.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="120x120"
                        href="img/icons/apple-icon-120x120.png"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="152x152"
                        href="img/icons/apple-icon-152x152.png"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="img/icons/apple-icon-180x180.png"
                    />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <script
                        async
                        src="https://unpkg.com/pwacompat"
                        crossOrigin="anonymous"
                    ></script>
                </Head>
                <body>
             
                        <Main />
                 
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
