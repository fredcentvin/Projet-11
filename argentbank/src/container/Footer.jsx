function Footer(){
    return(
        <div style={styles.div}>
            <p>Copyright 2020 Argent Bank</p>
        </div>
        )
}
const styles={
    div:{
        textAlign:'center', 
        fontSize:'16px', 
        color:'#2c3e50', 
        borderTop:"2px solid #ccc"
    }
}
export default Footer;