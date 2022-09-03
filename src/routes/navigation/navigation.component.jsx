import {Outlet, Link} from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <div>Logo</div>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}