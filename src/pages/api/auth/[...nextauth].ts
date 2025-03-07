import NextAuth, { NextAuthOptions, Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { JWT } from "next-auth/jwt"

interface ExtendedSession extends Session {
  jwt?: string;
  id?: string;
}

interface ExtendedToken extends JWT {
  jwt?: string;
  id?: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_OAUTH2_CLIENT_ID!,
      clientSecret: process.env.NEXT_GOOGLE_OAUTH2_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }: { session: ExtendedSession, token: JWT }): Promise<ExtendedSession> {
      if (token) {
      session.jwt = (token as ExtendedToken).jwt;
      session.id = (token as ExtendedToken).id;
      }
      return session;
    },
    async jwt({ token, user, account }): Promise<ExtendedToken> {
      if (account && user) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/${account.provider}/callback?access_token=${account.access_token}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          token.jwt = data.jwt;
          token.id = data.user.id;
        } catch (error) {
          console.error("Error in JWT callback:", error);
        }
      }
      return token;
    }
  }
}

export default NextAuth(authOptions)