import LargeButton from "./LargeButton"

function Account(){
    return(
        <article style={styles.article}>
        <div style={styles.div}> 
        <h2 style={styles.h2}>Argent Bank Checking </h2>
        <p style={styles.p}>$ 2,082.79</p>
        <h2 style={styles.h2}>Available Balance</h2>
        <LargeButton />
        </div>
        </article>
    )

}
const styles={
    article:{
        backgroundColor:'white', 
        display:'flex', 
        flexDirection:'row', 
        alignItems:'center', 
        width:'1150px', 
        justifyContent:'space-between',
        padding:'0 30px'
    },
    div:{
         gap:'12px', 
         padding:'12px 0'
    },
    h2:{
        color:'#2c3e50',
        fontSize:'18px',
        margin:'0 0', 
        fontWeight:'400'
    },
    p:{
        fontSize:'40px', 
        fontWeight:'600',
        color:'#2c3e50',
        margin:'0 0'
    }
}
export default Account