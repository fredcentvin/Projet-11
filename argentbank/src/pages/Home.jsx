import React from "react";
import Banner from "../container/Banner"
import homeDatas from "../datas/homeDatas.json"
import ItemPromo from "../composants/ItemPromo"
import iconChat from "../asset/icones/iconChat.webp"
import iconMoney from "../asset/icones/iconMoney.webp"
import iconSecurity from "../asset/icones/iconSecurity.webp"



function Home() {
    const imageData = {
        "iconChat.webp": iconChat,
        "iconMoney.webp": iconMoney,
        "iconSecurity.webp": iconSecurity
    }
    return (
        <div>
            <main>
                <Banner />
                <section style={styles.section} >
                
                    {homeDatas.map((data) => (
                        <ItemPromo 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>

)

}
const styles={
    section:{
        display:'flex',
        flexDirection:'row',
        gap:'40px',
        margin:'30px 30px 0 30px'
    }
}
export default Home