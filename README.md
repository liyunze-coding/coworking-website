<div align="center">

# Coworking Guide

[![Coworking website](public/assets/coworking-website-preview.webp)](https://coworking-guide.vercel.app/)

<div style="display:flex; gap: 0 0.3em;justify-content:center;margin-top:1em;">

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=for-the-badge)

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)

![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)

![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)

![remark Badge](https://img.shields.io/badge/remark-000?logo=remark&logoColor=fff&style=for-the-badge)

</div>

</div>

---

## Table of Contents

- [Coworking Guide](#coworking-guide)
  - [Table of Contents](#table-of-contents)
  - [Contributing](#contributing)
  - [Directives](#directives)
  - [Frontmatter](#frontmatter)
    - [Guide Content](#guide-content)
    - [Independent Pages](#independent-pages)
    - [Blog Post](#blog-post)

---

## Contributing

Guidelines: TBA

---

## Directives

```
:::warn
This is a warning!
:::

:::note
Note this down
:::

:::success
this was successful! 
::

:::danger
It could go very wrong
:::

:::tip
This is a cool tip!
:::
```

## Frontmatter

### Guide Content

```
---
title: 
layout: "../../layouts/GuideLayout.astro"
description: 
order: 0
---
```

- `title`: Page title
- `layout`: Path to layout file
- `description`: Description of the content
- `order`: The order in which it displays on the left bar

### Independent Pages

```
---
title: 
layout: "../../layouts/GuideLayout.astro"
description: 
---
```

- `title`: Page title
- `layout`: Path to layout file
- `description`: Description of the content

### Blog Post

```
---
heading: 
subheading: 
author: 
slug: spirit-city 
pubDate: 1970-01-01T0:00:00
---
```

- `heading`: the main title
- `subheading`: the tagline of the blog post
- `author`: name / username of author
- `slug`: desired URL slug
- `pubDate`: Published date (ISO 8601)

---