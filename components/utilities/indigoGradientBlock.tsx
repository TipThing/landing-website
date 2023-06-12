"use client";

export const IndigoGradientBlock = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    return (
        <div className="relative min-w-full m-0 p-0">
            <div className="bg-gradient-to-t dark:from-[#0f0d21] from-neutral-900 dark:to-black to-white w-full h-[200px] min-w-full" />
            <div className="dark:bg-[#0f0d21] bg-neutral-900">
                <div className="container mx-auto max-w-7xl px-6 text-white">
                    {children}
                </div>
            </div>
            <div className="bg-gradient-to-b dark:from-[#0f0d21] from-neutral-900 dark:to-black to-white w-full h-[200px] min-w-full" />
        </div>
    );
};
