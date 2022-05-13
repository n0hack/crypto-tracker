import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
    accentColor: string;
    buttonLabelColor: string;
    buttonBorderColor: string;
    spinnerColor: string;
    listBgColor: string;
    listTextColor: string;
    chartColor: 'light' | 'dark';
  }
}
