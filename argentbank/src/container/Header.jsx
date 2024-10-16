import Logo from "../composants/Logo"
import Form from "../composants/Form"

function Header() {
    return(
    <div style={styles.div}>
        <Logo />
        <Form />
    </div> 
    )
}
const styles={
    div:{
        display:'flex', 
        height:'55px', 
        flexDirection:'row',
        justifyContent:'space-between', 
        padding:'5px 15px'
    }
}
    export default Header;