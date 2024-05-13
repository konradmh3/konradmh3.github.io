import "../../style/ASI.css";
import { useEffect } from 'react';

const ASI = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, []);
    return (
        <div className='ASIContainer'>
        </div>
    )
}

export default ASI;