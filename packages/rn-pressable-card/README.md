# RN Pressable Card

An animated pressable card component for React Native with smooth spring animations.

## Installation

```bash
npm install @awesome-rn-catalog/rn-pressable-card
```

## Usage

```tsx
import { PressableCard } from '@awesome-rn-catalog/rn-pressable-card';

<PressableCard onPress={() => console.log('Pressed!')}>
  <Text>Card Content</Text>
</PressableCard>
```

## Props

- `children`: React node to render inside the card
- `onPress`: Callback when card is pressed
- `style`: Additional styles for the card
- `activeOpacity`: Opacity when pressed (default: 0.8)

