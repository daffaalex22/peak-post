import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
    <ApolloProvider client={client}>
      <ThemeProvider
        attribute="class"
          defaultTheme={process.env.NEXT_PUBLIC_TENANT_NAME == "Java" ? "dark" : "light"}
          forcedTheme={process.env.NEXT_PUBLIC_TENANT_NAME == "Java" ? "dark" : "light"}
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
    </SessionProvider>
  )
}
