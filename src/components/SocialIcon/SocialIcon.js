import Image from '../Image/Image.js';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import linkedin from '../../assets/images/linkedin.png';
import './SocialIcon.scss';

function SocialIcon({ link1, link2, link3 }) {
    return(
        <article className='socialIcons'>
            <a className='socialIcons__link' href={link1}>
                <Image src={fb} alt='Click here to visit our facebook page'/>
            </a>
            <a className='socialIcons__link' href={link2}>
                <Image src={insta} alt='Click here to visit our instagram page'/>
            </a>
            <a className='socialIcons__link' href={link3}>
                <Image src={linkedin} alt='Click here to visit our linkedin page'/>
            </a>
        </article>
    );
};

export default SocialIcon;