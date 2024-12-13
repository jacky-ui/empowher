import Image from '../Image/Image';
import ripple from '../../assets/images/ripple.png';
import './Section4.scss';

function Section4() {
    return(
        <section className='rippleSection'>
            <div>
                <article>
                <div>
                    <h2 className='rippleSection__heading'>THE RIPPLE EFFECT<br aria-hidden='true'/> OF <span className='character-break'>EMPOWER&shy;MENT</span><br aria-hidden='true'/> IS PRICELESS.</h2>
                    <p className='rippleSection__text'>EmpowHERto is a women-led organization with the goal<br aria-hidden='true'/> of positively impacting and uplifting minority and<br aria-hidden='true'/> women girls through free life skills programming with a<br aria-hidden='true'/> focus on financial literacy, leadership skills, mentorship<br aria-hidden='true'/> and mental health.<br aria-hidden='true'/><br aria-hidden='true'/> At EmpowHERto, we’re dedicated to empowering young<br aria-hidden='true'/> minority women and girls between the ages of 14 and<br aria-hidden='true'/> 21 by providing them with the skills and resources to<br aria-hidden='true'/> thrive, overcome systemic barriers and beat the<br aria-hidden='true'/> statistics stacked against them.</p>
                </div>
                <Image src={ripple} alt=''/>
                </article>
            </div>
        </section>
    );
};

export default Section4;