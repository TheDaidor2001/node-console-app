import { yarg } from "./config/plugins/yargs.plugin";
import { serverApp } from "./presentation/server-app";

(async () => {
  await main();
})();

async function main() {
  console.log(yarg);
  const { b: base, l: limit, s: showTable, n: fileName, d: destination } = yarg;

  serverApp.run({ base, limit, showTable, fileName, destination });
}
