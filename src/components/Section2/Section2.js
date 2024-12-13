import donation from '../../assets/images/donation.png';
import spreadWord from '../../assets/images/spread word.png';
import volunteer from '../../assets/images/volunteer.png'
import mentorship from '../../assets/images/mentorship.png';
import StepIcons from '../StepIcons/StepIcons.js';
import './Section2.scss';

function Section2() {
    return(
        <section className='helpSection'>
            <h2>Here's how you can help</h2>
            <p>Help us in inspiring and equiping young minority women and girls</p>
            <article className='helpSection__icons'>
                <StepIcons src={donation} alt='' header='Make a donation' 
                text={
                    <>  
                        Your gift goes directly to empowering young women and girls through free programming.{' '}
                        <a href="/assets/Programming.pdf" aria-label="Click here to learn about our programming" target="_blank" rel="noopener noreferrer">Learn about our programming here.</a>
                    </>
                }
                />
                <StepIcons src={spreadWord} alt='' header='Spread the Word' 
                    text={
                        <>
                            Share our mission with your friends, family, and network.{' '}
                            <a href="https://forms.monday.com/forms/5a88e7f55f2ed83466b7733e8cefa525?r=apse2" aria-label="Click here to signup for our newsletter">Signup for newsletter</a>
                        </>
                    }
                />
                <StepIcons src={volunteer} alt='' header='Volunteer or Partner' 
                    text={
                        <>
                            Get involved and make a lasting impact.{' '}
                            <a href="https://forms.monday.com/forms/cbd05420e5d88509fc5426decf7d51a2?r=apse2" aria-label="Click here to volunteer">Get involved now</a>
                        </>
                    }
                />
                <StepIcons src={mentorship} alt='' header='Mentorship' 
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