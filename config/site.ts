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
		github: "#",
		twitter: "#",
		docs: "#",
		discord: "#",
    	sponsor: "#"
	},
};
