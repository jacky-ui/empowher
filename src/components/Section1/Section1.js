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
                    <h2 className='supportSection__heading'>Your Support Makes a Difference</h2>
                    <p className='supportSection__text'>Your generosity allows us to offer six core empowHERto programs — providing hands-on career mentorship, digital empowerment training, mental health coaching, financial literacy, and more, all free for young minority women and girls.</p>
                </div>
                <Image src={supportImage} alt=''/>
                </article>
                <div className='supportSection--line'></div>
            </div>
        </section>
    );
};

export default Section1;