import Link from "next/link";
import "./matching-button.css";

function MatchingButton({link, text, full}) {

    let test = "https://google.com";
    let className = "matching-button" + (full ? " full" : "");

    return (
        <Link className={className} href={link}>
            {text}
        </Link>
    );
}

export default MatchingButton;