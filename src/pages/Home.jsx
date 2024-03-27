import { Component } from "react";
import Navbars from "../components/Navbar";
import UserContainer from "../components/UserContainer";
import UserList from "../components/UserList";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    name: "Test",
                    surname: "Testov",
                    email:"testov@mail.com"
                }
            ]
        }
    }

    render() {
        return <>
            <Navbars />
            <UserContainer>
                <UserList userList={this.state.users}/>
            </UserContainer>
        </>
    }
}