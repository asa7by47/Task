import { useTranslation, UseTranslationOptions } from "react-i18next";
import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";

export default function useAutoCompleteTranslation() {
  const { t: defaultT } = useTranslation();

  const t = (
    key: TranslationKeyEnum,
    options?: Record<string, unknown> &
      UseTranslationOptions<TranslationKeyEnum>
  ) => {
    return defaultT(key, options);
  };

  return { t };
}
