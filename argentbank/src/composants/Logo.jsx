import argentBankLogo from "../asset/images/argentBankLogo1.webp"
import { Link } from 'react-router-dom'

function Logo() {
    return(
        <div>
            <Link to="/">
                
                <img src= {argentBankLogo} alt="logo de la banque" style={styles.img}></img>
            
            </Link>
        </div>
    )
}
const styles= {
    img : {
        height:'100%',
        marginLeft:'10px'
    }
}
export default Logo