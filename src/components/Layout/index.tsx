import { ReactNode } from "react";
import AppBar from "./AppBar";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: ["48px", "56px", "64px"],
          p: 5,
        }}
      >
        {children}
      </Box>
    </>
  );
}
