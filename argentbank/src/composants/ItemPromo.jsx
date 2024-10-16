import React from "react"


function ItemPromo ({ image, descriptionImage, title, description }) {
    return (
            <div style={styles.div} >
                <img src={image} alt={descriptionImage} style={styles.img}/>
                <h3 style={styles.h3} >{title}</h3>
                <p style={styles.p} >{description}</p>
            </div>
    )
}
const styles={
    div:{
        flex:'1', 
        flexDirection:'column', 
        width:'500px',
        padding:'0 15px 15px 15px'
    },
    img:{
        display:'block',
        marginLeft:'140px', 
        height:'100px',
        width:'100px',
        border:'10px solid #00bc77',
        borderRadius:'50%',
        padding:'1rem',
        alignContent:'center'
    },
    h3:{
        textAlign:'center', 
        fontSize:'22px', 
        color:'#222', 
        fontWeight:'bold', 
        marginBottom:'10px'
    },
    p:{
        fontSize:'16px', 
        // color:'#2c3e50'
    }
}
export default ItemPromo