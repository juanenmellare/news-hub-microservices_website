import usersApiClient from "../../lib/users/clients/usersApiRestClient";

import cookie from "cookie";


const handler = async (req, res) => {
    req.url = '/login';
    const { status, data } = await usersApiClient.call(req);
    if (status !== 200) {
        res.status(status).json(data);
        return;
    }

    res.setHeader("Set-Cookie", cookie.serialize("token", data.token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 8,
            sameSite: "strict",
            path: "/",
        })
    );

    res.status(status).json();
}

export default handler;

