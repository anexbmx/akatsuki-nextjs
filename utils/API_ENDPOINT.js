const BASE_URL = "https://akatsuki-serverless-v2.vercel.app/api/";
export default class API_ENDPOINT {
    static MEMBERS = `${BASE_URL}members`;
    static LEADERS = `${BASE_URL}members?memberType=Leader`;
    static UNOFFICIAL = `${BASE_URL}members?memberType=Unofficial`;
    static MEMBER = `${BASE_URL}members?name=`;
    static VILLAGES = `${BASE_URL}villages`;
}
