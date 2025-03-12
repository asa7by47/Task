// env.d.ts
declare module "@env" {
  export const FACEBOOK_ID: string;
  export const GOOGLE_ANDROID_OAUTH_ID: string;
  export const GOOGLE_IOS_OAUTH_ID: string;
  export const GOOGLE_WEB_OAUTH_ID: string;
  export const ENV: "dev" | "prod";
}
