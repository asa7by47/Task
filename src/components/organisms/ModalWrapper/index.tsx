import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import COLORS from "@/constants/Colors";
import METRICS from "@/constants/Metrics";
import styles from "./styles";
import { ModalWrapperProps } from "./types";
import Text from "@/components/atoms/Text";

export default function ModalWrapper({
  isVisible,
  setVisible,
  children,
  containerStyle,
  cannotDismiss,
  height = METRICS.screenHeight / 2.5,
  onDismiss = () => {},
  hideCloseIcon,
  closeIconContainerStyle,
  closeIconColor = COLORS.dark,
  closeIconSize = 18,
  headerTitle,
}: ModalWrapperProps) {
  const hideModal = () => {
    if (cannotDismiss) return;
    setVisible(false);
    onDismiss();
  };

  const sizeStyle = { height };

  return (
    <ReactNativeModal
      avoidKeyboard
      isVisible={isVisible}
      onBackdropPress={hideModal}
      onDismiss={onDismiss}
      backdropColor="#000"
      backdropOpacity={0.6}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={[styles.modalContainer, sizeStyle, containerStyle]}>
        <View style={styles.header}>
          {headerTitle && (
            <Text fontSize={20} fontFamily="font600">
              {headerTitle}
            </Text>
          )}
          {cannotDismiss ||
            (!hideCloseIcon && (
              <View
                style={[
                  GLOBAL_STYLES.row,
                  styles.closeSection,
                  closeIconContainerStyle,
                ]}
              >
                <TouchableOpacity onPress={hideModal}>
                  <AntDesign
                    name="close"
                    size={closeIconSize}
                    color={closeIconColor}
                  />
                </TouchableOpacity>
              </View>
            ))}
        </View>

        {children}
      </View>
    </ReactNativeModal>
  );
}
