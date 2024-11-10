import Image from "next/image";
import { slug } from "../utils/utils";

export default function ListImages({ items, folder }) {
    const path = `/img/${folder}/`;


    return (
        <div className="d-flex flex-wrap">

            {items.map((item, index) => (
                <div key={index} className="m-8 tooltip" data-tooltip={item}>
                    <Image
                        height="35"
                        width="35"
                        src={`${path}${slug(item)}.svg`}
                        alt=""
                    />
                </div>
            ))}
        </div>
    );
}
