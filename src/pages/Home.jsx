import { Component } from "react";
import Navbars from "../components/Navbar";
import UserContainer from "../components/UserContainer";
import UserList from "../components/UserList";
import { AlertEmptyUserList } from "../components/Alert";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [

            ]
        }

    }

    addUser(user) {
        this.setState(
            ...this.state,
            this.state.users.push(user)
        )
        
    }

    render() {
        return <>
            <Navbars />
            <UserContainer>
                {this.state.users ?
                    <AlertEmptyUserList
                        text={"Empty user list !"}
                    /> :
                    <UserList
                        userList={this.state.users}
                    />
                }

            </UserContainer>
        </>
    }
}