import Image from '../Image/Image';
import Links from '../Links/Links';
import twentyFive from '../../assets/images/25.png';
import './Section3.scss';

function Section3() {
    return(
        <section className="donateSection">
            <div>
                <h2>Donate to either or both of our organizations</h2>
                <div className='donateSection__links'>
                    <Links href='https://buy.stripe.com/8wMg205lFaJrbD26oB' text='To Toronto'/>
                    <Links href='https://givebutter.com/25toBuildHER' text='To Fort Lauderdale'/>
                </div>
            </div>
            <div>
                <Image src={twentyFive} alt=''/>
            </div>
        </section>
    );
};

export default Section3;