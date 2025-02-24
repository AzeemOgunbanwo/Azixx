import PropTypes from 'prop-types';

const Navbar = ({show}) => {
    return (
        <div className={show ? "sidenav active" : "sidenav"}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/videos">Videos</a></li>
            </ul>
        </div>
    )
}

// ✅ Add PropTypes validation
Navbar.propTypes = {
    show: PropTypes.bool.isRequired, // Ensure 'show' is a boolean and required
};

export default Navbar;