import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-02-24",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const client = createClient(config);
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
// console.log(client, builder, urlFor, "hi");
