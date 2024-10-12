import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function loginForm(){
    return(
        <div style={{display:'flex',flexDirection:'row', marginRight:'20px'}}>
            <a href="../pages/Profile.jsx" style={{display:'flex', flexDirection:'row', gap:'8px', alignItems:'center'}} >
                <Link to ="Login">
                    <i style={{fontSize:'18px', color:'#2c3e50'}} ><FontAwesomeIcon icon={faCircleUser} /></i>
                </Link>
                <Link to ="Profile">
                    <p style={{fontSize:'16px', fontFamily:'Avenir, Helvetica, Arial, sans-serif', color:'#2c3e50', fontWeight:'bold'}} >Sign In</p>
                </Link>
            </a>
        </div>
    )
}
export default loginForm