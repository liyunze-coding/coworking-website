<div align="center">

# Coworking Guide

[![Coworking website](public/assets/coworking-website-preview.webp)](https://coworking-guide.vercel.app/)

</div>

<div align="center">

  ![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=for-the-badge)
  ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)
  ![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
  ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)
  ![remark Badge](https://img.shields.io/badge/remark-000?logo=remark&logoColor=fff&style=for-the-badge)

</div>



---

## Table of Contents

- [Coworking Guide](#coworking-guide)
  - [Table of Contents](#table-of-contents)
  - [Contributing](#contributing)
    - [Badges](#badges)
  - [Directive Components](#directive-components)
  - [Frontmatter](#frontmatter)
    - [Guide Content](#guide-content)
    - [Independent Pages](#independent-pages)

---

## Contributing

Guidelines: TBA

### Badges

Use https://badges.pages.dev/ to get badges such as

![Twitch Badge](https://img.shields.io/badge/Twitch-9146FF?logo=twitch&logoColor=fff&style=for-the-badge)

---

## Directive Components

```
:::warn
This is a warning!
:::

:::note
Note this down
:::

:::success
this was successful! 
:::

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

