import Head from "next/head";
import CardMembers from "../components/CardMembers";
import CircleMembers from "../components/CircleMembers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MetaTag from "../components/MetaTag";
import Villages from "../components/Villages";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import { fetchData } from "../utils/utils";

const HeadTag = () => (
    <Head>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <MetaTag />
    </Head>
);

export default function Home({ data }) {
    const { villages, leaders, allMembers } = data;

    return (
        <>
            <HeadTag />
            <Header />
            <div className="container">
                <Villages villages={villages} />
                <CircleMembers members={leaders} memberType="LEADERS" />
                <CardMembers members={allMembers} />
            </div>
            <Footer />
        </>
    );
}

export async function getStaticProps(context) {
    try {
        const villages = await fetchData(API_ENDPOINT.VILLAGES);
        const leaders = await fetchData(API_ENDPOINT.LEADERS);
        const allMembers = await fetchData(API_ENDPOINT.MEMBERS);

        return {
            props: {
                data: { villages, leaders, allMembers },
            },
        };
    } catch (error) {
        return { props: { error: true } };
    }
}
