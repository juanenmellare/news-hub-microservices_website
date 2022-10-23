import newsApiClient from "../../../src/lib/news/clients/newsApiRestClient";


const handler = async (req, res) => {
  const response = await newsApiClient.call(req);

  res.status(response.status).json(response.data);
}

export default handler;

