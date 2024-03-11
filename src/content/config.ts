// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        heading: z.string(),
        subheading: z.string(),
        pubDate: z.string(),
        author: z.string(),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            ?.optional(),
        tags: z.array(z.string())?.optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    posts: postsCollection,
};
