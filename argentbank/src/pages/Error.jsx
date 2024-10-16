
function Error() {
    return (
       <main>
          <section style={styles.section} >
             <h1 style={styles.h1} >404</h1>
             <p style={styles.p} >Oups...  Page not found</p>
          </section>
       </main>
    )
  }
  const styles={
   section:{
      backgroundColor:'#12002b',
      padding:'15% 0'
   },
   h1:{
      color:'white', 
      fontSize:'30px', 
      textAlign:'center'
   },
   p:{
      color:'white', 
      fontSize:'22px', 
      textAlign:'center'
   }
  }
  
 export default Error