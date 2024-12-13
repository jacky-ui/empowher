import './Donors.scss';
import tdLogo from '../../assets/images/Toronto-Dominion_Bank_logo 1.png';
import cibcLogo from '../../assets/images/CIBC_logo_2021 1.png';
import datacampLogo from '../../assets/images/datacamp.png';
import localityLogo from '../../assets/images/locality.png';
import oipLogo from '../../assets/images/OIP 1.png';
import ipsenLogo from '../../assets/images/Ipsen_logo 1.png';
import blgLogo from '../../assets/images/blg.png';
import Image from '../Image/Image.js';

function Donors() {
    const logos = [
        {
            logo: datacampLogo,
            alt: 'Datacamp',
        },
        {
            logo: cibcLogo,
            alt: 'CIBC',
        },
        {
            logo: localityLogo,
            alt: 'Locality Bank',
        },
        {
            logo: tdLogo,
            alt: 'TD BANK',
        },
        {
            logo: ipsenLogo,
            alt: 'IPSEN Innovation for patient care',
        },
        {
            logo: oipLogo,
            alt: 'Community Foundation of Broward',
        },
        {
            logo: blgLogo,
            alt: 'Borden Ladner Gervais',
        }
    ]
    return(
        <section className='donorLogos'>
            <ul className='donorLogos__lists'>
                {logos.map((logo) => (
                    <li key={logo.logo}>
                        <Image 
                            src={logo.logo}
                            alt={logo.alt}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
};

export default Donors;