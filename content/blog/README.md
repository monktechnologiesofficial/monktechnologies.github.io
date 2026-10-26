# Adding Blog Posts

This guide explains how to add new blog posts to the Monk Technologies website. Blog posts are written in Markdown and automatically appear in the blog index, sitemap, and llms.txt.

## Quick Start

1. Create a new `.md` file in `content/blog/`
2. Add required frontmatter
3. Write your content in Markdown
4. Rebuild the site (`npm run build`)

## File Location

All blog posts must be placed in:

```
content/blog/your-post-slug.md
```

The filename (without `.md`) should match the `slug` in the frontmatter.

## Required Frontmatter

Every blog post must include this YAML frontmatter at the top:

```yaml
---
title: "Your Post Title Here"
slug: "your-post-slug"
description: "A brief description (155 characters max recommended) for SEO and social sharing."
date: "2026-10-20"
tags: ["Tag1", "Tag2", "Tag3"]
author: "Author Name"
---
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | **Yes** | Post title (used in `<h1>`, page title, meta tags) |
| `slug` | string | **Yes** | URL-safe slug (lowercase, hyphens, no spaces) - must match filename |
| `description` | string | **Yes** | SEO description (155 chars max recommended) |
| `date` | string | **Yes** | ISO 8601 format: `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM:SS` |
| `tags` | array | No | Array of topic tags (shown as badges, used in SEO keywords) |
| `author` | string | No | Author name (defaults to "Monk Technologies" if omitted) |

## Example Blog Post

```markdown
---
title: "Getting Started with RAG Systems in 2026"
slug: "getting-started-rag-systems-2026"
description: "Learn how to build Retrieval-Augmented Generation systems for production. A practical guide for beginners."
date: "2026-10-21"
tags: ["GenAI", "RAG", "Tutorial"]
author: "Monk Technologies Team"
---

Your content here. Use standard Markdown:

## Headings

Regular paragraphs with **bold** and *italic* text.

### Lists

- Bullet points
- More points

1. Numbered lists
2. Also work

### Links

Link to [our courses](/courses) or external resources.

### Code

\`\`\`python
def hello_world():
    print("Hello, AI learners!")
\`\`\`
```

## Content Guidelines

### Text Contrast and Accessibility

**IMPORTANT**: Never set custom text colors in blog posts. The blog template automatically ensures all text (paragraphs, list items, tables, blockquotes, code, etc.) has proper contrast (WCAG AA, minimum 4.5:1) against the background.

- ❌ Do NOT add inline styles like `style="color: gray"`
- ❌ Do NOT use HTML with color classes like `<span class="text-gray-500">`
- ❌ Do NOT manually set text colors in any way
- ✅ Use plain Markdown - the styles handle contrast automatically

The blog template ensures all text is clearly readable. Adding custom colors risks making text invisible or hard to read.

### Writing Style

- **Audience**: USA/Canada learners interested in AI training
- **Tone**: Educational, approachable, practical
- **Length**: 800-2000 words ideal (shorter is okay for announcements)
- **No fabricated stats**: Only use accurate, verifiable information

### SEO Best Practices

1. **Title**: 60 characters or less, include primary keyword
2. **Description**: 155 characters or less, compelling summary
3. **Headings**: Use H2 (`##`) and H3 (`###`) to structure content
4. **Internal links**: Link to relevant course pages when natural
5. **Tags**: 2-5 relevant tags (used for SEO keywords)

### Course Linking

Always link to relevant courses when mentioning topics:

- MLOps → `/courses/mlops-fundamentals`
- GenAI/Prompt Engineering → `/courses/generative-ai-prompt-engineering`
- Python → `/courses/python-fundamentals`
- AI Agents → `/courses/ai-agent-engineering`
- Full bootcamp → `/courses/mlops-genai`

Example: `Check out our [MLOps Fundamentals course](/courses/mlops-fundamentals) for hands-on training.`

## Automated Daily Posts

For automated writers adding one post per day:

### Naming Convention

Use date-based slugs for uniqueness:

```
content/blog/YYYY-MM-DD-topic-slug.md
```

Example: `content/blog/2026-10-21-intro-to-vector-databases.md`

### Checklist Before Publishing

- [ ] Filename matches slug in frontmatter
- [ ] All required fields present (title, slug, description, date, tags, author)
- [ ] Date is today's date in `YYYY-MM-DD` format
- [ ] Description is under 155 characters
- [ ] At least one internal course link included
- [ ] No fabricated statistics or claims
- [ ] Content is relevant to AI training/MLOps/GenAI
- [ ] Spell-check completed

### Post Ideas

Good topics for daily posts:

- **Tutorials**: "How to Deploy Your First ML Model"
- **Concepts**: "Understanding Data Drift in Production"
- **Career advice**: "5 Skills Every MLOps Engineer Needs"
- **Tool guides**: "Getting Started with MLflow"
- **Best practices**: "Testing ML Models Before Deployment"
- **Industry trends**: "The Rise of AI Agents in Enterprise"
- **Case studies**: "How RAG Systems Improve Customer Support"

## Technical Details

### How It Works

1. Blog posts are read from `content/blog/*.md` at build time
2. `src/content/blog.ts` handles parsing and metadata extraction
3. Posts automatically appear in:
   - `/blog` index page (sorted by date, newest first)
   - `/blog/[slug]` individual post pages
   - `/sitemap.xml`
   - `/llms.txt` (blog section reference)
4. Each post gets full SEO: title, meta description, canonical URL, OpenGraph tags, BlogPosting JSON-LD schema

### File Format

- Markdown (`.md`) or MDX (`.mdx`) supported
- Standard Markdown syntax (headings, lists, links, code blocks, etc.)
- No special syntax required for basic posts

### Build Process

After adding a post:

```bash
npm run build
```

The static site generator will:
1. Discover your new post
2. Generate the HTML page
3. Update the blog index
4. Update sitemap.xml
5. Make it ready for deployment

### Deployment

Once built, deploy the `out/` directory to your hosting (Vercel, Netlify, GitHub Pages, etc.). The new post will be live immediately.

## Troubleshooting

### Post Not Appearing

1. Check filename is `.md` (not `.txt`)
2. Verify file is in `content/blog/` (not `content/`)
3. Check frontmatter YAML is valid (no syntax errors)
4. Ensure `slug` matches filename
5. Run `npm run build` to regenerate

### Build Errors

If you see TypeScript or build errors:

1. Check all required frontmatter fields are present
2. Verify date is a valid ISO 8601 string
3. Ensure no special characters in slug (only lowercase letters, numbers, hyphens)
4. Check that Markdown is properly formatted

### Broken Links

If internal links break:

- Use relative URLs: `/courses`, not `https://monk-technologies.com/courses`
- Start with `/` for internal links
- Verify target pages exist

## Questions?

For issues or questions about the blog system, contact the development team or consult the main project README.
