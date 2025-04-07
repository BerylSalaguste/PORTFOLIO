import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () =>{
    return(
        <div className="mainFooterContainer">
            <div className="footerCopyrightSection">
                <p className="copyightTxt">© 2025 by Beryl Rose Salaguste</p>
            </div>
            <div className="footerImmediateContact">
                <p className="mobile"><FontAwesomeIcon icon={faPhone}/> +639454932554</p>
                <p className="email">berylrosesalaguste@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer