import { NavigatorScreenParams } from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import { ServicesResults } from "@/apis/@types/services";

export type ScreenOptionsParams = {
  title?: string;
  isRightComponentHidden?: boolean;
  hasBackArrow?: boolean;
  isPopupHeader?: boolean;
};

type BaseParams<T = unknown> = (ScreenOptionsParams & T) | undefined;

export type TabParamList = {
  HomeScreen: BaseParams;
  BuyNowScreen: BaseParams;
  OfferScreen: BaseParams;
  Schedule: BaseParams;
  MainProfileScreen: BaseParams;
};

export type MainStackParamList = {
  Root: NavigatorScreenParams<TabParamList>;
  Payment: BaseParams;
  MeetTheTeam: BaseParams;
  CoachDetails: BaseParams<{ id: number }>;
  PurchaseHistory: BaseParams;
  AccountSettings: BaseParams;
  EditProfile: BaseParams;
  FAQs: BaseParams;
  PrivacyPolicy: BaseParams;
  TermsConditions: BaseParams;
  ChangePassword: BaseParams;
  RemainingSessions: BaseParams;
  SendSessions: BaseParams;
  Notifications: BaseParams;
  ScheduleDetails: BaseParams;
  Programs: BaseParams;
  ProgramDetails: BaseParams;
  FirstTime: BaseParams;
  MyClasses: BaseParams;
  Achievements: BaseParams;
  Referrals: BaseParams;
  ScheduleDetails: BaseParams;
  Schedule: BaseParams;
  ScanQRCode: BaseParams;
  PackagesScreen: BaseParams<{ title: string }>;
  ProductDetails: BaseParams<{ productId?: string }>;
  ProductDetailsModal: BaseParams<{ productId?: string }>;
  OurServices: BaseParams<{ data: ServicesResults[] | undefined }>;
  ServicesDetails: BaseParams<{ title: string; id: number }>;
  Announcement: BaseParams<{
    title?: string;
    description?: string;
    image?: string;
  }>;
};

export type AuthStackParamList = {
  Register: BaseParams;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

type CompinedParamList = MainStackParamList & AuthStackParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends CompinedParamList {}
  }
}
