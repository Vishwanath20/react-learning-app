// Define action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Define action creators
export function increment() {
  return { type: INCREMENT };
}

export function decrement() {
  return { type: DECREMENT };
}
