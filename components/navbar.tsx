"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
		  setIsSmallScreen(window.innerWidth <= 768);
		};
	
		// Initial check
		handleResize();
	
		// Event listener for window resize
		window.addEventListener('resize', handleResize);
	
		// Cleanup the event listener on component unmount
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	  }, [isSmallScreen]);

	return (
		<NextUINavbar maxWidth="xl" position={isSmallScreen ? "sticky" : "floating"}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				{/* // Navbar branding */}
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">TipThing</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="basis-1/5 sm:basis-full" justify="center">
				{/* // All Website Links - Non mobile links */}
				<div className="hidden sm:flex md:flex lg:flex gap-4 justify-center ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			{/* // Mobile Social Links */}
			<NavbarContent className="flex w-full gap-3 sm:hidden" justify="end">
				{/* // Light/Dark Mode Toggle */}
				<ThemeSwitch />
			</NavbarContent>

			{/* // Social Links */}
			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					{/* // Light/Dark Mode Toggle */}
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			{/* // Navbar Mobile Hamburger toggle */}
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
      		</NavbarContent>

			{/* // Mobile Naviation */}
      		<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
