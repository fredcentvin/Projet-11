import argentBankLogo from "../asset/images/argentBankLogo1.webp"
import { Link } from 'react-router-dom'

function Logo() {
    return(
        <div>
            <Link to="/">
                <a href="../pages/Home.jsx">
                <img src= {argentBankLogo} alt="logo de la banque" style={{height:'100%',marginLeft:'10px'}}></img>
                </a>
            </Link>
        </div>
    )
}
export default Logo