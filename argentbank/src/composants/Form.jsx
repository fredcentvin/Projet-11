import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function loginForm(){
    return(
        <div style={styles.div}>
           
                <Link to="Login" stye={styles.link}>
                    <i style={styles.i} ><FontAwesomeIcon icon={faCircleUser} /></i>
                </Link>
                <Link to="Profile">
                    <p style={styles.p} >Sign In</p>
                </Link>
        
        </div>
    )
}

const styles={
    div:{
        display:'flex',
        flexDirection:'row', 
        marginRight:'20px',
        alignItems:'center'
    },
    link:{
        display:'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap: '8px'
    },
    i:{
        fontSize:'18px', 
        color:'#2c3e50'
    },
    p:{
        fontSize:'16px', 
        fontFamily:'Avenir, Helvetica, Arial, sans-serif', 
        color:'#2c3e50', 
        fontWeight:'bold'
    }
}
export default loginForm