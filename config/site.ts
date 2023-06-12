export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "TipThing",
	description: "Imagine. Build. Use. Dashboards made easy",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Features",
			href: "#features",
		},
		{
			label: "Collaboration",
			href: "#collaboration",
		}
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Features",
			href: "#features",
		},
		{
			label: "Collaboration",
			href: "#collaboration",
		}
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
		discord: "https://discord.gg/9b6yyZKmH4",
    	sponsor: "https://patreon.com/jrgarciadev"
	},
};
