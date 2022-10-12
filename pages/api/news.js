import axios from "axios";

const usersApiBaseUrl = process.env.USERS_API_BASE_URL || "https://news-hub-microservices-n-api.herokuapp.com/v1";
const usersApiUsername = process.env.USERS_API_USER || "admin";
const usersApiPassword = process.env.USERS_API_PASS || "password";

const handler = async (req, res) => {
  const path = req.url.replace('/api/news', '');
  const url = new URL(`${usersApiBaseUrl}${path}`);

  const response = await axios({
    method: req.method,
    url: url.toString(),
    auth: {
      username: usersApiUsername,
      password: usersApiPassword,
    }
  });

  res.status(response.status).json(response.data)
}

export default handler;

