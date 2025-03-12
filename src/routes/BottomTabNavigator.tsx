import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import METRICS from "@/constants/Metrics";
import NavigationTab from "@/routes/navigation/Tab";
import { NavigationTabProps } from "@/routes/navigation/Tab/types";
import MainProfileScreen from "@/screens/profile/MainProfile";
import MainScreenOptions from "./MainScreenOptions";
import { TabParamList } from "./types";
import HomeScreen from "@/screens/main/Home";
import BuyNowScreen from "@/screens/main/BuyNow";
import ICONS from "@/components/atoms/icons";
import useAutoCompleteTranslation from "@/hooks/useAutoCompleteTranslation";

import Schedule from "@/screens/main/Schedule";
import UserIcon from "@/components/molecules/UserIcon";

const TABWIDTH = METRICS.screenWidth / 5;

function HomeTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="HOME"
      iconComponent={<ICONS.HomeIcon isFocused={Boolean(focused)} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function BuyNowTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="BUY_NOW"
      iconComponent={<ICONS.BuyNowIcon isFocused={Boolean(focused)} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function ScheduleTabBarElement({ focused }: Partial<NavigationTabProps>) {
  return (
    <NavigationTab
      title="SCHEDULE"
      iconComponent={<ICONS.ScheduleIcon isFocused={Boolean(focused)} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

function ProfileTabBarElement({ focused }: Partial<NavigationTabProps>) {
  const isFocused = Boolean(focused);
  return (
    <NavigationTab
      title="PROFILE"
      iconComponent={<UserIcon isFocused={isFocused} />}
      focused={Boolean(focused)}
      tabWidth={TABWIDTH}
    />
  );
}

const Tabs = createBottomTabNavigator<TabParamList>();

export default function BottomTabNavigator() {
  const { t } = useAutoCompleteTranslation();
  return (
    <Tabs.Navigator
      screenOptions={MainScreenOptions as BottomTabNavigationOptions}
    >
      <Tabs.Screen
        name="HomeScreen"
        initialParams={{
          title: t("HOME"),
          hasBackArrow: false,
          isRightComponentHidden: false,
        }}
        options={{
          tabBarIcon: HomeTabBarElement,
        }}
        component={HomeScreen}
      />

      <Tabs.Screen
        name="BuyNowScreen"
        initialParams={{ title: t("BUY_NOW"), hasBackArrow: false }}
        options={{
          tabBarIcon: BuyNowTabBarElement,
        }}
        component={BuyNowScreen}
      />

      <Tabs.Screen
        name="Schedule"
        initialParams={{
          title: t("SCHEDULE").toUpperCase(),
          hasBackArrow: false,
        }}
        options={{
          tabBarIcon: ScheduleTabBarElement,
        }}
        component={Schedule}
      />

      <Tabs.Screen
        name="MainProfileScreen"
        initialParams={{
          title: t("PROFILE").toUpperCase(),
          hasBackArrow: true,
        }}
        options={{
          tabBarIcon: ProfileTabBarElement,
        }}
        component={MainProfileScreen}
      />
    </Tabs.Navigator>
  );
}
