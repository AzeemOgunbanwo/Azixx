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

export default Navbar;