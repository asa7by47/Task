type FileValue = {
  uri: string;
  type: string;
  name: string;
};

// @ts-ignore
export default function useFormData(values) {
  const formData = new FormData();

  Object.keys(values).forEach((key) => {
    const value = values[key];

    if (value) {
      if (key === "profile_picture") {
        const file: FileValue = {
          uri: value as string,
          type: "image/jpg",
          name: value as string,
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formData.append(key, file as any);
      } else {
        formData.append(key, value as string);
      }
    }
  });

  return { formData };
}
