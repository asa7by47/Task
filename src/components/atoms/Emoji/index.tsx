import { Image, TouchableOpacity } from "react-native";
import emojiData from "@/constants/EmojiData";
import styles from "./styles";

function Emoji({
  status,
  isActive = false,
  onPressEmoji,
}: {
  status: "SMILE" | "SAD" | "STAR";
  isActive: boolean;
  onPressEmoji: (status: string) => void;
}) {
  const getEmoji = emojiData[status];

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onPressEmoji(status)}
      style={styles.container}
    >
      <Image
        source={isActive ? getEmoji.ACTIVE : getEmoji.DISABLED}
        style={styles.img}
      />
    </TouchableOpacity>
  );
}

export default Emoji;
