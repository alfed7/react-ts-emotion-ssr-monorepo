import { createHttpServer } from "./server";

const PORT = process.env.PORT || 3000;
console.log(`Trying to start at http://localhost:${PORT}/`);

const app = createHttpServer();

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Listening on:`);
  console.log(`  http://localhost:${PORT}/`);
  /* eslint-enable no-console */
});
