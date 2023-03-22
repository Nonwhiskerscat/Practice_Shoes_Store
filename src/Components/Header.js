import '../css/Header.css'

function Header({children}) {
    return (
        <div>
            <h1 className='big_title'>Shoes Store</h1>
            {children}
            <div className='back_img'></div>

        </div>
    );
}

export default Header;