import '../css/SubPage.css'
import shoes from './Shoes';

const button_style= {
    "padding": "0 0.3rem",
    "textAlign": "center",
    "marginTop": "1rem"
}

function SubPage(props) {
    const img_src=`images/shoes${props.name}.jpg`;
    return (
        <div>
            <div className = 'shoe_flex'>
                <img src={img_src} />
                <div className='shoe_info'>
                    <h6 className='commerce'>{shoes[props.name].name}</h6>
                    <p className='made'>Born in {shoes[props.name].born}</p>
                    <p className='price'>{shoes[props.name].price}</p>
                    <button style={button_style}>주문하기</button>
                </div>
            </div>
        </div>    
    );
}

export default SubPage;