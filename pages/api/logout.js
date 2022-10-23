import cookie from "cookie";


const handler = async (req, res) => {
    res.setHeader("Set-Cookie", cookie.serialize("token", "", {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
            sameSite: "strict",
            path: "/",
        })
    );

    res.status(200).json();
}

export default handler;

