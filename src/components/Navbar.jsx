import PropTypes from 'prop-types';
import {HashLink as Link} from 'react-router-hash-link'

const Navbar = ({show}) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul>
                <li><Link smooth to="#home"> Home </Link></li>
                <li><Link smooth to="#videos"> Videos </Link></li>
                <li><Link smooth to="#music"> Music </Link></li>
            </ul>
        </div>
    )
}

// ✅ Add PropTypes validation
Navbar.propTypes = {
    show: PropTypes.bool.isRequired, // Ensure 'show' is a boolean and required
};

export default Navbar;