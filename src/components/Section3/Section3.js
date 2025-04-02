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
                    {/*<Links href='https://www.zeffy.com/donation-form/25-to-build-her-giving-tuesday' text='To Toronto' aria='Click here to donate to Toronto location'/>*/}
                    <Links href='https://givebutter.com/25toBuildHER' text='To Fort Lauderdale' aria='Click here to donate to Fort Lauderdale'/>
                </div>
            </div>
            <div>
                <Image src={twentyFive} alt=''/>
            </div>
        </section>
    );
};

export default Section3;