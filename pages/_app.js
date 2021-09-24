import "../styles/globals.css";
import "../styles/mini-framework.css";
import Router from "next/router";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import LoaderPage from "../components/LoaderPage";

const useRouterLoading = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => setLoading(true);
        const end = () => setLoading(false);
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);
    return loading;
};

function MyApp({ Component, pageProps }) {
    const loading = useRouterLoading();
    return (
        <>
            <div className={loading ? "filterBlur" : ""}>
                <Component {...pageProps} />
            </div>
            {loading && <LoaderPage />}
        </>
    );
}

export default MyApp;
