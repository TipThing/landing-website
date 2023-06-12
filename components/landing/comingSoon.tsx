"use client";

import { GetNotifiedInput } from "../utilities/getNotifiedInput";

export const ComingSoon = () => {

    return (
        <div>
            <div className="flex flex-col mb-24 items-center">
                <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold mb-5 text-center">Coming Soon</h2>
                <p className="max-w-md text-center dark:text-zinc-400">Sign up to get notified when the dashboard builder
                    application is available!</p>
            </div>
            <GetNotifiedInput isExtra={true} />
        </div>
    );
};
