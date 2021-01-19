import { ReactComponent as Logo } from './logo.svg';
import './styles.css';

function Navbar() {


    return (
        <nav className="main-navbar">
            <Logo />
            <a className="logo-text" href="home">Ds Delivery</a>
        </nav>
    )

}

export default Navbar;