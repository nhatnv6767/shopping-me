import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import "./navigation.styles.scss"
import {useContext} from "react";
import {UserContext} from "../../contexts/user.context";

export default function Navigation() {
    const {currentUser} = useContext(UserContext)
    // console.log(currentUser)
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to="/shop" className="nav-link">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link">SIGN OUT</span>
                        ) : (
                            <Link to="/auth" className="nav-link">
                                SIGN IN
                            </Link>
                        )
                    }

                </div>
            </div>
            <Outlet/>
        </>
    )
}