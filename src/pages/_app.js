import "@/styles/globals.css";
import Layout from "@/components/layouts/layout";
import AuthContextProvider from "@/components/auth/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/components/layouts/theme";
export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthContextProvider>
  );
}
