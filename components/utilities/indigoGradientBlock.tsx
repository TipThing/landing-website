"use client";

import { useTheme } from "next-themes";

export const IndigoGradientBlock = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { theme } = useTheme();

    return (
        <div className="relative min-w-full m-0 p-0">
            <div className="dark:bg-gradient-to-t dark:from-[#0f0d21] dark:to-black w-full h-[200px] min-w-full" />
            <div className="dark:bg-[#0f0d21]">
                <div className="container mx-auto max-w-7xl px-6">
                    {children}
                </div>
            </div>
            <div className="dark:bg-gradient-to-b dark:from-[#0f0d21] dark:to-black w-full h-[200px] min-w-full" />
        </div>
    );
};
