import Image from "../Image/Image.js";
import './StepIcons.scss';

function StepIcons({ src, alt, header, text }) {
    return(
        <div className="stepIcons">
            <Image src={src} alt={alt}/>
            <div>{header}</div>
            <p>{text}</p>
        </div>
    )
};

export default StepIcons;