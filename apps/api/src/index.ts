import { createServer } from "./config/server";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  console.log(`Smobi API is now running on ${port}!`);
});
