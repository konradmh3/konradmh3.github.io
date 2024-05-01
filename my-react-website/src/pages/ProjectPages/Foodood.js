import "../../style/Foodood.css";
import BurgerCanvas from "../../scenes/BurgerScene";
import { useEffect } from "react";
import { createBrowserHistory } from "history";


const Foodood = () => {
    const history = createBrowserHistory();
    // history.back();
    // the above is to test on safari with createBrowserHistory
    //the above works automatically when you join page but not when
    //you click the back button
    //the below works when you click the back button
    useEffect(() => {
        window.onpopstate = function(event) {
            history.back();
        }
    }, [])

    // Found a different solution then the above but might want to employ this solution and test which is better


    return (
        <div className='foodoodContainer'>
            <BurgerCanvas />
        </div>
    )
}

export default Foodood;