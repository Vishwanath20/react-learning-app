import './css/CrudFeatureLayoutMenu.css'
import { Route, Routes, BrowserRouter, Router, Link } from 'react-router-dom';

function CrudFeatureLayoutMenu() {
    return (
        <>
            <div className="menu-container">
                <ul className="menu">
                <li><Link to="/userRegistration" className="">User Registration</Link></li>
                <li><Link to="/userLogin" className="">User Login</Link></li>
                 <li><Link to="/AddPost" className="">Add Post</Link></li>
                    <li><Link to="/ViewAllPost" className="">View All Post</Link></li>
                </ul>
            </div>
        </>
    )
}

export default CrudFeatureLayoutMenu;