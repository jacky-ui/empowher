import Image from "../Image/Image.js";

function StepIcons({ src, alt, header, text }) {
    return(
        <div>
            <Image src={src} alt={alt}/>
            <div>{header}</div>
            <p>{text}</p>
        </div>
    )
};

export default StepIcons;