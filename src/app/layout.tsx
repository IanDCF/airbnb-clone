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
import RentModal from "../components/modals/RentModal";
import SearchModal from "../components/modals/SearchModal";

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
            <SearchModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          <div className="pb-20 pt-28">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
