import styles from "../styles/PersonalInfoDetail.module.css";
import ClansIcon from "../svgs/ClansIcon";
import { LinkIcon } from "../svgs/icons";
import villagesIcon from "../svgs/villagesIcon-v2";
import Chips from "./Chips";
import CircleAvatar from "./CircleAvatar";
import FAB from "./FAB";
import List from "./List";
import ListImages from "./ListImages";

const Background = () => (
    <svg className={styles.backgroundSvg}>
        <defs>
            <mask id="fab-right-cutout">
                <rect height="100%" width="100%" fill="#fff"></rect>

                <path
                    className={styles.backgroundSvg__cutout1}
                    d="M60 0C60 3.93966 59.224 7.84074 57.7164 11.4805C56.2087 15.1203 53.999 18.4274 51.2132 21.2132C48.4274 23.999 45.1203 26.2087 41.4805 27.7164C37.8407 29.224 33.9397 30 30 30C26.0603 30 22.1593 29.224 18.5195 27.7164C14.8797 26.2087 11.5726 23.999 8.7868 21.2132C6.00104 18.4274 3.79125 15.1203 2.28361 11.4805C0.775972 7.84073 -3.44416e-07 3.93965 0 -2.62268e-06L30 0L60 0Z"
                    fill="#000"
                />

                <path
                    className={styles.backgroundSvg__cutout2}
                    d="M62.7158 0.358154L31.3579 31.7161L0 0.358154H62.7158Z"
                    fill="#000"
                />

                {/* <path className={styles.backgroundSvg__cutout2}  d="M28 28L0 0H56L28 28Z" fill="#000"  /> */}
            </mask>
        </defs>
        <rect
            fill="#fff"
            height="100%"
            width="100%"
            mask="url(#fab-right-cutout)"
        ></rect>
    </svg>
);

const FirstAppear = ({ data }) => {
    const list = Object.keys(data).map((key) => {
        let [title, hash] = data[key].split("#");
        let img, secondaryText;
        if (title.includes("Chapter")) {
            title = "Manga";
            img = "manga_logo.svg";
            secondaryText = `Chapter #${hash}`;
        } else if (title.includes("Shipp")) {
            title = "Naruto Shippūden";
            img = "naruto_shippuden_logo.svg";
            secondaryText = `Episode #${hash}`;
        } else {
            title = "Naruto";
            img = "naruto_logo.svg";
            secondaryText = `Episode #${hash}`;
        }

        return { title, secondaryText, img };
    });
    return <List list={list} imgSize={70} direction="column" />;
};

const Affiliations = ({ affiliations }) => (
    <Chips
        items={affiliations.map((title) => ({
            title,
            Icon: villagesIcon[title],
        }))}
    />
);

const Links = ({ items, baseUrl }) => (
    <ul className="d-flex flex-wrap list-style-none p-0">
        {items.map((item, index) => (
            <li className="m-8 typo-button" key={index}>
                <a href={`${baseUrl}${item}`}>
                    <LinkIcon className="mr-8" size={12} />
                    {item}
                </a>
            </li>
        ))}
    </ul>
);

const LiElement = ({ title, value, children }) => (
    <li className={styles.listInfo__Item}>
        <h3 className={`${styles.listInfo__title} typo-body`}>{title}</h3>

        <div className={styles.listInfo__content}>
            {value ? <p>{value}</p> : children}  
        </div>
    </li>
);

export default function PersonalInfoDetail({ data }) {
    const {
        status,
        summary,
        firstAppear,
        occupations,
        classifications,
        affiliations,
        partners,
        genkais,
        natures,
        village,
        clan,
    } = data;

    const VillageIcon = villagesIcon[`Anti${village}`];
    const ClanIcon = ClansIcon[clan];
    return (
        <div className={styles.container}>
            <Background />
            <FAB bgColor="primary" shape="circle" top={-26} left={21}>
                <VillageIcon  size={45} color="#fff" />
            </FAB>
            <FAB shape="rect" top={-20} left={101}>
                <ClanIcon size={24} />
            </FAB>

            <p className={styles.summary}>{summary}</p>

            <ul className={styles.listInfo}>
                <LiElement title="Status" value={status} />
                <LiElement title="First Appear">
                    <FirstAppear data={firstAppear} />
                </LiElement>
                {occupations.length > 0 && (
                    <LiElement title="Occupations">
                        {occupations.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </LiElement>
                )}
                {classifications.length > 0 && (
                    <LiElement title="Classifications">
                        <Links
                            baseUrl="https://naruto.fandom.com/wiki/"
                            items={classifications}
                        />
                    </LiElement>
                )}
            </ul>
            <ul className={styles.listInfo}>
                <LiElement title="Affiliations">
                    <Affiliations affiliations={affiliations} />
                </LiElement>
                {partners.length > 0 && (
                    <LiElement title="Partners">
                        <div className="d-flex flex-wrap">
                            {partners.map(
                                ({ name, pictureName, color }, index) => (
                                    <CircleAvatar
                                        key={index}
                                        name={name}
                                        avatar={pictureName}
                                        background={color}
                                        hideName
                                        size={60}
                                    />
                                )
                            )}
                        </div>
                    </LiElement>
                )}

                {genkais.length > 0 && (
                    <LiElement title="Genkei / Kekkei">
                        <ListImages folder="genkais" items={genkais} />
                    </LiElement>
                )}
                {natures.length > 0 && (
                    <LiElement title="Natures">
                        <ListImages folder="natures" items={natures} />
                    </LiElement>
                )}
            </ul>
        </div>
    );
}
