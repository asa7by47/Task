import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import Text from "@/components/atoms/Text";
import loginHandler from "@/utils/loginHandler";
import styles from "./styles";
import Button from "@/components/atoms/Button";
import ControllableInput from "@/components/atoms/input/ControllableInput";
import DropDown from "@/components/molecules/DropDown";
import RegisterationSchema from "@/schemas";
import Specialization from "@/constants/Specialization";
import { RegisterFormData } from "./types";
import METRICS from "@/constants/Metrics";

export default function Register() {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(RegisterationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      specialization: "",
    },
  });
  const handleLogin = (data: RegisterFormData) => {
    console.log("🚀 ~ handleLogin ~ data:", data);
    loginHandler({
      token: "token",
      refreshToken: "refresh_token",
    });
  };
  return (
    <View style={styles.container}>
      <Text fontSize={20} fontFamily="font600">
        Register
      </Text>

      <ControllableInput placeholder="Name" control={control} name="name" />
      <ControllableInput placeholder="Email" control={control} name="email" />

      <ControllableInput
        textContentType="password"
        placeholder="Password"
        control={control}
        name="password"
      />
      <View style={styles.dropDown}>
        <Controller
          control={control}
          name="specialization"
          render={({ field: { onChange, value }, fieldState }) => (
            <DropDown
              data={Specialization}
              inputValue={value}
              error={fieldState.error?.message}
              onChange={onChange}
              InputPlaceholder="Specialization"
              containerStyle={styles.dropDown}
            />
          )}
        />
      </View>
      <Button
        btnWidth={METRICS.screenWidth / 2}
        title="Submit"
        onPress={handleSubmit(handleLogin)}
      />
    </View>
  );
}
