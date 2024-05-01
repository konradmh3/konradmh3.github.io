import { useEffect } from "react";
import "../../style/Stick.css";


const Stick = () => {
    useEffect(() => {
        // here lets create an event listener that listens for the back button to be pressed
        // this will be used to go back to the previous page
        const handleBack = () => {
            window.history.back();
        };
        window.addEventListener('popstate', handleBack);
        return () => {
            window.removeEventListener('popstate', handleBack);
        }
    }, [])
    // the above is to test using window.history.back() to go back to the previous page



    return (
        <div className='stickContainer'>
        </div>
    )
}

export default Stick;