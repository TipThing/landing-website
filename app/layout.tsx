import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
import { ScrollToTopButton } from "@/components/utilities/scrollToTop";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col">
						<Navbar />
						<main className="flex-grow">
						<ScrollToTopButton />
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://github.com/Chappy202"
								title="JJ GitHub profile"
							>
								<span className="text-default-600">Brought to you by</span>
								<p className="text-secondary">JJ Badenhorst</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
