import "../../style/KeyLogger.css";
import { useEffect } from 'react';

const KeyLogger = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, []);

    return (
        <div className='keyLoggerContainer'>
        </div>
    )
}

export default KeyLogger;