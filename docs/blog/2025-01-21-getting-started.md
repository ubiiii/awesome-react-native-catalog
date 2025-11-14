---
slug: getting-started
title: Getting Started with React Native Libraries
authors:
  - name: Utkarsh Lubal
    title: React Native Developer
    url: https://awereactnative.com/author/utkarsh-lubal/
    image_url: https://github.com/ubiiii.png
tags: [react-native, tutorial, getting-started]
---

## Choosing the Right Library

When starting a new React Native project, selecting the right libraries can make or break your development experience. Here are some key considerations:

### 1. **Navigation**
For most apps, you'll need navigation. [React Navigation](https://reactnavigation.org/) is the most popular choice, offering stack, tab, and drawer navigators.

### 2. **State Management**
Choose based on your app's complexity:
- Simple state: React's built-in `useState` and `useReducer`
- Complex apps: Consider Redux or Zustand
- Server state: React Query is excellent

### 3. **UI Components**
- **react-native-paper**: Material Design components
- **react-native-vector-icons**: Icon library
- **react-native-svg**: For custom graphics

### 4. **Performance**
- **react-native-reanimated**: Smooth 60fps animations
- **react-native-fast-image**: Optimized image loading
- **react-native-screens**: Native screen management

## Quick Setup Example

```bash
# Install core navigation dependencies
npm install @react-navigation/native react-native-screens react-native-safe-area-context

# For animations
npm install react-native-reanimated react-native-gesture-handler
```

## Best Practices

1. **Start Simple**: Don't add libraries until you need them
2. **Check Maintenance**: Look for recent commits and active maintainers
3. **Read Documentation**: Good docs save time later
4. **Test Compatibility**: Ensure libraries work with your React Native version

Explore our [catalog](/docs/intro) to find the perfect libraries for your project!

