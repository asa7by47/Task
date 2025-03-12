import { SvgProps } from "react-native-svg";
import ArrowHeader from "./ArrowHeader";
import OrangeLeftArrow from "./OrangeLeftArrow";
import CloseIcon from "./CloseIcon";
import ArrowDown from "./ArrowDown";
import GoogleIcon from "./GoogleIcon";
import AppleIcon from "./AppleIcon";
import FacebookIcon from "./FacebookIcon";
import SuccessCheckmark from "./SuccessCheckmark";
import PlusIcon from "./PlusIcon";
import GiftIcon from "./GiftIcon";
import RightArrowIcon from "./RightArrowIcon";
import HomeIcon from "./HomeIcon";
import BuyNowIcon from "./BuyNowIcon";
import ScheduleIcon from "./ScheduleIcon";
import SmallWhiteRightArrow from "./SmallWhiteRightArrow";
import EditIcon from "./EditIcon";
import RunningIcon from "./RunningIcon";
import SendSessionsIcon from "./SendSessionsIcon";
import WalletIcon from "./WalletIcon";
import AddFreindIcon from "./AddFreindIcon";
import RewardIcon from "./RewardIcon";
import NotificationIcon from "./NotificationIcon";
import SettingsIcon from "./SettingsIcon";
import ContactUsIcon from "./ContactUsIcon";
import AddFriend from "./AddFriend";
import Running from "./Running";
import LeaderBoard from "./Leaderboard";
import SmallQuestionMark from "./SmallQuestionMark";
import Lock from "./Lock";
import LocationIcon from "./LocationIcon";
import SmallArrowDown from "./SmallArrowDown";
import ClockIcon from "./ClockIcon";
import SpotsIcon from "./SpotsIcon";
import PriceIcon from "./PriceIcon";
import DateIcon from "./DateIcon";
import AchievementIcon from "./AchievementIcon";
import SmallSuccessCheckmark from "./SmallSuccessCheckmark";
import Timer from "./Timer";
import BookIcon from "./BookIcon";

const ICONS = {
  ArrowHeader: (props: SvgProps) => <ArrowHeader {...props} />,
  ArrowDown: (props: SvgProps) => <ArrowDown {...props} />,
  OrangeLeftArrow: (props: SvgProps) => <OrangeLeftArrow {...props} />,
  CloseIcon: (props: SvgProps) => <CloseIcon {...props} />,
  GoogleIcon: (props: SvgProps) => <GoogleIcon {...props} />,
  AppleIcon: (props: SvgProps) => <AppleIcon {...props} />,
  FacebookIcon: (props: SvgProps) => <FacebookIcon {...props} />,
  SuccessCheckmark: (props: SvgProps) => <SuccessCheckmark {...props} />,
  SmallSuccessCheckmark: (props: SvgProps) => (
    <SmallSuccessCheckmark {...props} />
  ),
  PlusIcon: (props: SvgProps) => <PlusIcon {...props} />,
  GiftIcon: (props: SvgProps) => <GiftIcon {...props} />,
  RightArrowIcon: (props: SvgProps) => <RightArrowIcon {...props} />,
  HomeIcon: ({ isFocused }: { isFocused: boolean }) => (
    <HomeIcon isFocused={isFocused} />
  ),
  BuyNowIcon: ({ isFocused }: { isFocused: boolean }) => (
    <BuyNowIcon isFocused={isFocused} />
  ),
  ScheduleIcon: ({ isFocused }: { isFocused: boolean }) => (
    <ScheduleIcon isFocused={isFocused} />
  ),
  SmallWhiteRightArrow: (props: SvgProps) => (
    <SmallWhiteRightArrow {...props} />
  ),
  EditIcon: (props: SvgProps) => <EditIcon {...props} />,
  RunningIcon: (props: SvgProps) => <RunningIcon {...props} />,
  SendSessionsIcon: (props: SvgProps) => <SendSessionsIcon {...props} />,
  WalletIcon: (props: SvgProps) => <WalletIcon {...props} />,
  AddFreindIcon: (props: SvgProps) => <AddFreindIcon {...props} />,
  RewardIcon: (props: SvgProps) => <RewardIcon {...props} />,
  NotificationIcon: (props: SvgProps) => <NotificationIcon {...props} />,
  SettingsIcon: (props: SvgProps) => <SettingsIcon {...props} />,
  ContactUsIcon: (props: SvgProps) => <ContactUsIcon {...props} />,
  AddFriend: (props: SvgProps) => <AddFriend {...props} />,
  Running: (props: SvgProps) => <Running {...props} />,
  LeaderBoard: (props: SvgProps) => <LeaderBoard {...props} />,
  SmallQuestionMark: (props: SvgProps) => <SmallQuestionMark {...props} />,
  Lock: (props: SvgProps) => <Lock {...props} />,
  LocationIcon: (props: SvgProps) => <LocationIcon {...props} />,
  SmallArrowDown: (props: SvgProps) => <SmallArrowDown {...props} />,
  ClockIcon: (props: SvgProps) => <ClockIcon {...props} />,
  SpotsIcon: (props: SvgProps) => <SpotsIcon {...props} />,
  PriceIcon: (props: SvgProps) => <PriceIcon {...props} />,
  DateIcon: (props: SvgProps) => <DateIcon {...props} />,
  AchievementIcon: (props: SvgProps) => <AchievementIcon {...props} />,
  Timer: (props: SvgProps) => <Timer {...props} />,
  BookIcon: (props: SvgProps) => <BookIcon {...props} />,
};

export default ICONS;
