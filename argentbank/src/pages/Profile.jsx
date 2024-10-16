import React from "react"
import SmallButton from "../composants/SmallButton"
import Account from "../composants/Account"


function profile(){
    return(
        <div style={styles.div} >
             <section style={{color:'white', display:'flex', flexDirection:'column', margin:'0 0', alignItems:'center'}}>
                <h1 style={{fontSize:'32px', margin:'20px 0'}} >Welcome back<br/>
                    Tony Jarvis!
                </h1> 
                <SmallButton />
             </section>
             <Account />
             <Account />
             <Account />
        </div>
    )
}

const styles={
    div:{
        backgroundColor:'#12002b', 
        display:'flex', 
        flexDirection:'column', 
        gap:'30px', 
        position:'relative', 
        zIndex:'1', 
        height:'720px', 
        alignItems:'center'
    }
}
export default profile