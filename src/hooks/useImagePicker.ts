import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import useCompression from "@/hooks/useCompression";
import useImageSizeGuard from "@/hooks/useImageSizeGuard";
import HandleErrors from "@/utils/handleErrors";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

export default function useImagePicker() {
  const { t } = useAutoCompleteTranslation();
  const compressImage = useCompression();
  const checkImageSizeLimit = useImageSizeGuard();

  const pickImage = async (): Promise<string | null> => {
    try {
      // Request permissions
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "Permission Denied",
          `Sorry, we need camera roll permission to upload images.`
        );
        return null;
      }

      // Launch image library
      const result = await ImagePicker.launchImageLibraryAsync();

      if (result?.canceled) return null;

      if (result?.assets && result?.assets?.length > 0) {
        const compressedResult = await compressImage(result?.assets?.[0]);
        const isFitSize = checkImageSizeLimit(compressedResult.uri, 1);

        if (!isFitSize) {
          HandleErrors({ message: t("IMAGE_SIZE_EXCEED_LIMIT") });
          return null;
        }

        return compressedResult?.uri;
      }

      return null;
    } catch (error) {
      HandleErrors({ message: t("IMAGE_PICKER_ERROR") });
      return null;
    }
  };

  return { pickImage };
}
