import Link from "next/link";
import "./matching-button.css";

function MatchingButton({link, full, children}) {

    let test = "https://google.com";
    let className = "matching-button" + (full ? " matching-button-full" : "");

    return (
        <Link className={className} href={link}>
            {children}
        </Link>
    );
}

export default MatchingButton;