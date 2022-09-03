import {Outlet, Link} from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <div className="navigation">
                <div>Logo</div>
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