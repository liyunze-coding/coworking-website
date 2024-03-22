import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), expressiveCode(), mdx(), react()],
    server: {
        port: 3000,
    },
});
