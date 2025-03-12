export interface CalendarProps {
  handleDate?: (values: Date) => void;
  disablePastDates?: boolean;
  disabledDates?: string[];
  selectedDate?: string;
  onChange: (e: string | number | null | undefined) => void;
  width?: number;
  height?: number;
}
