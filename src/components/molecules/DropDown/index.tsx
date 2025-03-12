/* eslint-disable no-nested-ternary */
import { useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import ICONS from "@/components/atoms/icons";
import { DropDownProps } from "./types";
import i18n from "@/i18n";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import METRICS from "@/constants/Metrics";
import styles from "./styles";
import PureInput from "@/components/atoms/input/PureInput";
import LoadingComponent from "@/components/atoms/Loading/LoadingComponent";
import Text from "@/components/atoms/Text";
import getShadowStyle from "@/utils/getShadowStyle";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

export default function DropDown({
  data,
  onChange,
  inputValue,
  InputLabel,
  InputPlaceholder = i18n.t("CHOOSE"),
  error,
  containerStyle,
  customInputStyle,
  isLoading,
  prefix,
  suffix = <ICONS.ArrowDown />,
  emptyPlaceholder,
  isCountryFlag,
  onLoadMore,
  isLoadingMore,
  placeholderTextColor,
  customInputColorWhenDisabled = COLORS.primary,
  inputHeight = 41, // default height of input
}: DropDownProps) {
  const { t } = useAutoCompleteTranslation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [buttonFrame, setButtonFrame] = useState<any>(null);
  const refButton = useRef<TouchableOpacity>(null);

  const handleModal = () => {
    setIsModalVisible(!isModalVisible);
    measureButtonPosition();
  };

  const onDismissModal = () => {
    setIsModalVisible(false);
  };

  const onSelectItem = (selectedItemValue: number | string) => {
    onChange(selectedItemValue);
    onDismissModal();
  };

  const selectedItem = data?.find((item) => item.value === inputValue);

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return <LoadingComponent />;
  };

  const measureButtonPosition = () => {
    refButton?.current?.measure((fx, fy, width, height, px, py) => {
      setButtonFrame({
        x: px,
        y: py,
        w: width,
        h: height,
      });
    });
  };

  const calcPosition = () => {
    const rightSpace = METRICS.screenWidth;
    const showInLeft = rightSpace >= buttonFrame?.x;
    const positionStyle = {
      maxHeight: 140,
      width: buttonFrame?.w,
      // eslint-disable-next-line no-unsafe-optional-chaining
      top: buttonFrame?.y + inputHeight,
    };

    if (showInLeft) {
      // @ts-ignore
      positionStyle.left = buttonFrame?.x;
    } else {
      // @ts-ignore
      positionStyle.right = rightSpace - buttonFrame?.w;
    }

    return positionStyle;
  };

  const renderModal = () => {
    const frameStyle = calcPosition();

    return (
      <Modal
        transparent
        visible={isModalVisible}
        onRequestClose={onDismissModal}
      >
        <Pressable
          onPress={() => onDismissModal()}
          style={GLOBAL_STYLES.fullSize}
        >
          <View style={[styles.modalContainer, frameStyle]}>
            <FlatList
              data={data}
              style={[styles.FlatList, getShadowStyle()]}
              keyExtractor={(item) => `${item?.label}${item?.value}`}
              showsVerticalScrollIndicator
              indicatorStyle="black"
              renderItem={({ item }) => {
                const isSelected = item?.value === selectedItem?.value;

                return (
                  <TouchableOpacity
                    onPress={() => onSelectItem(item?.value)}
                    style={[
                      GLOBAL_STYLES.row,
                      styles.item,
                      isSelected && styles.selectedItem,
                    ]}
                  >
                    <Text
                      fontSize={13}
                      color={isSelected ? "light" : "greyB6"}
                      fontFamily="font600"
                    >
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                if (!isLoadingMore && onLoadMore) {
                  onLoadMore();
                }
              }}
              ListFooterComponent={renderFooter}
            />
          </View>
        </Pressable>
      </Modal>
    );
  };

  return (
    <View>
      <TouchableOpacity
        disabled={isLoading || !data?.length}
        onPress={handleModal}
        ref={refButton}
      >
        <PureInput
          editable={false}
          labelText={InputLabel}
          placeholder={emptyPlaceholder || t(InputPlaceholder)}
          isPlaceholderDotsHidden
          value={
            isCountryFlag ? selectedItem?.value.toString() : selectedItem?.label
          }
          customInputColorWhenDisabled={customInputColorWhenDisabled}
          customContainerStyle={containerStyle}
          customInputStyle={customInputStyle}
          error={error}
          prefix={prefix}
          suffix={suffix}
          placeholderTextColor={placeholderTextColor}
        />
      </TouchableOpacity>

      {buttonFrame && renderModal()}
    </View>
  );
}
