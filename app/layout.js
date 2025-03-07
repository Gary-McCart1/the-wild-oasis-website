import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import Header from "./_components/Header"

import {Josefin_Sans} from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: "swap",
});



import "@/app/_styles/globals.css"
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis"
  },
  description: "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} relative bg-primary-950 antialiased 
      text-primary-100 min-h-screen flex flex-col`}>
        <Header />
      <div className="flex-1 px-8 py-12 grid">

        <main className="max-q-7xl mx-auto w-full">
          <ReservationProvider>
            {children}
          </ReservationProvider>
        </main>
      </div>
        
        
      </body>
    </html>
  );
}
