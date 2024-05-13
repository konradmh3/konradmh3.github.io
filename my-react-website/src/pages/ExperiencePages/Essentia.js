import "../../style/Essentia.css";
import { useEffect } from 'react';

const Essentia = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, []);
    return (
        <div className='EssentiaContainer'>
        </div>
    )
}

export default Essentia;