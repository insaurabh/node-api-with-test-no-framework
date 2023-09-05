import { once } from "node:events";
import Hero from "../entities/hero.js";
import { DEFAULT_HEADER } from "../util/index.js";

const routes = ({ heroService }) => ({
  "/heroes:get": async (req, res) => {
    res.write("HEROES GET");
    res.end();
  },
  "/heroes:post": async (req, res) => {
    const data = await once(req, "data");
    const item = JSON.parse(data);
    const hero = new Hero(item);

    const id = hero.id;
    res.writeHead(201, DEFAULT_HEADER);
    // res.write("HEROES POST");
    res.write(
      JSON.stringify({
        success: "User created successfully",
        id: id,
      })
    );
    return res.end();
  },
});

export { routes };
