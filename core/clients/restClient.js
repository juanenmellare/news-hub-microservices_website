import axios from "axios";
import cookie from "cookie";
import {btoa} from "next/dist/compiled/@edge-runtime/primitives/encoding";


class RestClient {
    constructor(name, baseUrl, authUsername, authPassword) {
        this.baseUrl = baseUrl;
        this.handlerPath = `/api/${name}`;
        this.authUsername = authUsername;
        this.authPassword = authPassword;
    }

    call(request) {
        const path = request.url.replace(this.handlerPath, '');
        const url = new URL(`${this.baseUrl}${path}`);

        const authorizationHeaderValues = [];

        const hasAuth = !!this.authUsername && !!this.authPassword;
        if (hasAuth) {
            const basicAuthCredentialsEncoded = btoa(`${this.authUsername}:${this.authPassword}`);
            authorizationHeaderValues.push(`Basic ${basicAuthCredentialsEncoded}`);
        }

        const { token } = cookie.parse(request.headers.cookie || '');
        if (token) {
            authorizationHeaderValues.push(token);
        }

        const config = { url: url.toString(), method: request.method, data: request.body?.data || null,
            headers: { Authorization: authorizationHeaderValues.join(', ') }
        };

        return axios(config);
    }
}

export default RestClient;
