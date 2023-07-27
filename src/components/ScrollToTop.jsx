import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top of page when the route / url changes
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const body = document.querySelector('#root');
        body.scrollIntoView({ behavior: "smooth", block: "start"});
    }, [pathname]);

    return null;
}

export default ScrollToTop;
