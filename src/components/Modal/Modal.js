import './Modal.scss';
import popupImage from '../../assets/images/popup-image.png';

function Modal({ isOpen, setIsOpen, modalRef }) {

    return(
        <dialog ref={modalRef} open={isOpen}  className='popupEvent'>
            <div>
                <div>
                    <p>Join us for our 25 to BuildHER event</p>
                    <a href="https://www.zeffy.com/en-CA/ticketing/empowherto-presents-25-to-build-her" aria-label='Find out how you can join. Opens in same tab.'>Join now</a>
                </div>
                <img src={popupImage} alt=''/>
            </div>
            <button onClick={() => setIsOpen(false)} className='popupEvent--close'>X</button>
        </dialog>
    )
};

export default Modal;