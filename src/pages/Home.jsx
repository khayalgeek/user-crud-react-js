import { Component } from "react";
import Navbars from "../components/Navbar";
import UserContainer from "../components/UserComponent";

export default class Home extends Component {


    render() {
        return <>
            <Navbars />
            <UserContainer>
              
            </UserContainer>
        </>
    }
}