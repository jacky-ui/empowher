import Image from '../Image/Image';
import empowherLogo from '../../assets/images/empowher logo.png'
import './Footer.scss';
import SocialIcon from '../SocialIcon/SocialIcon';
import Links from '../Links/Links';

function Footer() {
    return(
        <footer className='footer'>
            <Image src={empowherLogo} alt=''/>
            <article>
                <div className='footer__contact'>
                    <div className='footer__aboutus'>
                        <h3>About Us</h3>
                        <p>EmpowHERto is dedicated to partnering with minority girls and young women from underserved communities. Our mission is to empower them with the necessary tools to thrive, overcome systemic barriers, and beat the statistics stacked against them.</p>
                    </div>
                    <div className='footer__location'>
                        <h3>Contact Us:</h3>
                        <div>
                            <div className="location">
                                <div>Toronto:</div>
                                <a href="tel:+1 647 370 1231">+1 647 370 1231</a>
                                <a href="info@empowherto.org">info@empowherto.org</a>
                                <p>2967 Dundas St W,<br /> Toronto, ON, M6P 1Z2</p>
                                <SocialIcon
                                    link1='https://www.facebook.com/EmpowHERto/'
                                    link2='https://www.instagram.com/empowherto'
                                    link3='https://www.linkedin.com/company/empowherto'
                                />
                            </div>
                            <div className="location">
                                <div>Fort Lauderdale:</div>
                                <a href="tel:+1 954 656 2346">+1 954 656 2346</a>
                                <a href="mailto:info@empowhertofl.org">info@empowhertofl.org</a>
                                <p>300 SW 1st Ave Suite 155,<br/> Fort Lauderdale, FL, 33301</p>
                                <SocialIcon
                                    link1='https://www.facebook.com/EmpowHERto/'
                                    link2='https://www.instagram.com/empowhertofl/'
                                    link3='https://www.linkedin.com/company/empowhertofl'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__donate'>
                    <div>Donate to either or both of our organizations</div>
                    <div className='footer__donate--link'>
                        <Links href='https://www.zeffy.com/donation-form/25-to-build-her-giving-tuesday' text='To Toronto'/>
                        <Links href='https://givebutter.com/25toBuildHER' text='To Fort Lauderdale'/>
                    </div>
                </div>
            </article>
        </footer>
    );
};

export default Footer;