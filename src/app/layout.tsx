import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "../components/navbar/Navbar";
import ClientOnly from "../components/commons/ClientOnly";
import RegisterModal from "../components/modals/RegisterModal";
import { ReduxProvider } from "../Redux/redux-provider";
import ToasterProvider from "../providers/toast-provider";
import LoginModal from "../components/modals/LoginModal";
import getCurrentUser from "@/actions/getCurrentUser";
import RentModal from "@/components/modals/RentModal";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vacation Homes & Condo Rentals - Airbnb",
  description: "Airbnb Clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ReduxProvider>
          <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

// GitLab Access Token
// glpat-57THpJ5xYu1AbXWnT2tr
