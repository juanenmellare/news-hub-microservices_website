import axios from "axios";


class RestClient {
    constructor(name, baseUrl, authUsername, authPassword) {
        this.baseUrl = baseUrl;
        this.handlerPath = `/api/${name}`;
        this.authUsername = authUsername;
        this.authPassword = authPassword;
    }

    call(req) {
        const path = req.url.replace(this.handlerPath, '');
        const url = new URL(`${this.baseUrl}${path}`);

        return axios({
            url: url.toString(),
            method: req.method,
            data: req.body?.data || null,
            auth: {
                username: this.authUsername,
                password: this.authPassword ,
            }
        })
    }
}

export default RestClient;
