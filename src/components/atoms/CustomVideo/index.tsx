import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import styles from "./styles";
import { CustomVideoProps } from "./types";

function CustomVideo({
  url,
  isLooping = true,
  isMuted = true,
  useNativeControls = false,
  isAutoPlay = true,
}: CustomVideoProps) {
  const video = useRef<Video>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      playVideo();
    }
  }, [isAutoPlay]);

  const playVideo = () => {
    if (video.current) {
      video.current.playAsync();
    }
  };

  return (
    <View style={styles.videoContainer}>
      <Video
        style={styles.video}
        ref={video}
        source={{
          uri: url,
        }}
        isLooping={isLooping}
        isMuted={isMuted}
        useNativeControls={useNativeControls}
        onReadyForDisplay={() => setIsLoading(false)}
        resizeMode={ResizeMode.COVER}
      />
      {isLoading && <View style={styles.loadingFullContainer} />}
    </View>
  );
}

export default CustomVideo;
