import { React } from "./deps/index.ts";
import { ReactDOMServer } from "./deps/server.ts";
import { RemixServer } from "https://esm.sh/@remix-run/react";
import type { EntryContext } from "https://esm.sh/@remix-run/server-runtime";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
