
import cookie from "cookie";
import usersApiClient from "../../../src/lib/users/clients/usersApiRestClient";


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
            sameSite: "strict",
            path: "/",
        })
    );

    res.status(status).json();
}

export default handler;

