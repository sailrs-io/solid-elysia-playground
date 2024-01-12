import Elysia from "elysia";
import { renderToStream } from "solid-js/web";

import { TextDecoderStream } from "~/polyfills/TextDecoderStream";
import { CompressionStream } from "~/polyfills/CompressionStream";
import { escapeStream } from "~/utils/streams/escapeStream";
import { App } from "~/components";

const Html = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>🔥 Solid SSR 🔥</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/styles.css" />
    <script type="module" src="/entry.client.js"></script>
  </head>
  <body>
    <div id="app">
  </body>
</html>
`;

export const solidjsPlugin = new Elysia().get("/", (context) => {
  context.set.headers = { "content-type": "text/html;charset=utf-8" };
  // context.set.headers = { "content-encoding": "gzip" };

  const { readable, writable } = new TransformStream();
  renderToStream(Html).pipeTo(writable);
  const stream = readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(escapeStream());
  // .pipeThrough(new CompressionStream("gzip"));
  return new Response(stream);

  // https://streams.spec.whatwg.org/demos/append-child.html
  // readable.pipeThrough(new TextDecoderStream()).pipeThrough(logStream());
  // .pipeThrough(new TextDecoderStream())
  // .pipeThrough(splitStream('\n'))
  // .pipeThrough(parseJSON())
  // .pipeThrough(jsonToElementTransform)
  // .pipeTo(appendChildWritableStream(table))
});
