import "../../style/KeyLogger.css";
import { useEffect } from "react";
import { createBrowserHistory } from "history";


const KeyLogger = () => {
    const history = createBrowserHistory();
    useEffect(() => {
        // here lets create an event listener that listens for the back button to be pressed
        // this will be used to go back to the previous page
        const handleBack = () => {
            history.back();
        };
        window.addEventListener('popstate', handleBack);
        return () => {
            window.removeEventListener('popstate', handleBack);
        }
    }, [])


    return (
        <div className='keyLoggerContainer'>
        </div>
    )
}

export default KeyLogger;