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
                <StepIcons src={letter} alt='' header='Spread the Word' 
                    text={
                        <>
                            <a href="https://forms.monday.com/forms/5a88e7f55f2ed83466b7733e8cefa525?r=apse2" aria-label="Click here to signup for our newsletter">Share our mission with your friends, family, and network.</a>
                        </>
                    }
                />
                <StepIcons src={present} alt='' header='Volunteer or Partner' 
                    text={
                        <>
                            <a href="https://forms.monday.com/forms/cbd05420e5d88509fc5426decf7d51a2?r=apse2" aria-label="Click here to volunteer">Get involved and make a lasting impact.</a>
                        </>
                    }
                />
                <StepIcons src={letter} alt='' header='Mentorship' 
                    text={
                        <>
                            Consider becoming a mentor for women and girls in our community.{' '}
                            <a href="https://forms.monday.com/forms/7853812c331bcec5a1f80d815118afb4?r=apse2" aria-label="Click here to mentor">Sign up here.</a>
                        </>
                    }
                />
            </article>
        </section>
    );
};

export default Section2;