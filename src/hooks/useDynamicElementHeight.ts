import { useState, useCallback } from "react";
import { LayoutChangeEvent } from "react-native";

interface UseDynamicMarginBottomReturn {
  handleLayout: (event: LayoutChangeEvent) => void;
  marginBottom: number;
  elementHeight: number;
}

export default function useDynamicElementHeight(): UseDynamicMarginBottomReturn {
  const [elementHeight, setElementHeight] = useState<number>(0);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setElementHeight(height);
  }, []);

  const marginBottom = elementHeight / 2;

  return { handleLayout, marginBottom, elementHeight };
}
