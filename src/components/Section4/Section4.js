import Image from '../Image/Image';
import ripple from '../../assets/images/ripple.png'
import './Section4.scss';

function Section4() {
    return(
        <section className='rippleSection'>
            <div>
                <article>
                <div>
                    <h2 className='rippleSection__heading'>THE RIPPLE EFFECT<br /> OF EMPOWERMENT<br /> IS PRICELESS.</h2>
                    <p className='rippleSection__text'>empowHERto is a women-led organization with the goal of positively impacting and uplifting minority and women girls through free life skills programming with a focus on financial literacy, leadership skills, mentorship and mental health.<br/><br/> At empowHERto, we’re dedicated to empowering young minority women and girls between the ages of 14 and 21 by providing them with the skills and resources to thrive, overcome systemic barriers and beat the statistics stacked against them.</p>
                </div>
                <Image src={ripple} alt=''/>
                </article>
            </div>
        </section>
    );
};

export default Section4;