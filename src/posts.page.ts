import kvStorage from "../kvStorage.ts";

export default async function* () {
  for await (const { name } of kvStorage) {
    const entry = await kvStorage.get(name).readData();
    yield entry
  }
}
