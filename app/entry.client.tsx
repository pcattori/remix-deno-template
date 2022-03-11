import { React } from "./deps/index.ts";
import { ReactDOM } from "./deps/client.ts";
import { RemixBrowser } from "https://esm.sh/@remix-run/react?pin=v68";

ReactDOM.hydrate(<RemixBrowser />, document);
