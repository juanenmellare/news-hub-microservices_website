import RestClient from "../../core/clients/restClient";

const newsApiBaseUrl = process.env.NEWS_API_BASE_URL || "https://news-hub-microservices-n-api.herokuapp.com/v1";
const newsApiUsername = process.env.NEWS_API_USER || "admin";
const newsApiPassword = process.env.NEWS_API_PASS || "password";

const newsApiClient = new RestClient('news', newsApiBaseUrl, newsApiUsername, newsApiPassword);

const handler = async (req, res) => {
  const response = await newsApiClient.call(req);

  res.status(response.status).json(response.data);
}

export default handler;

