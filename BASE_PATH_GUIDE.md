# Base Path Configuration Guide

## Overview

This project uses environment variables to configure the base path for flexible deployment across different environments (GitHub Pages, custom domains, etc.).

## How It Works

### 1. Configuration File (`astro.config.mjs`)

The base path is set using environment variables:

```javascript
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://alife.institute',
  base: process.env.PUBLIC_BASE_PATH || '',
  // ... other config
});
```

### 2. Environment Variables

Create a `.env` file (already gitignored):

```env
# For GitHub Pages with subpath
PUBLIC_BASE_PATH=/alife
PUBLIC_SITE_URL=https://alife.institute

# For custom domain (root deployment)
PUBLIC_BASE_PATH=
PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Usage in Code

#### In Astro Components (`.astro` files)

Use `import.meta.env.BASE_URL` which Astro automatically provides:

```astro
<!-- Images -->
<img src={`${import.meta.env.BASE_URL}assets/logo/logo.svg`} alt="Logo" />

<!-- Links -->
<a href={`${import.meta.env.BASE_URL}about`}>About</a>

<!-- Fonts -->
<link href={`${import.meta.env.BASE_URL}fonts/my-font.woff2`} as="font" />
```

#### In Utility Files (`.ts` files)

Also use `import.meta.env.BASE_URL`:

```typescript
export async function getAllTeamMembers() {
  const baseUrl = import.meta.env.BASE_URL || '';
  return members.map(member => ({
    ...member,
    image: `${baseUrl}${member.image.replace(/^\//, '')}`,
  }));
}
```

### 4. Content Files

In markdown files (`.md`), store paths **without** the base URL:

```markdown
---
image: '/assets/team/Ken Suzuki.png'
featuredImage: '/assets/images/blog-post.png'
---
```

The utility functions automatically prepend the base URL during processing.

## Deployment Scenarios

### GitHub Pages (Subpath)

**.env:**

```env
PUBLIC_BASE_PATH=/alife
PUBLIC_SITE_URL=https://username.github.io
```

**Result:** `https://username.github.io/alife/`

### Custom Domain (Root)

**.env:**

```env
PUBLIC_BASE_PATH=
PUBLIC_SITE_URL=https://yourdomain.com
```

**Result:** `https://yourdomain.com/`

### Local Development

**.env:**

```env
PUBLIC_BASE_PATH=
PUBLIC_SITE_URL=http://localhost:4321
```

**Result:** `http://localhost:4321/`

## GitHub Actions Setup

The workflow uses repository variables. Set these in GitHub:

**Settings → Secrets and variables → Actions → Variables**

1. `PUBLIC_BASE_PATH` → `/alife`
2. `PUBLIC_SITE_URL` → `https://alife.institute`

The workflow is configured to use these:

```yaml
- name: Build
  run: pnpm run build
  env:
    PUBLIC_BASE_PATH: ${{ vars.PUBLIC_BASE_PATH }}
    PUBLIC_SITE_URL: ${{ vars.PUBLIC_SITE_URL }}
```

## Important Notes

1. **Always use `import.meta.env.BASE_URL`** in Astro components and TypeScript files
2. **Never hardcode `/alife/`** in your code
3. **Assets in content files** should use relative paths starting with `/`
4. **The base URL is automatically prepended** by utility functions
5. **Restart dev server** after changing `.env` values

## File Checklist

Files that properly use BASE_URL:

- ✅ `src/components/Header.astro`
- ✅ `src/layouts/Layout.astro`
- ✅ `src/components/sections/about/Mission.astro`
- ✅ `src/components/sections/about/WhoWeAre.astro`
- ✅ `src/pages/slide.astro`
- ✅ `src/utils/team.ts`
- ✅ `src/utils/support.ts`
- ✅ `src/utils/blog.ts`

## Testing

Test your build with different base paths:

```bash
# Test with base path
PUBLIC_BASE_PATH=/alife pnpm run build

# Test without base path (root)
PUBLIC_BASE_PATH= pnpm run build

# Start dev server
pnpm run dev
```

## Troubleshooting

### Issue: Assets not loading

**Solution:** Check that you're using `import.meta.env.BASE_URL` and not hardcoded paths.

### Issue: Links broken on GitHub Pages

**Solution:** Verify that `PUBLIC_BASE_PATH` is set to your repository name (e.g., `/alife`).

### Issue: Environment variables not working

**Solution:** Restart your dev server after changing `.env` file.

### Issue: Build works locally but not in CI/CD

**Solution:** Ensure GitHub repository variables are set correctly in Settings.
