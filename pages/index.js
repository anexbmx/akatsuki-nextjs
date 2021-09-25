import Head from "next/head";
import CardMembers from "../components/CardMembers";
import CircleMembers from "../components/CircleMembers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Villages from "../components/Villages";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import { fetchData } from "../utils/utils";

const HeadTag = () => (
    <Head>
        <title>Akatsuki</title>
        <meta
            name="description"
            content="Akatsuki is a criminal organization in the Naruto manga. This group was made up when it first appeared in the manga of nine deserting ninjas, from different countries scattered around the ninja world. It was founded by Yahiko, however, according to Itachi, the real founder of Akatsuki is Obito Uchiwa"
        />
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
        // const unofficialMembers = await fetchData(API_ENDPOINT.UNOFFICIAL);
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
