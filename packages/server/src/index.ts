import { createHttpServer } from "./server";

const PORT = 3000;

const app = createHttpServer();

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening on:`);
  console.log(`  http://localhost:${PORT}/`);
  /* eslint-enable no-console */
});
