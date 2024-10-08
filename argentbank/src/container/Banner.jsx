import Squarecard from "../composants/Squarecard"

function Banner () {
    return(
        <div className= 'Kas-banner'>
            <img src={"../src/img/bank-Tree.jpeg"} alt='côte rocheuse' />
            <Squarecard />
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
    }
    export default Banner