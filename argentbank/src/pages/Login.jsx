import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

function Login(){
    return( 
        <div style={{backgroundColor:'#12002b', display:'flex', flexDirection:'column', position:'relative', zIndex:'1', height:'640px', alignItems:'center'}} >
            
            <div style={{display:'flex',flexDirection:'column', gap:'12px', backgroundColor:'white', position:'relative', width:'240px', height:'350px', padding:'20px 30px 0 30px', marginTop:'50px'}}>
            
                <div style={{display:'flex', color:'#2c3e50', marginTop:'10px', marginBottom:'0', justifyContent:'center'}}>
                  
                        <i style={{fontSize:'18px', color:'#2c3e50'}} ><FontAwesomeIcon icon={faCircleUser} /></i>
                  
                </div>
                
                    <p style={{fontSize:'24px',fontWeight:'500', textAlign:'center',color:'#2c3e50', margin:'0 0'}}>Sign In</p>
                
                <form id="signinEmail" style={{display:'flex', justifyContent:'center'}} >
                    <div style={{display:'flex', flexDirection:'column', alignItems:'flexstart'}}>
                        <label htmlFor="username" style={{color:'#2c3e50', fontSize:'16px', fontWeight:'600', fontFamily:'Avenir, Helvetica, Arial, sans-serif'}} >Username</label>
                        <input type="email" id="username" style={{ height:'30px', fontSize:'17px'}} value={''} onChange={''}/>
                    </div>
                </form>
                <form id="signinPassword" style={{display:'flex', justifyContent:'center'}} >
                    <div style={{ display:'flex', flexDirection:'column', alignItems:'flexstart'}}>
                        <label htmlFor="passwword" style={{color:'#2c3e50', fontWeight:'600', fontSize:'16px', fontFamily:'Avenir, Helvetica, Arial, sans-serif'}} >Password</label>
                        <input type="password" id="password" style={{ height:'30px',fontSize:'17px'}}  value={''} onChange={''}/>
                    </div>
                </form>
                <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginBottom:'15px'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <form>
                            <div style={{display:'flex',flexDirection:'row', gap:'8px'}} >
                                <input type="checkbox" id="rememberMe" name="remember" value=""/>
                                <label htmlFor="subscribeNews">Remember me</label>
                            </div>
                            <div>
                                <button type="submit" style={{backgroundColor:'#00bc77', border:'2px solid', fontFamily:'Avenir, Helvetica, Arial, sans-serif', borderColor:'#00bc77', color:'white', fontWeight:'bold', fontSize:'18px', padding:'5px 75px', marginTop:'15px'}}>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}
export default Login