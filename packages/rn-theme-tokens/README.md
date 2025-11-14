# RN Theme Tokens

Centralized design tokens for React Native applications including colors, spacing, typography, and shadows.

## Installation

```bash
npm install @awesome-rn-catalog/rn-theme-tokens
```

## Usage

```tsx
import { colors, spacing, typography } from '@awesome-rn-catalog/rn-theme-tokens';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  title: {
    ...typography.h1,
    color: colors.primary,
  },
});
```

## Tokens

- **Colors**: Primary, secondary, background, surface, error, text colors
- **Spacing**: Consistent spacing scale (xs to xxl)
- **Typography**: Heading and body text styles
- **Border Radius**: Standard border radius values
- **Shadows**: Platform-appropriate shadow styles

