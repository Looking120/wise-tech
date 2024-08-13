import React, { useState } from 'react';
import styles from './mainHeader.css';

const MainHeader = () => {

    const[toggle, showMenu] = useState(false);

    return (
        <div className={styles.header}>
            <nav className="nav container">
                
                <a href="index.html" className="nav-logo">WiseTech</a>

                <div className={toggle ?  "nav-menu show-menu" : "nav-menu"}>

                    <ul className="nav-list   ">
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-home nav-icons"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-book-reader nav-icons"></i>
                                About
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-file-info-alt nav-icons"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-receipt nav-icons"></i>
                                Service
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link">
                                <i className="uil uil-images nav-icons"></i>
                            Portfolio
                            </a>
                        </li>
                        <li className="nav-items">
                            <a href="" className="nav-link" >
                                <i className="uil uil-envelope-star nav-icons"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times-circle nav-close" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav-toggle" onClick={() => showMenu(!toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>

        </div>
    );
}

export default MainHeader;