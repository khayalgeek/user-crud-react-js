import { Component } from "react";
import Navbars from "../components/Navbar";
import UserContainer from "../components/UserContainer";
import UserList from "../components/UserList";
import { AlertEmptyUserList } from "../components/Alert";

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