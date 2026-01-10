# Editing courses

Each course is an `.mdx` file in `content/courses/`.

## Structure

- **Frontmatter**: top YAML block with fields like `title`, `slug`, `level`, etc.
- **Body**: the course page content in Markdown/MDX (headings, lists, tables, etc.).

Example:

```mdx
---
title: MLOps & GenAI
slug: mlops-genai
level: Intermediate
duration: 8 weeks
highlights:
  - RAG apps
  - CI/CD
  - Monitoring
---

## Overview
...
```

## Adding a new course

- Create a new file: `content/courses/<slug>.mdx`
- Ensure `slug` matches the filename.

## Updating from Google Doc

When you update the Google Doc, tell me “sync the course doc” and I’ll paste the latest content into the relevant MDX file(s) with clean formatting.

Links:

- WhatsApp: `https://wa.link/nprk9l`
- YouTube: `https://www.youtube.com/@MTAlphaOfficial`
