import Squarecard from "../composants/Squarecard"
import bankTree from "../asset/images/bankTreeajuste1.webp"

function Banner () {
    return(
        <div style={styles.div}>
            <img src={bankTree} alt="un plant d'arbre" style={styles.img} />
            <Squarecard />
        </div>
    )
    }
    const styles={
        div:{
            display:'block', 
            height:'400px'
        },
        img:{
            position:'relative', 
            objectFit:'cover', 
            height:'400px',
            width:'1520px'
        }
    }
    export default Banner;