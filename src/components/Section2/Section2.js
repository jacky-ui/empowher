import present from '../../assets/images/present.png';
import letter from '../../assets/images/letter.png';
import Image from '../Image/Image.js';
import './Section2.scss';
import StepIcons from '../StepIcons/StepIcons.js';

function Section2() {
    return(
        <section className='helpSection'>
            <h2>Here's how you can help</h2>
            <p>Help us in inspiring and equiping young minority women and girls to become</p>
            <article className='helpSection__icons'>
                <StepIcons src={present} alt='' header='Make a donation' text='Your gift goes directly to empowering young women and girls through free programming.'/>
                <StepIcons src={letter} alt='' header='Spread the Word' text='Share our mission with your friends, family, and network.'/>
                <StepIcons src={present} alt='' header='Volunteer or Partner' text='Get involved and make a lasting impact.'/>
                <StepIcons src={letter} alt='' header='Mentorship' text='Consider becoming a mentor for women and girls in our community.'/>
            </article>
        </section>
    );
};

export default Section2;