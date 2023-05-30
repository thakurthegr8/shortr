import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from "@/src/providers/Auth";
import {Analytics} from "@vercel/analytics"

export default function App({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <Analytics/>
        <ToastContainer position="bottom-right" />
      </AuthProvider>
    </>
  );
}
