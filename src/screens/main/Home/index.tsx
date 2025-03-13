import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Text from "@/components/atoms/Text";
import logoutHandler from "@/utils/logoutHandler";
import styles from "./styles";
import Button from "@/components/atoms/Button";
import METRICS from "@/constants/Metrics";
import AddProjectModal from "@/components/organisms/AddProjectModal";
import DebouncedSearchField from "@/components/molecules/DebouncedSearchField";
import { useGetProjectsQuery } from "@/apis/services/projects";

export default function HomeScreen() {
  const [isVisible, setVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  console.log("🚀 ~ HomeScreen ~ searchQuerysssssssssssssss:", searchQuery);

  const { data } = useGetProjectsQuery();
  const handleOpenModal = () => setVisible(true);

  const handleSearchChange = (query: string | undefined) => {
    if (query !== undefined) {
      setSearchQuery(query);
    }
  };

  const handleLogout = () => {
    logoutHandler();
  };
  return (
    <>
      <View style={styles.container}>
        <Text fontSize={20} fontFamily="font600">
          Projects
        </Text>
        <View style={styles.addProjectBtnContainer}>
          <Button
            btnWidth={METRICS.screenWidth / 2}
            onPress={handleOpenModal}
            title="Add Project"
          />
        </View>

        <View style={styles.searchContainer}>
          <DebouncedSearchField
            onSearchChange={handleSearchChange}
            placeholder="Search projects..."
          />
        </View>

        <View style={styles.projectsContainer}>
          <View style={styles.singleProject}>
            <Text fontSize={16} fontFamily="font600">
              Project Title : title
            </Text>
            <Text fontSize={16} fontFamily="font600">
              Project Description : Description Description Description
              Description Description Description Description Description
              Description Description Description Description
            </Text>

            <View style={styles.row}>
              <Text fontSize={16} fontFamily="font600">
                Technologies :
              </Text>

              <View style={styles.techsContainerStyle}>
                <TouchableOpacity style={styles.tech}>
                  <Text fontSize={12} fontFamily="font600">
                    HTML
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tech}>
                  <Text fontSize={12} fontFamily="font600">
                    HTML
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <AddProjectModal isVisible={isVisible} setVisible={setVisible} />
      </View>
      <View style={styles.logOutStyle}>
        <Button onPress={handleLogout} title="Logout" />
      </View>
    </>
  );
}
