import React from 'react';
import ReactPlayer from 'react-player/lazy'

import { cn } from "../util/cn";

export const BentoGrid = ({
                              className,
                              children,
                          }) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  link,
                              }) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento transition duration-200  p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 ",
                className
            )}
        >
            <div className=" rounded-xl ml-2 mt-2 responsive-iframe-container">
                <ReactPlayer url={link} />

            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-1">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};

export const BentoGridItemLarge = ({
                                       className,
                                       title,
                                       description,
                                       header,
                                       icon,
                                   }) => {
    return (
        <div
            className={cn(
                "md:col-span-2 rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
