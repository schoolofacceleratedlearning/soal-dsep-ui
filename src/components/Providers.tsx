"use client";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import ThemeRegistry from "./ThemeRegistry/ThemeRegistry";

interface Props {
  children: ReactNode;
}
const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeRegistry>{children}</ThemeRegistry>
    </SessionProvider>
  );
};

export default Providers;
