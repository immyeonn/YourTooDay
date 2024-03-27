import '../css/nav.css';

import home from '../images/icons/nav_home.png';
import search from '../images/icons/nav_search.png';
import mypage from '../images/icons/nav_person.png';

const Nav = () => {
    return (
        <div className="nav conainter">
            <ul className="nav-list">
                <li className="nav-item"><a href='../' className="nav-link"><img src={home} alt="home" /></a></li>
                <li className="nav-item"><a href="#" className="nav-link"><img src={search} alt="search" /></a></li>
                <li className="nav-item"><a href="#" className="nav-link"><img src={mypage} alt="mypage" /></a></li>
            </ul>
        </div>
    );
}

export default Nav;