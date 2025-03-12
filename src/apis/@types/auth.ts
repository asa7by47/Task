export interface AuthTokenResponse {
  refresh_token: string;
  access_token: string;
}

export interface GetStoreUserParams {
  page_size: number;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  phone: string;
  country_code?: string;
  country: string;
  birth_date?: string;
  profile_picture: string;
  referral_source?: string;
  address: string;
  branch: number;
}

type CombinedBody = Partial<User> & LoginBody;
export interface SignupBody extends CombinedBody {
  password2: string;
  gender: "male" | "female";
  branch: number;
  country: string;
  referral_source:
    | "search_engine"
    | "social_media"
    | "elevate_coach"
    | "friend"
    | "other";
}

export interface UserInfoBody {
  name: string;
  email: string;
  bio: string;
  gender: string;
}

export interface VerifyBody {
  email: string;
  otp: string;
}

export interface emailBody {
  email: string;
}
