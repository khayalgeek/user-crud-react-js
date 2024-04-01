import { Component } from "react";
import Navbars from "../components/Navbar";
import UserContainer from "../components/UserContainer";

export default class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return <>
            <Navbars />
            <UserContainer/>
        </>
    }
}