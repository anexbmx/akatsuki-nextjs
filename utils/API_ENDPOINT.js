import { slug } from "./utils";

const BASE_URL = "https://akatsuki-serverless-v2.vercel.app/api/";
export default class API_ENDPOINT {
    static MEMBERS = `${BASE_URL}members`;
    static LEADERS = `${BASE_URL}members?memberType=Leader`;
    static UNOFFICIAL = `${BASE_URL}members?memberType=Unofficial`;
    static VILLAGES = `${BASE_URL}villages`;

    static MEMBER(name) {
        if (!name) return "";
        return `${BASE_URL}members/${encodeURIComponent(slug(name, "-"))}`;
    }
}
