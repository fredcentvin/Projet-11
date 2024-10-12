import React from "react"

function profile(){
    return(
        <div style={{backgroundColor:'#12002b', display:'flex', flexDirection:'column', gap:'30px', position:'relative', zIndex:'1', height:'720px', alignItems:'center'}} >
             <section style={{color:'white', display:'flex', flexDirection:'column', margin:'0 0', alignItems:'center'}}>
                <h1 style={{fontSize:'32px', margin:'20px 0'}} >Welcome back<br/>
                    Tony Jarvis!
                </h1> 
                <button style={{backgroundColor:'#00bc77', color:'white', fontSize:'13px',padding:'12px 12px'}}>Edit Name</button>
             </section>
             <section style={{backgroundColor:'white', display:'flex', flexDirection:'row', alignItems:'center', width:'1150px', justifyContent:'space-between',padding:'0 30px'}} >
                <div style={{gap:'12px', padding:'12px 0'}} >
                    <h2 style={{color:'#2c3e50',fontSize:'18px',margin:'0 0', fontWeight:'400'}} >Argent Bank Checking (x8349)</h2>
                    <p style={{fontSize:'40px', fontWeight:'600',color:'#2c3e50' ,margin:'0 0'}}>$ 2,082.79</p>
                    <h2 style={{color:'#2c3e50',fontSize:'18px',margin:'0 0', fontWeight:'400'}} >Available Balance</h2>
                </div>
                <div>
                <button style={{backgroundColor:'#00bc77', borderColor:'#00bc77', color:'white', fontSize:'16px', padding:'10px 30px'}}>View Transactions</button>
                </div>
             </section>
             <section style={{backgroundColor:'white', display:'flex', flexDirection:'row',alignItems:'center', width:'1150px', justifyContent:'space-between',padding:'0 30px'}} >
                <div style={{gap:'12px', padding:'12px 0'}}>
                    <h2 style={{color:'#2c3e50',fontSize:'18px',margin:'0 0', fontWeight:'400'}} >Argent Bank Savings (x6712)</h2>
                    <p style={{fontSize:'40px',color:'#2c3e50', fontWeight:'600' ,margin:'0 0'}}>$ 10,928.42</p>
                    <h2 style={{color:'#2c3e50',fontSize:'18px',margin:'0 0', fontWeight:'400'}} >Available Balance</h2>
                </div>
                <div>
                <button style={{backgroundColor:'#00bc77', borderColor:'#00bc77', color:'white', fontSize:'16px', padding:'10px 30px'}}>View Transactions</button>
                </div>
             </section>
             <section style={{backgroundColor:'white', display:'flex', flexDirection:'row',alignItems:'center', width:'1150px', justifyContent:'space-between',padding:'0 30px'}} >
                <div style={{gap:'12px', padding:'12px 0'}}>
                    <h2 style={{color:'#2c3e50',fontSize:'18px',margin:'0 0', fontWeight:'400'}} >Argent Bank Credit Card (x8349)</h2>
                    <p style={{fontSize:'40px',color:'#2c3e50', fontWeight:'600' ,margin:'0 0'}}>$ 184.30</p>
                    <h2 style={{color:'#2c3e50',fontSize:'18px',margin:'0 0', fontWeight:'400'}} >Available Balance</h2>
                </div>
                <div>
                <button style={{backgroundColor:'#00bc77', borderColor:'#00bc77', color:'white', fontSize:'16px', padding:'10px 30px'}}>View Transactions</button>
                </div>
             </section>
            </div>
    )


}
export default profile