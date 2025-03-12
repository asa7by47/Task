/* eslint-disable @typescript-eslint/no-explicit-any */
import Toast from "react-native-toast-message";

export default function HandleErrors(err: any) {
  const showErrorToast = (msg: string) => {
    Toast.show({
      type: "error",
      text2: msg,
    });
  };
  console.log("err=>:", err);
  // if (err?.code?.includes("token_not_valid")) {
  //   store.dispatch(logout());
  // }
  if (err.details?.reason) {
    showErrorToast(err.details?.reason);
  } else if (err.message) {
    showErrorToast(err.message);
  } else if (err.details?.length) {
    showErrorToast(err.details.join(", "));
  } else if (err.detail) {
    showErrorToast(err.detail);
  } else if (Array.isArray(err) && err.length > 0) {
    showErrorToast(err[0]);
  } else if (err && Object.keys(err)) {
    showErrorToast(err[Object.keys(err)[0]][0]);
  } else if (Object.keys(err)?.length !== 0) {
    showErrorToast(String(Object.values(err)[0]));
  } else {
    showErrorToast("خطأ غير متوقع!");
  }
}
