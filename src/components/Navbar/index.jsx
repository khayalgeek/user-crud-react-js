import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const Navbars = () => {
    return <div>
        <Navbar className="bg-danger">
            <div className="container">
                <NavbarBrand className="text-light" href="/">User managment</NavbarBrand>
            </div>
        </Navbar>
    </div>
}

export default Navbars;