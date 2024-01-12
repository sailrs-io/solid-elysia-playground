import Elysia from "elysia";

import { bearer } from "@elysiajs/bearer";
import { cookie } from "@elysiajs/cookie";
import { cors } from "@elysiajs/cors";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
// import { compression } from "elysia-compression";

import * as env from "./env";
import { solidjsPlugin } from "./features/solidjs/plugin";

const app = new Elysia()
  .use(bearer())
  .use(cookie())
  .use(cors())
  .use(html())
  .use(staticPlugin())
  .use(swagger())
  // .use(compression())
  .use(solidjsPlugin)
  .listen(env.BETH_PORT, ({ hostname, port }) => {
    console.log(`Running at http://${hostname}:${port}`);
  });

export type App = typeof app;
