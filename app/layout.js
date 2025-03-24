import { Inter } from "next/font/google";
import "./globals.css";
import "./prism.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deepseek - with NextJs",
  description: "Full stack project",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>
        <Toaster
          toastOptions={{
            success: { style: { background: "black", color: "white" } },
            error: { style: { background: "black", color: "white" } },
          }}
        />
        <html>
          <body className={`${inter.className} antialiased`}>
            {children}
          </body>
        </html>
      </AppContextProvider>
    </ClerkProvider>
  );
}
