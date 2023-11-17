import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import ReactQueryContext from "@/utils/ReactQueryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} flex flex-col sm:flex-row w-screen h-screen`}>
				<Toaster />
				<Navbar />
				<ReactQueryContext>
					<div className="flex-1">{children}</div>
				</ReactQueryContext>
			</body>
		</html>
	);
}