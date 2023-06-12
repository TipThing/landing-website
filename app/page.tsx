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

export default function Home() {
	return (
		<>
			<div className="container mx-auto max-w-7xl px-6">
				<section className="flex flex-col items-center justify-center gap-4 py-4 md:py-6 my-8">
					<Hero />
				</section>
				<section className="flex flex-col items-center justify-center gap-4 py-4 md:py-10">
					<DashboardSpoiler />
				</section>
				<section id="features" className="flex flex-col items-center justify-center gap-4 md:py-10 my-36">
					<DashboardBuilder />
				</section>
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
