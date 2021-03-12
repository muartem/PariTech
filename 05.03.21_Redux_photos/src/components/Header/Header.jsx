import React, {useState} from 'react';
import classNames from 'classnames/bind';
import {Link, Switch, Route} from "react-router-dom";

import s from './Header.module.css'

const Header = () => {
    const [scrollY, setScrollY] = useState(false)
    document.addEventListener('scroll', e => {
        setScrollY(window.pageYOffset > 10)
    })

    return (
        <nav className={classNames.bind(s)("navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "fixed-top", {nav: true, scroll: scrollY})}>
            <div className="container">
                <Link className={classNames("navbar-brand", s.brand)} to="">Photos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                    <ul className="navbar-nav ">
                        <Switch>
                            <Route path="/album">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/photos">Photo</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/album" >Album</Link>
                                </li>
                            </Route>
                            <Route path="/photos">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page"  to="/photos">Photo</Link>
                                </li>
                            </Route>
                            <Route path="/">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
                                </li>
                            </Route>
                        </Switch>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
