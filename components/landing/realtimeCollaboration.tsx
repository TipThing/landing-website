"use client";

import { faArrowPointer, faBorderAll, faEdit, faFingerprint, faHandPeace, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/image";
import { Card, Chip } from "@nextui-org/react";

export const RealtimeCollaboration = () => {

	return (
		<div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
			<div className="grow-0 xl:ml-16 lg:ml-16">
				<Card radius="2xl" className="border-none">
					<Image
						height={750}
						alt="NextUI Fruit Image with Zoom"
						src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
					/>
				</Card>
			</div>
			<div className="grow mx-16 xl:mr-40 lg:mr-40 my-36 text-right items-end order-first lg:order-last xl:order-last">
				<span className="text-sm bg-gradient-to-r from-pink-200 to-blue-500 text-transparent bg-clip-text">
					CROSS-TEAM COLLABORATION
				</span>
				<div className="relative flex flex-col gap-8 items-end">
					<h2 className="text-4xl font-bold">Real-time Collaboration <br /> for teams</h2>
					<p className="max-w-4xl">Build highly interactive dashboards with all the features, apps and widgets that you desire. The Editor is designed to be easy to use and understand while having powerful features for designers and developers alike!</p>
				</div>
			</div>
		</div>

	);
};