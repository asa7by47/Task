import { TextStyle, ViewStyle } from "react-native";

interface SelectionItem {
  label: string;
  value: string | number;
}

export interface DropDownProps {
  data: SelectionItem[];
  onChange: (e: string | number | null | undefined) => void;
  inputValue: string | number | undefined | null;
  InputLabel?: string;
  InputPlaceholder?: string;
  error?: string;
  containerStyle?: ViewStyle;
  customInputStyle?: ViewStyle | TextStyle;
  isLoading?: boolean;
  prefix?: JSX.Element;
  suffix?: JSX.Element | null;
  emptyPlaceholder?: string;
  ItemIcon?: JSX.Element;
  isCountryFlag?: boolean;
  height?: number;
  hasSelection?: boolean;
  onLoadMore?: () => void;
  isLoadingMore?: boolean;
  placeholderTextColor?: string;
  customInputColorWhenDisabled?: string;
  inputHeight?: number;
}
