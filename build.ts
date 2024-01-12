import { SolidPlugin } from "bun-plugin-solid";

await Bun.build({
  entrypoints: ["./src/entry.client.tsx"],
  minify: process.env.NODE_ENV === "production",
  outdir: "dist",
  plugins: [SolidPlugin({ generate: "ssr", hydratable: true })],
  // sourcemap: process.env.NODE_ENV !== "production" ? "inline" : "none",
});
