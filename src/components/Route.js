import {useState, useEffect} from "react";

const Route = ({path, children}) => 
{
    // Only Reason: If state changes Route component rerenders.
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => 
    {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener("popstate", onLocationChange);  

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        }
    }, [])
    return currentPath === path ? children : null;
    // OR below also works
    // return window.location.pathname === path ? children : null;
}

export default Route;