import "@/styles/globals.css";
import Layout from "@/components/layouts/layout";
import { AuthUserProvider } from "@/components/auth/authUserProvider";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "@/components/layouts/theme";
export default function App({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      {/* <ThemeProvider theme={theme}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </ThemeProvider> */}
    </AuthUserProvider>
  );
}
