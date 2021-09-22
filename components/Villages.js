import useFetch from "../hooks/useFetch";
import API_ENDPOINT from "../utils/API_ENDPOINT";
import styles from "../styles/Villages.module.css";
import Image from "next/image";
import Loader from "./Loader";

const Village = ({ name }) => {
    const avatar = `/img/villages/${name}.svg`;
    return (
        <div className={styles.villages__item}>
            <button className={`${styles.villages__button} circle`}>
                <Image height="24" width="40" src={avatar} alt="" />
            </button>
            <h3 className={`${styles.villages__title} typo-caption`}>{name}</h3>
        </div>
    );
};

export default function Villages() {
    const { data, status } = useFetch(API_ENDPOINT.VILLAGES);

    return (
        <section>
            
            <h2 className="mb-8">Villages</h2>
            <div className={`${styles.villages} hide-scroll`}>
                {status === "fetched"
                    ? data.map(({ name, _id }) => (
                          <Village key={_id} name={name} />
                      ))
                    : <Loader />}
            </div>
        </section>
    );
}
