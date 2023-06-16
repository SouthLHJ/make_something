
import { BeatLoader, ClipLoader  } from 'react-spinners';

const PopupLoader = ({children})=>{

    return (
        <div className={`loading__img `}>
            <BeatLoader color="#2879DE" margin={2} size={30} />
            {children}
        </div>
    )
}

export default PopupLoader ; 