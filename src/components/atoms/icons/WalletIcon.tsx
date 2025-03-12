import Svg, {
  Defs,
  Image,
  Pattern,
  Rect,
  SvgProps,
  Use,
} from "react-native-svg";

function WalletIcon(props: SvgProps) {
  return (
    <Svg width="46" height="46" viewBox="0 0 46 46" fill="none" {...props}>
      <Rect width="46" height="46" fill="url(#pattern0_2795_1117)" />
      <Defs>
        <Pattern
          id="pattern0_2795_1117"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use xlinkHref="#image0_2795_1117" transform="scale(0.01)" />
        </Pattern>
        <Image
          id="image0_2795_1117"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEU0lEQVR4nO2dy4sURxzHe/FxEYV01biKXhJX+/ebDT5QFC8a/wIPYYnkEDwkEkIUdH6/0cXHXlQUn5dN4lEIQrxq1Ih49BZyyCGXPAnEgx5MbivZHaneQfAwM06/qrvn+4GC3WWp6fp+ump6aqqrgwAAAAAAAAAAAAAAAACKItx4dJ0l+cywXLUk3xrS2yh6O86C9YrLxmWUu4hGU7Ya0vuWdcGydlC0XwYLhvReY/L4llxkGNLjlmUeEnTIE1HmDUs7YxlyHSI01YhgWK9lIsOSHoIMzWZ4Jv00lYy1m45Zy/ovhGhG75fywmWavHewXIAMzfjiRc4nFmJYf+89JsqPJmp9ML65tSLxC9SM8c2tFSbSfS6bnrmR/pqo8sakbOgzFv5pIl2ZeYtqQjhxeJUl+atXfuObWu8OXak7+3sLkdO5tKRGWJKZ3sNWa8/QFTYi+bDPWPhRLq2oES6jXvm5bIeusNHUqZ4VNnUql1bUiMzzg5CKCXFvXO+Q7DYs+93vKDrlsogziXRloUIMy2+W9CU+o2ivq9CXcUZFCUHRVBlACJfrJIIQ9i8BQth/8BDCoyyEZM6yzDYiOYhLXl287I/koCX9ajGbIoWQzIXN9s6hKx0RQm7t6iclhx4is7m0pEZYkq8LE+K6Zi6tqBHx8FWYEEwuDgSTiyUDQkZZSHfJ5F1L8vegS7yRKiRzLhPDcsdlVOBVFopNkQGEcLlOIAhh/xIghP0HDyE84kIM6z+G5HvcrKPdG5biLJ56EWJIzgV7Z5YOXXHd2X5omVu/W7AQeZhLY2qEJXlUmJCQ2l/m0ooaYbl1pDAhmFwcDOaySgaEjPTkIuuTtJe6lvWmZblsIvk41W1eGeGOwR1LfJ85680M2vekuh8M3dJL0u/CyTYHBeNeMw6wwKWx5RfyWozMGVYNgmAsyJ+x+N57D2uUqyOEX/eYb3KWMmZZbvhqX/WEcFxO5aJi8d77Mz7bVlEhMm8i3ZG5DD62zbL+DyHJpDzOXog89tzzq9pDNC7uvu+sZLi6fLen8kIs68/ZzCpPLTGkP5WgPZUX0jGkZ9PqGDQlDiHDhbBgWD9PKsOQflGmTdcq30NsV4olvRQ0Z5a/dSOaM8vd9EwJjr2WQjrd8ku8k0Q/MU4EtQ50/9f38dZeSMcVw/rMsNwyLBKSfOKK+9n9zbI89318IyfEVrhACPuXACHsP3gIYf9hQwj7DxhC2H+oEML+g4QQ9h8ehLD/wMoppP8mmCicQkiSTTD7bhOL0kmXQZJtYpsnJhC85nLyrd544r2hhQzaahxFE2VgWP4IkuK+f0Dwmu3JR3oxsZA1E9MNPK5CMxQi/61+f3o8SEP3608MUZw+gzRfQ79BvEsapHRS9o7ZrNfCnsRDwTSJiPmQ2tO5rFXuLsP8oUwrOGx5y4JheeAeNRjkTTjRXr/4YMn4IYp4sCR5erAkAAAAAAAAAAAAAAAABF1eARHe82FH+RfNAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  );
}
export default WalletIcon;
