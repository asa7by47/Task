import * as FileSystem from "expo-file-system";

type FileInfo = {
  exists: boolean;
  uri: string;
  size: number;
};

export const getFileInfo = async (fileUri: string): Promise<FileInfo> => {
  const fileInfo = await FileSystem.getInfoAsync(fileUri);
  return fileInfo as FileInfo;
};

const isLessThanTheMB = (
  fileSize: number,
  smallerThanSizeMB: number
): boolean => {
  const isOk = fileSize / 1024 / 1024 <= smallerThanSizeMB;
  return isOk;
};

const checkImageSize = async (
  fileUri: string,
  maximumSize: number
): Promise<boolean> => {
  const fileInfo = await getFileInfo(fileUri);
  const fileSize = fileInfo.size;
  return isLessThanTheMB(fileSize, maximumSize);
};

const useImageSizeGuard = (): ((
  fileUri: string,
  maximumSize: number
) => Promise<boolean>) => checkImageSize;

export default useImageSizeGuard;
