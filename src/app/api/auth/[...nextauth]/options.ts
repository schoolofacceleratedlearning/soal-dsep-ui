import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Enter username",
          value: "soal-onest",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter passowrd",
          value: "soal-onest",
        },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "soal-onest", password: "soal-onest" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  theme: {
    colorScheme: "light",
  },
};

export default authOptions;
