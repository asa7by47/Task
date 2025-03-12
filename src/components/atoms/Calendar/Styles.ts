import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: COLORS.light,
    borderRadius: 22,
  },
  customDayHeaderStyles: {
    fontSize: 12,
    ...GLOBAL_STYLES.font500,
    borderWidth: 0,
    color: COLORS.gray3C,
    margin: 0,
    padding: 0,
  },
  customDayStyles: {
    fontSize: 12,
    ...GLOBAL_STYLES.font600,
    color: COLORS.primary,
  },
  dayLabelsWrapper: {
    borderColor: COLORS.transparent,
  },
  disabledDatesTextStyle: {
    fontSize: 12,
    ...GLOBAL_STYLES.font600,
    color: COLORS.gray87,
  },
  monthTitleStyle: {
    color: COLORS.primary,
    fontSize: 13,
    ...GLOBAL_STYLES.font600,
  },
  selectedDayStyle: { backgroundColor: COLORS.secondary },
});

export default styles;
