import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav>
            <figure><img src="assets/img/logo.png" alt=""/></figure>
            <ul>
                <li>
                    <NavLink to="/" exact activeStyle={{color: '#202336', fontWeight: '500'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/destination" activeStyle={{color: '#202336', fontWeight: '500'}}>Destination</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{color: '#202336', fontWeight: '500'}}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/partner" activeStyle={{color: '#202336', fontWeight: '500'}}>Partner</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" id="login-btn">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" id="register-btn">Register</NavLink>
                </li>
            </ul>

        </nav>
     );
}
 
export default Navigation;