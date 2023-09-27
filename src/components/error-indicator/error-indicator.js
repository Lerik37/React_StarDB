import icon from './death-star.png';
import './error-indicator.css';

const ErrorIndicator = () => {

    return (
            <div className="error-indicator">
                <img src={icon} alt="error icon"/>
                <div className="boom">BOOM!</div>
                <div>
                    Something has gone terribly wrong!
                </div>
                <div>
                    (but we already sent droids to fix it)
                </div>
            </div>
    )
}

export default ErrorIndicator;