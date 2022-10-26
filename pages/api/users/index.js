import usersApiClient from "../../../src/lib/users/clients/usersApiRestClient";


const handler = async (req, res) => {
  const response = await usersApiClient.call(req);

  res.status(response.status).json(response.data);
}

export default handler;

