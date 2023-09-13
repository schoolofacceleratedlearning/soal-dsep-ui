import {
  IconButton,
  AppBar as MuiAppbar,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import AuthButton from "./AuthButton";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function AppBar() {
  const session = await getServerSession();
  return (
    <MuiAppbar position="fixed" sx={{ zIndex: 2000 }}>
      <Toolbar>
        <Link href="/">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <Image
              src="/logo.svg"
              alt="SOAL Logo"
              width={40}
              height={40}
              priority
            />
          </IconButton>
        </Link>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {"SOAL<>ONEST"}
        </Typography>
        <AuthButton isAuthenticated={!!session} />
      </Toolbar>
    </MuiAppbar>
  );
}
