import Navbar from "./navbar";
import Box from "@mui/material/Box";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
