import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { SignUpScreen } from "./src/feature/authentication/screens/sign-up/sign-up.screen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignUpScreen />
    </ThemeProvider>
  );
}
