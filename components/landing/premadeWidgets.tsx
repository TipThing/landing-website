"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import { ButtonToggleVector, DataBlocksVector, GraphVector, GuagesAndBlocksVector, IconsVector, TableVector } from "../icons";

export const PremadeWidgets = () => {

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-sm bg-gradient-to-r from-yellow-500 to-orange-300 text-transparent bg-clip-text max-w-fit">
                    NEVER START FROM SCRATCH
                </div>
                <h3 className="text-4xl font-bold mt-2 mb-16">Pre-made Widgets & Blocks</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-16 items-stretch">
                    <div className="col-auto">
                        <Card className="h-full">
                            <CardBody className="overflow-visible p-0">
                                <div className="flex justify-center items-center">
                                    <div className="w-full p-8">
                                        <GraphVector height={140} />
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="text-sm justify-between items-start flex-col bg-transparent">
                                <h4 className="text-2xl font-bold mb-2">Stats & Graphs</h4>
                                <p>Use pre-made graph and statistic blocks to display easy to view and understand data on your
                                    dashboard.</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card className="h-full">
                            <CardBody className="overflow-visible p-0">
                                <div className="flex justify-center items-center">
                                    <div className="w-full p-8">
                                        <TableVector height={140} />
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="text-sm justify-between items-start flex-col bg-transparent">
                                <h4 className="text-2xl font-bold mb-2">Data Tables</h4>
                                <p>Use pre-made data tables to easily display and edit your data in a viewable format.</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card className="h-full">
                            <CardBody className="overflow-visible p-0">
                                <div className="flex justify-center items-center">
                                    <div className="w-full p-8">
                                        <GuagesAndBlocksVector height={140} />
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="text-sm justify-between items-start flex-col bg-transparent">
                                <h4 className="text-2xl font-bold mb-2">Guages & Blocks</h4>
                                <p>Display attractive and good looking guages and information blocks on your dashboard for data at a glance.</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card className="h-full">
                            <CardBody className="overflow-visible p-0">
                                <div className="flex justify-center items-center">
                                    <div className="w-full p-8">
                                        <ButtonToggleVector height={140} />
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="text-sm justify-between items-start flex-col bg-transparent">
                                <h4 className="text-2xl font-bold mb-2">Buttons & Toggles</h4>
                                <p>Add various buttons and toggles to your dashboard that can perform advanced functions.</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card className="h-full">
                            <CardBody className="overflow-visible p-0">
                                <div className="flex justify-center items-center">
                                    <div className="w-full p-8">
                                        <DataBlocksVector height={140} />
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="text-sm justify-between items-start flex-col bg-transparent">
                                <h4 className="text-2xl font-bold mb-2">Information Lists</h4>
                                <p>Add information lists to your dashboard such as shopping lists, todo list, and more!</p>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="col-auto">
                        <Card className="h-full">
                            <CardBody className="overflow-visible p-0">
                                <div className="flex justify-center items-center">
                                    <div className="w-full p-8">
                                        <IconsVector height={140} />
                                    </div>
                                </div>
                            </CardBody>
                            <CardFooter className="text-sm justify-between items-start flex-col bg-transparent">
                                <h4 className="text-2xl font-bold mb-2">Icons</h4>
                                <p>Easily spice up your dashboard by adding icons from a massive library.</p>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
