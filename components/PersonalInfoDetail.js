import styles from "../styles/PersonalInfoDetail.module.css";
import ClansIcon from "../svgs/ClansIcon";
import villagesIcon from "../svgs/villagesIcon";
import Chips from "./Chips";
import CircleAvatar from "./CircleAvatar";
import FAB from "./FAB";
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
    return Object.keys(data).map((key) => {
        const [title, hash] = data[key].split("#");
        return (
            <p key={key}>
                ({key}) {title} <b>#{hash}</b>
            </p>
        );
    });
};
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

    const VillageIcon = villagesIcon[village];
    const ClanIcon = ClansIcon[clan];
    return (
        <div className={styles.container}>
            <Background />
            <FAB bgColor="primary" shape="circle" top={-26} left={21}>
                <VillageIcon anti size={45} color="#fff" />
            </FAB>
            <FAB shape="rect" top={-20} left={101}>
                <ClanIcon size={24} />
            </FAB>
            <ul className={styles.listInfo}>
                <li className={styles.listInfo__Item}>
                    <p className={styles.listInfo__paragraphe}>{summary}</p>
                </li>
                <li className={styles.listInfo__Item}>
                    <h3 className={`${styles.listInfo__title} typo-body`}>
                        Status
                    </h3>
                    <p className={styles.listInfo__paragraphe}>{status}</p>
                </li>

                <li className={styles.listInfo__Item}>
                    <h3 className={`${styles.listInfo__title} typo-body`}>
                        First Appear
                    </h3>
                    <FirstAppear data={firstAppear} />
                </li>

                {occupations.length > 0 && (
                    <li className={styles.listInfo__Item}>
                        <h3 className={`${styles.listInfo__title} typo-body`}>
                            Occupations
                        </h3>
                        {occupations.map((item, index) => (
                            <p
                                key={index}
                                className={styles.listInfo__paragraphe}
                            >
                                {item}
                            </p>
                        ))}
                    </li>
                )}
                {classifications.length > 0 && (
                    <li className={styles.listInfo__Item}>
                        <h3 className={`${styles.listInfo__title} typo-body`}>
                            Classifications
                        </h3>
                        {classifications.map((item, index) => (
                            <p
                                key={index}
                                className={styles.listInfo__paragraphe}
                            >
                                {item}
                            </p>
                        ))}
                    </li>
                )}

                <li className={styles.listInfo__Item}>
                    <h3 className={`${styles.listInfo__title} typo-body`}>
                        Affiliations
                    </h3>
                    <Chips
                        items={affiliations.map((title) => ({
                            title,
                            Icon: villagesIcon[title],
                        }))}
                    />
                </li>
                {partners.length > 0 && <li className={styles.listInfo__Item}>
                    <h3 className={`${styles.listInfo__title} typo-body`}>
                        Partners
                    </h3>
                    <div className="d-flex flex-wrap">
                        {partners.map(({ name, pictureName, color }, index) => (
                            <CircleAvatar
                                key={index}
                                name={name}
                                avatar={pictureName}
                                background={color}
                                size={60}
                            />
                        ))}
                    </div>
                </li>}
                {genkais.length > 0 && (
                    <li className={styles.listInfo__Item}>
                        <h3 className={`${styles.listInfo__title} typo-body`}>
                            Genkei / Kekkei
                        </h3>
                        <ListImages folder="genkais" items={genkais} />
                    </li>
                )}
                {natures.length > 0 && (
                    <li className={styles.listInfo__Item}>
                        <h3 className={`${styles.listInfo__title} typo-body`}>
                            Nature
                        </h3>
                        <ListImages folder="natures" items={natures} />
                    </li>
                )}
            </ul>
        </div>
    );
}
