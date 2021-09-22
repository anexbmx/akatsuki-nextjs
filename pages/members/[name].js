import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import PersonalInfo from "../../components/PersonalInfo";
import useFetch from "../../hooks/useFetch";
import API_ENDPOINT from "../../utils/API_ENDPOINT";

const HeadTag = () => (
    <Head>
        <title>Akatsuki - Name</title>
        <meta name="description" content="Generated by create next app" />
    </Head>
);

export default function Member() {
    const router = useRouter();
    const { name, hex: backgroundColor } = router.query;
    const { data, status } = useFetch(API_ENDPOINT.MEMBER(name));

    console.log(data)
    return (
        <>
            <HeadTag />
            <Header />
            <div
                style={{ backgroundColor }}
                className="member-page-background"
            ></div>
            <div className="container p-relative">
                {status === "fetched" ? (
                    <PersonalInfo data={data} />
                ) : (
                    <Loader />
                )}
            </div>
        </>
    );
}
