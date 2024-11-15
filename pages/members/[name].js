import Head from "next/head";
import Header from "../../components/Header";
import MetaTag from "../../components/MetaTag";

import API_ENDPOINT from "../../utils/API_ENDPOINT";
import { fetchData, slug } from "../../utils/utils";
import MemberNotFound from '../../components/MemberNotFound';
import MemberInfo from '../../components/MemberInfo';
import MemberDetails from '../../components/MemberDetails';

const HeadTag = ({ title, description, image }) => (
    <Head>
        <title>{title} | Akatsuki</title>
        <MetaTag
            title={`${title} | Akatsuki`}
            description={description}
            image={image}
            imageAlt={title}
            url={`https://akatsuki.vercel.app/members/${slug(title, "-")}`}
        />
    </Head>
);

function Member({ data }) {
    if (!data) return <MemberNotFound />;
    const { name, summary, pictureName, color: background } = data;
    return (
        <>
            <HeadTag
                title={name}
                description={summary}
                image={`img/members/${pictureName}_avatar.png`}
            />
            <Header title={name} />
            <div
                style={{ background }}
                className="member-page-background"
            ></div>
            <div className="container p-relative">
                <MemberInfo data={data} />
                <MemberDetails data={data} />
            </div>
        </>
    );
}

// This gets called on every request
export async function getServerSideProps({ query }) {
    try {
        const data = await fetchData(API_ENDPOINT.MEMBER(query.name));
        return { props: { data } };
    } catch ({ message }) {
        return { props: { error: message } };
    }
}

export default Member;
