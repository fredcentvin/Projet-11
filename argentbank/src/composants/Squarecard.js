

function Squarecard(){
    return(
        <div style={{display:'flex', flexDirection:'column', backgroundColor:'white', width:'350px', height:'220px', position:'absolute',right:'100px', top:'160px'}}>
            <p style={{fontSize:'24px', fontFamily:'Avenir, Helvetica, Arial, sans-serif', fontWeight:'bold', color:'#2c3e50',margin:'2px 0', padding:'30px 32px 0 32px'}}>No fees.</p>
            <p style={{fontSize:'24px', fontFamily:'Avenir, Helvetica, Arial, sans-serif', fontWeight:'bold',color:'#2c3e50',margin:'2px 0', padding:'0 32px 0 32px'}} >No minimum deposit.</p>
            <p style={{fontSize:'24px', fontFamily:'Avenir, Helvetica, Arial, sans-serif', fontWeight:'bold',color:'#2c3e50', margin:'2px 0', padding:'0 32px 0 32px'}} >High interest rates.</p>
            <p style={{fontSize:'18px', fontFamily:'Avenir, Helvetica, Arial, sans-serif', color:'#2c3e50',margin:'5px 0', padding:'15px 32px 0 32px'}} >Open a savings account with Argent Bank today!</p>
        </div>
    )
}

export default Squarecard