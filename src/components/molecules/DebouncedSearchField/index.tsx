import { TouchableOpacity } from "react-native";
import { useMemo, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { debounce } from "lodash-es";
import Colors from "@/constants/Colors";
import PureInput from "@/components/atoms/input/PureInput";

export default function DebouncedSearchField({
  onSearchChange = (_e: string | undefined) => {},
  withCloseButton = false,
  onSubmit = () => {},
  placeholder = "",
}) {
  const [searchValue, setSearchValue] = useState<string | undefined>(undefined);

  const debouncedSearchHandler = useMemo(
    () => debounce(onSearchChange, 300),
    []
  );

  useEffect(() => {
    if (searchValue === undefined) return;

    debouncedSearchHandler(searchValue);
  }, [searchValue, debouncedSearchHandler]);

  const onDismiss = () => {
    setSearchValue("");
  };

  return (
    <PureInput
      placeholder={placeholder}
      onChangeText={setSearchValue}
      onSubmitEditing={onSubmit}
      value={searchValue}
      suffix={
        withCloseButton === false && searchValue ? (
          <TouchableOpacity onPress={onDismiss}>
            <AntDesign name="close" size={20} color={Colors.dark} />
          </TouchableOpacity>
        ) : null
      }
    />
  );
}
