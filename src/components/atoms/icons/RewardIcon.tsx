import Svg, {
  Defs,
  Image,
  Pattern,
  Rect,
  SvgProps,
  Use,
} from "react-native-svg";

function RewardIcon(props: SvgProps) {
  return (
    <Svg width="36" height="48" viewBox="0 0 36 48" fill="none" {...props}>
      <Rect width="36" height="48" fill="url(#pattern0_2655_1257)" />
      <Defs>
        <Pattern
          id="pattern0_2655_1257"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            xlinkHref="#image0_2655_1257"
            transform="matrix(0.0133333 0 0 0.01 -0.166667 0)"
          />
        </Pattern>
        <Image
          id="image0_2655_1257"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEN0lEQVR4nO3dW6hVRRzH8b+FZpqd1LxUCBUKmRT6kpwH0SSI0EKigh7SE2QFvVRiSlYoIUpQSArRa2qgD76I0uWhKIRuXkItD4RdLMWwNBOO1/ON4Qy0kzXrqJ295j8z/w+st71gZv/WOnutmf/METHGGGOMMcaYAgF3AC8Aa4FNwOYIxzpgMXC3lAroBD5Fny+A2VISYClwHr16gVXAIMkd8BrpWCc5A2b5qy8lj0iOgKuAA6TnN+AayQ1wP+l6XHLjH2tTtVFS455IgLuAucCjFcc+0vVzoE8PAtOAq0ULYCjwEvAr5ToKLAeGxw5jPPB17G9Dkf3AbbHCGAbsjP0NKNQNjIwRyIrYPVfs7abDGAIcj91rxU4DHU0GMrOfxvxZcaT2hn6xqj71EPZwk4EsCDTij9DfT+B3EibVfRoO/BQ4ZVHbg2hpyHOBRuyrOSe7QBzgk8Apy6UpFsi/LJBIJMACicQCUcYCUcYCUcYCUcYCUcYCUcYCUcYCUUZ7IM8EGvF9gWNZnwdOeaVtAVQ0Yl6gEccKDKQ7cMpTbQugohH31LR9YimBADcCFwKnPND2IFoa0gGcDTTk9YICeT7wcTcZN6HtQVzUmI8CjTlZVXmRWyDAOF/+U2VnY0G0NOjZmvbvdrdzroEA19f8mDvLYgRyLfBLTaN+AO5t+XzoakpBb0s/pvdThRmcxm4ilK5L6MxXfk3IMdJ1BngZ+OwSPvtilDBa6nndukDTxwU2JFogPpTrgG99g0r2IzBGNPDP4xoXcDbFXZC3iiZulRHwTs2LUo56gQ3Rq97rAFOBDynj96JTUuFuYf8mu80/JqZcC/wX8J2/0NwGA5MkB64qnPS8L7kCJpOemZIzYAfpOJD9bg7AQ6TjSSkB8AH67XKbHUgJgDtr5lO0vF/MkJIAr6LXGimNH5jcgj47og8QxgLcUFMkEMMh4CYpmZ8K3YuO7TMqCzSKA4wF9kQeOo+zA4NWwAhgfYQw3PjU+Nj9VwuYD/zdQBBuPf2SYt41/g/gFuBd4Fyb3jHc1rD2e3GFe/q+B5wagCB6/Pz/1LZcRSWhb95+vp9bOX6Z8xgfuzpb94gdux85v1BOAhbWBLHYD/Xb70ODwYypCWRKYw0xfSwQZbA7RBcsEF2wQKJ86R2ukjxwuCetkM6a8+zx9zLKUbv8HMnBfrbPG4hhE7cT3FbgaRvL+m8Qo4DVbQ6gPxf8iMDNUjK3USRwAj1OubtUSuTn1LXuVPpmUW/5fq947VZLCYA5CS1ZeEJy5heKukKCVJwARkuu3P4fpOctyREw2C8ZTk2PW5cuuQHuI12PSW5ceSbpWi+5SXzd4TeSGyXViVfqsOQGOEK6zktuctoNKAv+X5im6qzkBthOur6U3Pj/iDkQFYhNO92671dWgNuBlb6kc3MCxxtW42WMMcYYY4yRjP0DK3h41g7raY4AAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
}
export default RewardIcon;
