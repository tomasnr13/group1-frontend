import zaraLogo from "../../assets/images/zara-logo.svg";
import { Placeholder } from "../placeholder";
import "./style.css";

export const Header = () => {

    const onClick = () => {
        window.location.reload();
    }

    return (
        <div className="header">
            <div className="header__logo">
                <img src={zaraLogo} alt="Zara" data-testid="zara-logo" onClick={onClick} />
            </div>
            <div className="header__avatar">
                {/* TODO: Exercise 1 - Replace the Placeholder component with our Avatar component */}
                <Placeholder width={30} height={30} />
            </div>
        </div>
    )
}