"use client";

import { GetNotifiedInput } from "../utilities/getNotifiedInput";

export const ComingSoon = () => {

    return (
        <div>
            <h2 className="text-6xl font-bold mb-24">Coming Soon</h2>
            <GetNotifiedInput isExtra={true}/>
        </div>
    );
};
