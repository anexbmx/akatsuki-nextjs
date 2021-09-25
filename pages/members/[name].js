import Head from "next/head";
import Header from "../../components/Header";
import NotFoundMember from "../../components/NotFoundMember";
import PersonalInfo from "../../components/PersonalInfo";
import PersonalInfoDetail from "../../components/PersonalInfoDetail";
import API_ENDPOINT from "../../utils/API_ENDPOINT";
import { fetchData } from "../../utils/utils";

const HeadTag = ({ title, description }) => (
    <Head>
        <title>{title} - Akatsuki</title>
        <meta name="description" content={description} />
    </Head>
);

function Member({ data }) {
    if (!data) return <NotFoundMember />;
    const { name, summary, color: background } = data;
    return (
        <>
            <HeadTag title={name} description={summary} />
            <Header title={name} />
            <div
                style={{ background }}
                className="member-page-background"
            ></div>
            <div className="container p-relative">
                <PersonalInfo data={data} />
                <PersonalInfoDetail data={data} />
            </div>
        </>
    );
}

// This gets called on every request
export async function getServerSideProps({ query }) {
    try {
        const data = await fetchData(API_ENDPOINT.MEMBER(query.name));
        return { props: { data } };

    } catch ({message}) {
        return { props: { error: message } };
    }
}

export default Member;
