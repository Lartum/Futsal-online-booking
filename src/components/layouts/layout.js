import Navbar from "./navbar";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import {theme} from "./theme";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main>{children}</main>
    </>
  );
}
