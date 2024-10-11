import Squarecard from "../composants/Squarecard"
import bankTree from "../asset/images/bankTreeajuste1.webp"

function Banner () {
    return(
        <div style={{display:'block', height:'400px'}}>
            <img src={bankTree} alt="un plant d'arbre" style={{position:'relative', objectFit:'cover', height:'400px',width:'1520px'}} />
            <Squarecard />
        </div>
    )
    }
    export default Banner;