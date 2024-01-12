export const config = {
  runtime: "edge",
};
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const data = async () => {
  await useFetch("/api/events");
  await wait(10000);
  return res;
};

export default function MyEdgeFunction(request, context) {
  context.waitUntil(data()).then((json) => console.log({ json }));

  return new Response(`Hello, from ${request.url} I'm an Edge Function!`);
}
