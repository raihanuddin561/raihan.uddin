# Browser Extension Hydration Fix - Quick Reference

## Problem
Browser extensions (like form-filling extensions) inject attributes (e.g., `fdprocessedid`) into DOM elements after the initial server render, causing hydration mismatches in Next.js applications.

## Quick Solution
Add `suppressHydrationWarning={true}` to any interactive element that might be affected by browser extensions:

```tsx
// Buttons
<button
  onClick={handleClick}
  className="..."
  suppressHydrationWarning={true}
>
  Click me
</button>

// Links
<a
  href="#"
  className="..."
  suppressHydrationWarning={true}
>
  Link
</a>

// Form inputs
<input
  type="text"
  value={value}
  onChange={handleChange}
  className="..."
  suppressHydrationWarning={true}
/>
```

## Common Elements to Fix
- Form inputs (`<input>`, `<textarea>`, `<select>`)
- Buttons (`<button>`)
- Links (`<a>`)
- Interactive elements that might be targeted by browser extensions

## Best Practices
1. **Only use on elements that might be affected**: Don't add to every element
2. **Use error boundaries**: Wrap components in error boundaries for graceful error handling
3. **Use hydration-safe hooks**: Create custom hooks for client-side state management
4. **Test with extensions**: Test your app with common browser extensions enabled

## Safe Component Wrappers
Use pre-built safe components from `SafeFormElements.tsx`:
```tsx
import { SafeInput, SafeButton, SafeTextarea } from '@/components/SafeFormElements';

<SafeInput type="text" value={value} onChange={handleChange} />
<SafeButton onClick={handleClick}>Click me</SafeButton>
<SafeTextarea value={value} onChange={handleChange} />
```

## Error Boundary Usage
```tsx
import HydrationErrorBoundary from '@/components/HydrationErrorBoundary';

<HydrationErrorBoundary>
  <YourComponent />
</HydrationErrorBoundary>
```

## Client-Only Rendering
```tsx
import ClientOnly from '@/components/ClientOnly';

<ClientOnly fallback={<div>Loading...</div>}>
  <ComponentThatRequiresClient />
</ClientOnly>
```

## Testing
- Test with browser extensions enabled (especially form-filling extensions)
- Check browser console for hydration warnings
- Test in different browsers and environments
- Use `npm run build` to check for build-time issues
