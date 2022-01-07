import { DefaultTheme } from "react-native-paper";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {

    }

    interface Theme {

    }
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors
  }
}

export default theme;