import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  addProjectBtnContainer: {
    marginBottom: 24,
  },
  container: {
    alignItems: "center",
    flex: 1,
    gap: 20,
    marginTop: 40,
    paddingHorizontal: 32,
  },
  logOutStyle: {
    marginVertical: 32,
    paddingHorizontal: 32,
  },
  projectsContainer: {
    gap: 16,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  searchContainer: {
    width: "100%",
  },
  singleProject: {
    borderColor: COLORS.primary,
    borderRadius: 8,
    borderWidth: 1,
    padding: 24,
    width: "100%",
  },
  tech: {
    borderColor: COLORS.primary,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  techsContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});

export default styles;
