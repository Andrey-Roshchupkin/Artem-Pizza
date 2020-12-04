import { useState } from "react";

export const useCollection = (initialValue) => {
  const [state, setState] = useState(initialValue || []);

  const addItem = (item) => {
    setState((s) => [...s, item]);
  };

  const removeItem = (item) => {
    setState((s) => s.filter((storedItem) => storedItem !== item));
  };

  return [state, addItem, removeItem];
};
