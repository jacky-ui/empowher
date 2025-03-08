import './Modal.scss';
import popupImage from '../../assets/images/popup-image.png';

function Modal() {
    return(
        <>
            <dialog className='popupEvent'>
                <div>
                    <p>Join us for our 25 to BuildHER event</p>
                    <a href="https://www.zeffy.com/en-CA/ticketing/empowherto-presents-25-to-build-her">Join now</a>
                </div>
                <img src={popupImage} alt=''/>
            </dialog>
        </>
    )
};

export default Modal;