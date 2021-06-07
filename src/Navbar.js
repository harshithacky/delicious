import {NavLink} from 'react-router-dom';
import './Menu.css';

const Navbar = () => {
    return(
        <>
            <div className="menu">
                <div className="nav-logo">
                    <h1>Delicious</h1>
                </div>
                <div className="menu-items">
                    <ul>
                        <li><NavLink exact to="/" activeClassName="activenav">Home</NavLink></li>
                        <li><NavLink exact to="/famous" activeClassName="activenav">Famous Recipes</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;