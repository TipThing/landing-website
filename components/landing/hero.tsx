"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {Divider} from "@nextui-org/divider";
import { useState } from "react";
import { GetNotifiedInput } from "../utilities/getNotifiedInput";

export const Hero = () => {

    return (
        <div className="hero my-10 xl:my-32 xl:mt-10 lg:my-32 md:my-24 md:mt-12 sm:my-6">
            <div className="hero-content px-5 sm:px-8 text-center">
                <div className="text-left md:text-center max-w-lg md:max-w-xl lg:max-w-5xl xl:max-w-full">
                    <h1 className="text-center text-7xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-8xl leading-none select-none tracking-tightest font-extrabold">
                        <span
                            data-content="Imagine."
                            className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center dark:before:text-white before:animate-gradient-background-1 inline-block h-full pb-2"
                        >
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1 h-full">
                                {" "}
                                Imagine.
                            </span>
                        </span>
                        <span
                            data-content="Build."
                            className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center dark:before:text-white before:animate-gradient-background-2 inline-block h-full pb-2"
                        >
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2 h-full">
                                {" "}
                                Build.
                            </span>
                        </span>
                        <span
                            data-content="Use."
                            className="relative before:content-[attr(data-content)] before:w-full before:z-0 before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center dark:before:text-white before:animate-gradient-background-3 inline-block h-full pb-2"
                        >
                            <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3 h-full">
                                {" "}
                                Use.
                            </span>
                        </span>
                    </h1>
                    <p className="lg:px-24 xl:pt-6 md:p-12 sm:py-10 sm:px-0 xl:text-2xl lg:text-xl md:text-xl max-w-5xl">
                        Create stunning dashboards with TipThing&apos;s drag-and-drop
                        builder and plugin marketplace. Simplify your workflow and empower
                        your life.
                    </p>
                    <GetNotifiedInput className="mt-8"/>
                </div>
            </div>
        </div>
    );
};
