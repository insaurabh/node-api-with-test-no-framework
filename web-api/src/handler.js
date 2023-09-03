// This file responsible for doing communication
// between routes and server
import { parse } from "node:url";
import { DEFAULT_HEADER } from "./util/index.js";

const allRoutes = {
  "/heroes:get": async (req, res) => {
    throw new Error("Not implemented");

    res.write("HEROES GET");
    res.end();
  },
  default: (req, res) => {
    res.writeHead(404, DEFAULT_HEADER);
    res.write("Hello, You are on wrong route");
    res.end();
  },
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const handler = (req, res) => {
  const { url, method } = req;
  const { pathname } = parse(url, false);
  const key = `${pathname}:${method.toLowerCase()}`;

  console.log({ pathname, url, method, key });

  const requestedRoute = allRoutes[key] || allRoutes.default;
  // res.end("Hello world!");
  return Promise.resolve(requestedRoute(req, res)).catch(handleError(res));
};

const handleError = (res) => {
  return (error) => {
    console.error(`Something went wrong ${error.stack}`);
    res.writeHead(500);
    res.write(
      JSON.stringify({
        error: error.message,
      })
    );

    return res.end();
  };
};
export default handler;
