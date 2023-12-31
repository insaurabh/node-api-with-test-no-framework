import http from "node:http";
import handler from "./handler.js"; // why .js

const PORT = process.env.PORT || 3000;

const server = http
  .createServer(handler)
  .listen(PORT, () => console.log(`Server is running at ${PORT}`));

export { server };
