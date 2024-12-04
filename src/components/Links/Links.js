function Links({ href, text, aria }) {
    return(
        <a href={href} aria-label={aria}>{text}</a>
    );
};

export default Links;