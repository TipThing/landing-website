"use client";

import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { useTheme } from "next-themes";

export const DashboardSpoiler = () => {
    const { theme } = useTheme();

    return (
        <div className="rounded-2xl transition-shadow duration-0 w-full">
            <div className="relative">
                <div className="flex justify-center items-center">
                    <div className="w-full">
                        {theme === 'light' ? (
                            <Image
                                src="./assets/images/dashboard_mockup_light.png"
                                height={1100}
                                alt="Dashboard Mockup"
                                className="shadow-[0_4px_12px_6px_rgb(0,0,0)] shadow-gray-300 hover:shadow-purple-300 hover:transition-shadow hover:duration-0"
                            />
                        ) : (
                            <Image
                                src="./assets/images/dashboard_mockup.png"
                                height={1100}
                                alt="Dashboard Mockup"
                                className="hover:shadow-[0_4px_12px_6px_rgb(0,0,0)] dark:hover:shadow-purple-700 hover:transition-shadow hover:duration-0"
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
