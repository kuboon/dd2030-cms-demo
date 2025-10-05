import Kv from "lume/cms/storage/kv.ts";
console.log("Initializing kvStorage...", Deno.env.get("DENO_KV_DEFAULT_PATH"));
const kvStorage = await Kv.create();

export default kvStorage;
