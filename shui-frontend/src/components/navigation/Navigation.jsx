import './index.css';
import { NavLink } from 'react-router-dom';
import Button from '../button/Button';

const Navigation = () => {
    return (
        <nav className="nav">
            <NavLink to="/" className="nav__link">Hem</NavLink>
            <Button
                text="Logga in"
                type="default"
                onClick={ () => console.log('Logga in') }
            />
        </nav>
    )
}

export default Navigation;