import Image from '../Image/Image';
import supportImage from '../../assets/images/support image.png';
import './Section1.scss';

function Section1() {
    return(
        <section className='supportSection'>
            <div>
                <div className='supportSection--line'></div>
                <article>
                <div>
                    <h2 className='supportSection__heading'>YOUR SUPPORT<br aria-hidden='true'/> MAKES A<br aria-hidden='true'/> DIFFERENCE.</h2>
                    <p className='supportSection__text'>Your generosity allows us to offer six core<br aria-hidden='true'/> empowHERto programs — providing hands-on<br aria-hidden='true'/> career mentorship with AdvisHER; coding & digital<br aria-hidden='true'/> empowerment training with CodeHER & Data4HER;<br aria-hidden='true'/> coaching in mental health and well-being through<br aria-hidden='true'/> EmbraceHER; learning to break negative financial<br aria-hidden='true'/> habits with Finace4HER; and empowering leadership<br aria-hidden='true'/> & entrepreneurship through FoundHER  — all offered<br aria-hidden='true'/> free to young minority women and girls. </p>
                </div>
                <Image src={supportImage} alt=''/>
                </article>
                <div className='supportSection--line'></div>
            </div>
        </section>
    );
};

export default Section1;