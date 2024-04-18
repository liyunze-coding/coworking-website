import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import expressiveCode from "astro-expressive-code";
import remarkDirective from "remark-directive";
import remarkCalloutDirectives from "./src/assets/plugins/remark-callout-directives-customized.js";

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        expressiveCode(),
        mdx({
            remarkPlugins: [remarkDirective, remarkCalloutDirectives],
        }),
        react(),
    ],
    server: {
        port: 4321,
    },
    markdown: {
        remarkPlugins: [remarkDirective, remarkCalloutDirectives],
    },
});
