// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up");
    const [prevScrollY, setPrevScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        console.log("cuurentScrollY" + currentScrollY)
        if (currentScrollY > prevScrollY) {
            setScrollDirection("down");
        } else if (currentScrollY < prevScrollY) {
            setScrollDirection("up");
        }

        setPrevScrollY(currentScrollY);
    }, [prevScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return scrollDirection;
};

export default useScrollDirection;
