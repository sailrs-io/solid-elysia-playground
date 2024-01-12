import { createSignal } from "solid-js";
import { HydrationScript } from "solid-js/web";

export const App = () => {
  const [count, setCount] = createSignal(0);
  return (
    <html lang="en">
      <head>
        <title>🔥 Solid SSR 🔥</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <HydrationScript />
      </head>
      <body>
        <h1>🔥 Solid SSR 🔥</h1>
        <p>Count: {count()}</p>
        <button onclick={() => setCount((c) => c + 1)}>Click me</button>
      </body>
    </html>
  );
};
