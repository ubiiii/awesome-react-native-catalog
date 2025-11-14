import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = 20;

export default function App() {
  const translateX = useSharedValue(0);
  const currentIndex = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = e.translationX;
    })
    .onEnd((e) => {
      const threshold = CARD_WIDTH / 3;

      if (e.translationX > threshold) {
        // Swipe right - previous card
        currentIndex.value = Math.max(0, currentIndex.value - 1);
      } else if (e.translationX < -threshold) {
        // Swipe left - next card
        currentIndex.value = Math.min(2, currentIndex.value + 1);
      }

      translateX.value = withSpring(-currentIndex.value * (CARD_WIDTH + CARD_SPACING));
    });

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const cards = ['Card 1', 'Card 2', 'Card 3'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gesture Carousel</Text>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.carousel, cardStyle]}>
          {cards.map((card, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardText}>{card}</Text>
            </View>
          ))}
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  carousel: {
    flexDirection: 'row',
    paddingHorizontal: (width - CARD_WIDTH) / 2,
  },
  card: {
    width: CARD_WIDTH,
    height: 200,
    backgroundColor: '#6200ee',
    borderRadius: 12,
    marginRight: CARD_SPACING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

