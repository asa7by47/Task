import * as ImageManipulator from "expo-image-manipulator";
import { SaveFormat, ImageResult } from "expo-image-manipulator";

type ImageFile = {
  uri: string;
  width?: number;
  height?: number;
  type?: string;
};

const imageCompression = async (file: ImageFile): Promise<ImageResult> => {
  const compressedFile = await ImageManipulator.manipulateAsync(
    file.uri,
    [{ resize: { height: 720 } }],
    {
      compress: 0.7,
      format: SaveFormat.JPEG,
    }
  );

  return compressedFile;
};

const useCompression = (): ((file: ImageFile) => Promise<ImageResult>) =>
  imageCompression;

export default useCompression;
