/** TransformStream that turns the escaped characters back into normal strings */
export const escapeStream = () =>
  new TransformStream({
    transform: (chunk, controller) => {
      const escaped = (chunk as string).replaceAll("&lt;", "<");
      controller.enqueue(escaped);
    },
  });
