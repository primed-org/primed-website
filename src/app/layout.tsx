import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

const nunito = Nunito({ subsets: [ "latin" ] });

export const metadata: Metadata = {
	title: "Primed E-Health",
	description: "Primed E-Health"
};

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		<body className={ nunito.className }>
		<Header/>
		<main className="flex min-h-screen flex-col items-center justify-between">
			{ children }
		</main>
		<Footer/>
		</body>
		</html>
	);
}
