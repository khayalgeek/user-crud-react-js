import { Component } from "react";
import { AddBtn } from "../Buttons";
import UserForm from "../Form";
import { AlertEmptyUserList } from "../Alert";
import UserList from "../UserList";

export default class UserContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowModal: false,
            users: []
        }
    }

    toggleModal = () => {
        this.setState({
            isShowModal: !this.state.isShowModal
        });
    }

    addUser = (user) => {
        this.setState({
            users: [...this.state.users,user]
        })
    }


    render() {
        return <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 ">
                    <AddBtn command={this.toggleModal} />
                    <UserForm isShowModal={this.state.isShowModal} toggleModal={this.toggleModal} addUser={this.addUser} />
                </div>
                <div className="col-sm-12 mt-3">
                    {this.state.users.length <= 0 ?
                        <AlertEmptyUserList
                            text={"Empty user list !"}
                        /> :
                        <UserList
                            userList={this.state.users}
                        />
                    }
                </div>
            </div>
        </div>
    }
}