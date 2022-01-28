import axios from "axios";
import Cookies from "js-cookie";

export default async function invoke(method, url, data = {}) {
    const config = {
        headers: {
            "Content-Type": "application/json",
            SameSite: "Secure",
        },
    };
    const token = Cookies.get("access-token");
    if (token) {
        config.headers["auth-token"] = token;
    }

    const res = await axios({
        method,
        url,
        data,
        headers: config.headers,
    });

    return res;
}
