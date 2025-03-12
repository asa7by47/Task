import { Share } from "react-native";

export default async function ShareHandler({ Message }: { Message: string }) {
  try {
    const result = await Share.share({
      message: Message,
    });

    if (result.action === Share.sharedAction) {
      console.log("sharing successfully.");
    } else if (result.action === Share.dismissedAction) {
      console.log("sharing dismissed.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
