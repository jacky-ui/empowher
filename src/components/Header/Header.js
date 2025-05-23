import Image from '../Image/Image';
import empowherLogo from '../../assets/images/empowher logo.png';
import tbhfLogo from '../../assets/images/25TBHF_Logo 1.png';
import Links from '../Links/Links';
import twentyFive from '../../assets/images/25.png';
import './Header.scss';

function Header() {
    return(
        <header className='header'>
            <div>
                <Image src={empowherLogo} alt='empowher'/>
                <Image src={tbhfLogo} alt='twenty five to build her future'/>
                <div className='header__mainText'>HELP OUR GIRLS,<br aria-hidden='true'/> CHANGE A LIFE.</div>
                <p className='header__paragraph'>Your donation of $25 a month can change the life of hundreds of young<br aria-hidden='true'/> minority women and girls in underserved areas and help EmpowHERto become strong,<br aria-hidden='true'/> independent and confident leaders of tomorrow - Build HER Future!</p>
                <div className='header__links'>
                    {/*<Links href='https://www.zeffy.com/donation-form/25-to-build-her-giving-tuesday' text='To Toronto' aria='Click here to donate to Toronto location'/>*/}
                    <Links href='https://givebutter.com/25toBuildHER' text='To Fort Lauderdale' aria='Click here to donate to Fort Lauderdale location'/>
                </div>
            </div>
            <Image src={twentyFive} alt=''/>
        </header>
    );
};

export default Header;