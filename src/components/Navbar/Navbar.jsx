import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='nav-hold'>
            <div className="main-div container mx-auto flex justify-between">
                <div className="left-side">
                    <nav className="flex nav-list">
                        <li><a href="#" className="mr-4">Dashboard</a></li>
                        <li><a href="#" className="mr-4">Master price</a></li>
                        <li><a href="#" className="mr-4">Custom price</a></li>
                        <li><a href="#" className="mr-4">Calendar</a></li>
                        <li><a href="#">Reports</a></li>
                    </nav>
                </div>
                <div className="right-side">
                    <ul className="flex nav-list">
                        <li className="mr-4"> <a href="#"> Icon</a></li>
                        <li><a href="#">Image</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
