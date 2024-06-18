import React from 'react';
import ReactPlayer from 'react-player/lazy';

import { cn } from '../util/cn';

const isPhone = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android/i.test(userAgent) || /iPhone|iPod/.test(userAgent);
};

export const BentoGrid = ({ className, children }) => {
    const phone = isPhone();

    return (
        <div
            className={cn(
                'grid gap-4 max-w-7xl mx-auto',
                {
                    'grid-cols-1': phone,
                    'md:grid-cols-3 md:auto-rows-[18rem]': !phone,
                },
                className
            )}
            style={phone ? { width: '100%' } : {}}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({ className, title, description, link }) => {
    const phone = isPhone();

    return (
        <div
            className={cn(
                'rounded-xl group/bento transition duration-200 p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4',
                {
                    'w-full': phone,
                    'md:w-auto': !phone,
                },
                className
            )}
            style={phone ? { width: '100%' } : {}}
        >
            <div className="rounded-xl ml-2 mt-2 responsive-iframe-container" style={phone ? { width: '100%' } : {}}>
                <ReactPlayer url={link} width="100%" height={phone ? '180px' : '360px'} />
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

export const BentoGridItemLarge = ({ className, title, description, header, icon }) => {
    const phone = isPhone();

    return (
        <div
            className={cn(
                'rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4',
                {
                    'w-full': phone,
                    'md:col-span-2': !phone,
                    'md:w-auto': !phone,
                },
                className
            )}
            style={phone ? { width: '100%' } : {}}
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
