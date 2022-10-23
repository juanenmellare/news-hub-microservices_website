import RestClient from "../../../core/clients/restClient";

const usersApiBaseUrl = process.env.USERS_API_BASE_URL || "https://news-hub-microservices-u-api.herokuapp.com/v1";
const usersApiUsername = process.env.USERS_API_USER || "admin";
const usersApiPassword = process.env.USERS_API_PASS || "password";

const usersApiClient = new RestClient('users', usersApiBaseUrl, usersApiUsername, usersApiPassword);

export default usersApiClient;
