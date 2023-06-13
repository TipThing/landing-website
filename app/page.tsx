"use client";

import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Hero } from "@/components/landing/hero";
import { DashboardSpoiler } from "@/components/landing/dashboardSpoiler";
import { DashboardBuilder } from "@/components/landing/dashboardBuilder";
import { RealtimeCollaboration } from "@/components/landing/realtimeCollaboration";
import { PremadeWidgets } from "@/components/landing/premadeWidgets";
import { IndigoGradientBlock } from "@/components/utilities/indigoGradientBlock";
import { ComingSoon } from "@/components/landing/comingSoon";
import isSmallScreen from "@/utilities/isSmallScreen";

export default function Home() {
	return (
		<>
			<div className="relative overflow-hidden pb-24">
				<div className="container mx-auto max-w-7xl px-6">
					<section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6 my-8">
						<Hero />
					</section>
				</div>
				{!isSmallScreen() ? (
					<>
						<div className="absolute bottom-[40%] rotate-45 right-[7%] z-0">
							<div className="w-[400px] h-[400px] -rotate-45 bg-gradient-to-br dark:from-orange-500 dark:to-purple-800 from-amber-300 to-fuchsia-400 rounded-full dark:opacity-40 opacity-70 dark:blur-3xl blur-2xl"></div>
						</div>
						<div className="absolute bottom-80 rotate-45 right-16 z-10">
							<svg width="500" height="auto" viewBox="0 0 832 792" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect x="2.5" y="2.5" width="827" height="787" rx="20" ry="20" stroke="url(#paint0_linear_383_334)" strokeWidth="5" />
								<defs>
									<linearGradient id="paint0_linear_383_334" x1="416" y1="0" x2="416" y2="792" gradientUnits="userSpaceOnUse">
										<stop stopColor="#FF3D00" />
										<stop offset="1" stopColor="#FF00B8" stopOpacity="0" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="absolute bottom-24 rotate-[12deg] -left-12 z-10">
							<svg width="600" height="auto" viewBox="0 0 941 820" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M485.655 11.25L935.556 790.5C942.291 802.167 933.872 816.75 920.4 816.75H20.5998C7.12833 816.75 -1.29138 802.167 5.44437 790.5L455.345 11.25C462.08 -0.416656 478.92 -0.416666 485.655 11.25Z" stroke="url(#paint0_linear_389_335)" stroke-width="5" />
								<defs>
									<linearGradient id="paint0_linear_389_335" x1="470.5" y1="-20" x2="470.5" y2="1099" gradientUnits="userSpaceOnUse">
										<stop stopColor="#FF0080" stopOpacity="0.30" />
										<stop offset="0.5" stopColor="#FF3D00" stopOpacity="0.30" />
										<stop offset="1" stopColor="#C5B319" stopOpacity="0.75" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div className="absolute bottom-[10%] rotate-45 left-[10%] z-0">
							<div className="w-80 h-56 -rotate-45 bg-gradient-to-br dark:from-orange-500 dark:to-purple-800 from-amber-300 to-fuchsia-400 rounded-full dark:opacity-40 opacity-90 blur-3xl"></div>
						</div>
					</>
				) : null}

				<div className="container mx-auto max-w-7xl px-6">
					<section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
						<DashboardSpoiler />
					</section>
				</div>
			</div>
			<div className="container mx-auto max-w-7xl px-6">
				<section id="features" className="flex flex-col items-center justify-center gap-4 md:py-10 my-36">
					<DashboardBuilder />
				</section>
			</div>
			<div className="container mx-auto max-w-7xl px-6">
				<section id="collaboration" className="flex flex-col items-center justify-center gap-4 md:py-10 my-36">
					<RealtimeCollaboration />
				</section>
			</div>
			<section className="flex flex-col items-center justify-center gap-4 md:py-10 my-36 mb-0">
				<IndigoGradientBlock>
					<PremadeWidgets />
				</IndigoGradientBlock>
			</section>
			<div className="container mx-auto max-w-7xl px-6">
				<section className="flex flex-col items-center justify-center gap-4 md:py-10 my-16 mb-36">
					<ComingSoon />
				</section>
			</div>
		</>
	);
}
