import Logo from "../composants/Logo"
import Form from "../composants/Form"

function Header() {
    return(
    <div style={{display:'flex', height:'55px', flexDirection:'row',justifyContent:'space-between', padding:'5px 15px'}}>
        <Logo />
        <Form />
    </div> 
    )}

    export default Header;