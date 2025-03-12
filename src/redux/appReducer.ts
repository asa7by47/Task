import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppState {
  isLoading: boolean;
  deviceId: string | null;
  openFirstTime?: string | null;
  openFundFirstTime?: string | null;
  openActionsheetFirstTime?: boolean;
  lastCompletedFund?: number | null;
}

const initialState: IAppState = {
  isLoading: false,
  deviceId: null,
  openFirstTime: null,
  openFundFirstTime: null,
  lastCompletedFund: null,
  openActionsheetFirstTime: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    showLoader: (state) => ({
      ...state,
      isLoading: true,
    }),
    hideLoader: (state) => ({
      ...state,
      isLoading: false,
    }),
    setDeviceId: (state, action: PayloadAction<string>) => ({
      ...state,
      deviceId: action.payload,
    }),
    openFirstTime: (state, action: PayloadAction<string>) => ({
      ...state,
      openFirstTime: action.payload,
    }),
    openFundFirstTime: (state, action: PayloadAction<string>) => ({
      ...state,
      openFundFirstTime: action.payload,
    }),
    setLastCompletedFund: (state, action: PayloadAction<number | null>) => ({
      ...state,
      lastCompletedFund: action.payload,
    }),
    setOpenActionsheetFirstTime: (state, action: PayloadAction<boolean>) => ({
      ...state,
      openActionsheetFirstTime: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  showLoader,
  hideLoader,
  setDeviceId,
  openFirstTime,
  openFundFirstTime,
  setLastCompletedFund,
  setOpenActionsheetFirstTime,
} = appSlice.actions;

export default appSlice.reducer;
