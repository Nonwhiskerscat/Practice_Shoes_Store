import '../css/Header_small_gnb.css'
import { Link } from 'react-router-dom';
// import '../nStyle/Header_small_gnb.scss';


function Header_small_gnb() {

    return (
        <>
            <div className='gnb_small'>
                <ul>
                    <li><Link to="/black">White & Black</Link></li>
                    <li><Link to="/red">Red Knit</Link></li>
                    <li><Link to="/gray">Gray Yordan</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Header_small_gnb;