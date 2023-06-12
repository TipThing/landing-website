"use client";

import { faArrowPointer, faBorderAll, faEdit, faFingerprint, faHandPeace, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/image";
import { Card, Chip } from "@nextui-org/react";

export const DashboardBuilder = () => {

	return (
		<div className="flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col">
			<div className="grow mx-16 xl:mr-40 lg:mr-40 my-16">
				<div className="text-sm bg-gradient-to-r from-blue-500 to-pink-200 text-transparent bg-clip-text max-w-fit">
					DRAG N DROP BUILDER
				</div>
				<div className="relative flex flex-col gap-8">
					<h2 className="text-4xl font-bold">Easy to use <br /> Dashboard Builder</h2>
					<p className="max-w-4xl">Build highly interactive dashboards with all the features, apps, and widgets that you desire. The Editor is designed to be easy to use and understand while having powerful features for designers and developers alike!</p>
					<div className="flex flex-col gap-4">
						<div className="flex flex-row gap-4">
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faBorderAll}
										className="mr-2"
									/>
									Countless Widgets
								</Chip>
							</div>
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faShoppingCart}
										className="mr-2"
									/>
									Community Marketplace
								</Chip>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faEdit}
										className="mr-2"
									/>
									Customizable
								</Chip>
							</div>
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faArrowPointer}
										className="mr-2"
									/>
									Realtime Collaboration
								</Chip>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faHandPeace}
										className="mr-2"
									/>
									Easy to use
								</Chip>
							</div>
							<div className="flex flex-1">
								<Chip className="bg-default-100 min-w-full" radius="md">
									<FontAwesomeIcon
										icon={faFingerprint}
										className="mr-2"
									/>
									Secure
								</Chip>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="grow-0 xl:mr-16 lg:mr-16">
				<Card
					radius="2xl"
					className="border-none"
				>
					<Image
						height={750}
						alt="NextUI Fruit Image with Zoom"
						src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
					/>
				</Card>
			</div>
		</div>
	);
};
