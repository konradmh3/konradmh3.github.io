import "../../style/Foodood.css";
import BurgerCanvas from "../../scenes/BurgerScene";
import { useEffect } from "react";
import { createBrowserHistory } from "history";


const Foodood = () => {
    const history = createBrowserHistory();
    history.back();
    // the above is to test on safari with createBrowserHistory


    return (
        <div className='foodoodContainer'>
            <BurgerCanvas />
        </div>
    )
}

export default Foodood;