import React from "react"


function Item ({ image, descriptionImage, title, description }) {
    return (
            <div style={{flex:'1', flexDirection:'column', width:'500px',padding:'0 15px 15px 15px'}} >
                <img src={image} alt={descriptionImage} style={{display:'block',marginLeft:'140px', height:'100px',width:'100px',border:'10px solid #00bc77',borderRadius:'50%',padding:'1rem',alignContent:'center'}}/>
                <h3 style={{textAlign:'center', fontSize:'22px', color:'#222', fontWeight:'bold', marginBottom:'10px'}} >{title}</h3>
                <p style={{fontSize:'16px', color:'#2c3e50'}} >{description}</p>
            </div>
    )
}

export default Item