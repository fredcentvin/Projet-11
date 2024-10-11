import React from "react";
import Banner from "../container/Banner"
import homeDatas from "../datas/homeDatas.json"
import Item from "../composants/Item"
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
                <section style={{display:'flex',flexDirection:'row', gap:'40px',margin:'30px 30px 0 30px',}} >
                    {/* <h2 className='sr-only'></h2> */}
                    {/* Return items from json file with map */}
                    {homeDatas.map((data) => (
                        /* Return item component */
                        <Item 
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
export default Home