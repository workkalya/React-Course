import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const status = useSelector((state) => state.auth.status);

    const authStatus = status; // Fix: use status for authStatus

    const NavItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto flex items-center justify-between py-4 px-6">
                <div>
                    <Link to="/">
                        <Logo width="100px" />
                    </Link>
                </div>
                <ul className="flex items-center gap-4">
                    {NavItems.map((items) =>
                        items.active ? (
                            <li key={items.name}>
                                <button
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded transition-colors duration-200"
                                    onClick={() => navigate(items.slug)}
                                >
                                    {items.name}
                                </button>
                            </li>
                        ) : null
                    )}
                    {status && (
                        <li>
                            <Logout />
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;