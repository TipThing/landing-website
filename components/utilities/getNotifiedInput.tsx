"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { FC } from "react";

export interface NotifiedInputProps {
    isExtra?: boolean;
    className?: string;
}

export const GetNotifiedInput: FC<NotifiedInputProps> = ({
    isExtra = false,
    className
}) => {
    return (
        <div className={`grid gap-8 items-start justify-center ${className}`}>
            <div className="relative group">
                <div className={`rounded-xl ${isExtra ? "shadow-[0_0_120px_20px]" : "shadow-[0_0_20px_6px]"} dark:shadow-purple-700 shadow-fuchsia-400 dark:hover:shadow-pink-800 hover:shadow-pink-400 transition-shadow duration-300`}>
                    <div className="relative">
                        <div className="absolute w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-100 hover:blur-md"></div>
                        <div className="flex justify-between">
                            <Input classNames={{inputWrapper: 'border-r-1 dark:border-zinc-700 border-zinc-400 rounded-l-xl bg-white dark:bg-default-100 data-[hover=true]:bg-slate-100 dark:data-[hover=true]:bg-default-200 group-data-[focus=true]:bg-slate-50 dark:group-data-[focus=true]:bg-default-100'}} type="email" radius="none" label="Email" isClearable />
                            <Divider orientation="vertical" />
                            <Button
                                size="xl"
                                radius="xl"
                                className="bg-white dark:bg-default-100 min-w-fit rounded-l-none text-md px-4 m-0"
                            >
                                Get Notified
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
