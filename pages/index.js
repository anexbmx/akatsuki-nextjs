import Head from "next/head";
import MemberCard from "../components/MemberCard";
import MembersCircleList from "../components/MembersCircleList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MetaTag from "../components/MetaTag";
import Villages from "../components/Villages";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import { fetchData } from "../utils/utils";

const HeadTag = () => (
    <Head>

        <title>Akatsuki</title>
        <MetaTag />
    </Head>
);

export default function Home({ data  }) {
    const { villages, leaders , allMembers } = data;

    return (
        <>
            <HeadTag />
            <Header />
            <div className="container">
                <Villages villages={villages} />
                <MembersCircleList members={leaders} memberType="LEADERS" />
                <MemberCard members={allMembers} />
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
                revalidate: 60 * 60 * 24,
            },
        };
    } catch (error) {
        return { props: { error: true } };
    }
}
