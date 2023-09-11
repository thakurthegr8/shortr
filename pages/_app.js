import '@/styles/globals.css'
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/src/providers/Auth";
import { Router } from "next/router"
import nProgress from 'nprogress';
import { Analytics } from "@vercel/analytics/react";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <Analytics />
        <ToastContainer position="bottom-right" />
      </AuthProvider>
    </>
  );
}
