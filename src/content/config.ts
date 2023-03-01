import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tag: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
