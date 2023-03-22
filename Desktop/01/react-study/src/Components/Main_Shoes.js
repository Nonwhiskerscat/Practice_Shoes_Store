import shoes from '../Pages/Shoes';
import '../css/Main_Shoes.css';
import { Link } from 'react-router-dom';


function Main_Shoes() {

    let img_src=[];

    for(let i=0;i<shoes.length;i++) {
        img_src.push(`images/shoes${i}.jpg`);
    }

    console.log(img_src);

    const kitty=shoes.map(function(data, idx) {
        return(
            <div key={idx}>
                <img src={img_src[idx]}></img>
                <h5>{shoes[idx].name}</h5>
                <p>{shoes[idx].price}</p>
            </div>
        )
    })

    return (
        <div>
            <div className="shoes_flex">
                {kitty}
            </div>
        </div>
    );
}

export default Main_Shoes;