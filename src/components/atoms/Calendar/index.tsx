import { AntDesign } from "@expo/vector-icons";
import { I18nManager } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import COLORS from "@/constants/Colors";
import METRICS from "@/constants/Metrics";
import { months, weekdays } from "@/constants/dropdownData";
import { CalendarProps } from "./types";
import styles from "./Styles";

function NextArrow() {
  return (
    <AntDesign
      name={I18nManager.isRTL ? "left" : "right"}
      size={20}
      color={COLORS.secondary}
    />
  );
}

function PreviousArrow() {
  return (
    <AntDesign
      name={I18nManager.isRTL ? "right" : "left"}
      size={20}
      color={COLORS.secondary}
    />
  );
}

function Calendar({
  handleDate,
  disablePastDates,
  disabledDates,
  selectedDate,
  onChange,
  width = METRICS.screenWidth * 0.9,
  height,
}: CalendarProps) {
  const minDate = disablePastDates
    ? new Date(new Date().setHours(0, 0, 0, 0))
    : undefined; // Disable past dates

  const today = new Date().setHours(0, 0, 0, 0);
  const selectedDay = selectedDate ? new Date(selectedDate) : undefined;

  const customDayStyles = () => {
    return {
      textStyle: styles.customDayStyles,
    };
  };

  const customDayHeaderStyles = () => {
    return {
      textStyle: styles.customDayHeaderStyles,
    };
  };

  const todayTextColor = {
    color:
      selectedDay?.setHours(0, 0, 0, 0) === today ? COLORS.light : COLORS.dark,
  };

  const onDateChange = (date: Date) => {
    if (handleDate) {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      onChange(formattedDate);
      handleDate(date);
    }
  };

  return (
    <CalendarPicker
      width={width}
      height={height}
      disabledDates={disabledDates?.map((date) => new Date(date))}
      showDayStragglers
      weekdays={weekdays}
      months={months}
      minDate={minDate}
      selectedStartDate={selectedDate}
      nextComponent={<NextArrow />}
      previousComponent={<PreviousArrow />}
      monthTitleStyle={styles.monthTitleStyle}
      yearTitleStyle={styles.monthTitleStyle}
      customDayHeaderStyles={customDayHeaderStyles}
      customDatesStyles={customDayStyles}
      selectedDayTextColor={COLORS.light}
      selectedDayStyle={styles.selectedDayStyle}
      todayBackgroundColor={COLORS.light}
      todayTextStyle={todayTextColor}
      disabledDatesTextStyle={styles.disabledDatesTextStyle}
      dayLabelsWrapper={styles.dayLabelsWrapper}
      onDateChange={onDateChange}
    />
  );
}

export default Calendar;
