import './Modal.scss';
import popupImage from '../../assets/images/popup-image.png';
import { useState } from 'react';


function Modal() {
    const [isModalEnabled, setIsModalEnabled] = useState(false);
    return(
        <dialog className='popupEvent'>
            <div>
                <div>
                    <p>Join us for our 25 to BuildHER event</p>
                    <a href="https://www.zeffy.com/en-CA/ticketing/empowherto-presents-25-to-build-her">Join now</a>
                </div>
                <img src={popupImage} alt=''/>
            </div>
            <button className='popupEvent--close'>X</button>
        </dialog>
    )
};

export default Modal;