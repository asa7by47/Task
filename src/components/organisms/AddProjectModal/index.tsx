import { View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ControllableInput from "@/components/atoms/input/ControllableInput";
import METRICS from "@/constants/Metrics";
import ModalWrapper from "../ModalWrapper";
import { AddProjectFormData, AddProjectModalProps } from "./types";
import { AddProjectSchema } from "@/schemas";
import Button from "@/components/atoms/Button";
import styles from "./styles";

function AddProjectModal({ isVisible, setVisible }: AddProjectModalProps) {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(AddProjectSchema),
    defaultValues: {
      projectTitle: "",
      description: "",
      technologies: "",
    },
  });

  const handleAddProject = (project: AddProjectFormData) => {
    console.log("🚀 ~ handleAddProject ~ project:", project);
  };

  return (
    <ModalWrapper
      isVisible={isVisible}
      setVisible={setVisible}
      height="auto"
      containerStyle={styles.containerStyle}
      headerTitle="Add Project"
    >
      <View style={styles.contentContainer}>
        <ControllableInput
          placeholder="Project Title"
          control={control}
          name="projectTitle"
        />
        <ControllableInput
          placeholder="Project Description"
          control={control}
          name="description"
        />

        <ControllableInput
          placeholder="Technologies Used"
          control={control}
          name="technologies"
        />

        <Button
          btnWidth={METRICS.screenWidth / 2}
          title="Submit"
          onPress={handleSubmit(handleAddProject)}
        />
      </View>
    </ModalWrapper>
  );
}

export default AddProjectModal;
