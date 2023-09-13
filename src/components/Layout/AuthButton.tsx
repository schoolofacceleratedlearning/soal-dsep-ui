"use client";
import { Button } from "@mui/material";
import { signIn, signOut } from "next-auth/react";

export default function AuthButton({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const handleSignin = () => {
    signIn(undefined, {
      callbackUrl: "/programs",
    });
  };
  const handleSignout = () => {
    signOut({
      callbackUrl: "/",
    });
  };
  return (
    <>
      {!isAuthenticated ? (
        <Button color="secondary" onClick={handleSignin} variant="contained">
          Login
        </Button>
      ) : (
        isAuthenticated && (
          <Button color="error" onClick={handleSignout}>
            Signout
          </Button>
        )
      )}
    </>
  );
}
