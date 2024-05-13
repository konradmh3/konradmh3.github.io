import "../../style/MicroCenter.css";
import { useEffect } from 'react';

const MicroCenter = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, []);
    return (
        <div className='MicroContainer'>
        </div>
    )
}

export default MicroCenter;